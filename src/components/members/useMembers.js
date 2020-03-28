import {imported} from "./importedData";
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

const useMembers = () => {

  const dispatch = useDispatch();
  const [membersData, setMembersData] = useState([]);

  useMemo(() => {
    const fetchTableData = async () => {
      dispatch(fetchDataTableBegin());
      try {
        const paymentsList = await API.get('payments', '/list', '');
        const currentMembersData = paymentsList.data.map(d => d.metadata);
        //filter data they do have key, meaning they are memberships
        // otherwise they are donations
        const valid = currentMembersData.filter(d => d.key);
        const allData = [...imported, ...valid];
        const uniqueMembers = uniqueMemberPayments(allData);
        setMembersData(uniqueMembers);
        dispatch(fetchDataTableSuccess(uniqueMembers));
      } catch (e) {
        dispatch(fetchDataTableFailure(e));
      }
    };
    fetchTableData();
  }, [dispatch]);

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
  }
};

export default useMembers;