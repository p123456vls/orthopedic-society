import {useState} from 'react';

const useNewPostShow = () => {
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);
  const onMouseOver = () => setIsBackButtonVisible(true);
  const onMouseOut = () => setIsBackButtonVisible(false);
    return{
      isBackButtonVisible,
      onMouseOver,
      onMouseOut
    };
};

export default useNewPostShow;