import {imported} from "../../importedMembersData";
import {useDispatch} from "react-redux";
import {filterData} from "../../redux/searchBox/searchBox.actions";
import {useMemo, useState} from "react";
import {
  fetchDataTableBegin,
  fetchDataTableFailure,
  fetchDataTableSuccess
} from "../../redux/tableData/tableData.actions";
import {API} from "aws-amplify";
import {uniqueMemberPayments} from "../../helpers";
import useIsMounted from "../../useIsMounted";


const useMembers = () => {
  const isMounted = useIsMounted();
  const dispatch = useDispatch();
  const [membersData, setMembersData] = useState([]);


  useMemo(() => {
    const fetchTableData = async () => {
      dispatch(fetchDataTableBegin());
      try {
        const subscriptionsPaymentsList = await API.get('payments', '/customer/list', '');
        const currentMembersData = subscriptionsPaymentsList.data.map(d => d.metadata);
        const allData = [...imported, ...currentMembersData];
        if (isMounted.current) {
          const uniqueMembers = uniqueMemberPayments(allData);
          setMembersData(uniqueMembers);
          dispatch(fetchDataTableSuccess(uniqueMembers));
        }
      } catch (e) {
        dispatch(fetchDataTableFailure(e));
      }
    };
    fetchTableData();
  }, [dispatch, isMounted]);


  const handleChange = (e) => {
    e.persist();
    const inputValue = e.target.value;
    const filtered = membersData.filter(data =>
      Object.keys(data)
        .some(k => data[k].toString().toLowerCase()
          .includes((inputValue).toLowerCase())));
    dispatch(filterData(filtered))
  };

  return {
    handleChange,
    membersData,
    membersEmails: membersData.map(user => user.email)
  }
};

export default useMembers;