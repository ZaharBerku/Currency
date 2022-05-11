import React, { useEffect, useState } from "react";
import { Header, Main } from "./components";
import { dataHeader, options } from "./data";
import { useDispatch, useSelector } from "react-redux";
import createActions from "./store/createActions";
import actions from "./store/actions";
import ProviderContext from "./context/ProviderContext";

const App = () => {
  const dispatch = useDispatch();
  const { ccy, base_ccy } = useSelector(state => state.select);
  const { getOptions, getDataHeader, getDataCurrency, filterOptions } = createActions;
  const { FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND } = actions;
 

  useEffect(() => {

    dispatch(getOptions(options));
    dispatch(getDataHeader(dataHeader));
    dispatch(filterOptions(FILTER_OPTIONS_SELECT_FIRST, base_ccy));
    dispatch(filterOptions(FILTER_OPTIONS_SELECT_SECOND, ccy));

    try {
      dispatch(getDataCurrency());
    } catch (err) {
      console.log(err);
    }
  }, []);

  


  return (
    <ProviderContext value={value}>
      <div className="container">
        <Header />
        <Main />
      </div>
    </ProviderContext>
  );
};

export default App;
