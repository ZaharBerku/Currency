import React, {useEffect} from "react";
import { Header, Main } from "./components";
import { dataHeader, options } from "./data";
import { useDispatch, useSelector } from "react-redux";
import createActions from "./store/createActions";
import actions from "./store/actions";


const App = () => {
  const dispatch = useDispatch();
  const { ccy, base_ccy } = useSelector(state=> state.select);
  const {getOptions, getDataHeader, getDataCurrency, filterOptions } = createActions;
  const {FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND} = actions;

  useEffect(()=>{

    dispatch(getOptions(options));
    dispatch(getDataHeader(dataHeader));
    dispatch(filterOptions(FILTER_OPTIONS_SELECT_FIRST, base_ccy));
    dispatch(filterOptions(FILTER_OPTIONS_SELECT_SECOND, ccy));

    try{
      dispatch(getDataCurrency());
    }catch(err){
      console.log(err);
    }
  },[]);


  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  );
};

export default App;
