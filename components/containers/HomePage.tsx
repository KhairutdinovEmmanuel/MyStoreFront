// Core
import { useEffect, useState } from "react";
// Components
import HomePage from "../public-pages/HomePage";
// Hooks
import useMockData from "../../hooks/useMockData";

const HomePageContainer: React.FC = () => {

  const [sliderList, setSliderList] = useState([]);

  const responseSliderList = useMockData("GET_SLIDER", {});

  useEffect(() => {
    if(responseSliderList.loading) return;
    if(responseSliderList.data) {
      setSliderList(responseSliderList.data);
    } 
  }, [responseSliderList])

  return (
    <HomePage sliderList={sliderList} />
  )
}

export default HomePageContainer;