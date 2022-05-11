import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Main } from "./components";
import { dataHeader, options } from "./data";
import { createActions } from "./store/createActions";
import { useCreateActions } from "./hooks/useCreateActions";
import { FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND } from "./store/actions";

const App = () => {
  const { ccy, base_ccy } = useSelector(state => state.select);
  const { getOptions, getDataHeader, filterOptions, getDataCurrency } = useCreateActions(createActions);

  useEffect(() => {
    getOptions(options);
    getDataHeader(dataHeader);
    filterOptions(FILTER_OPTIONS_SELECT_FIRST, base_ccy);
    filterOptions(FILTER_OPTIONS_SELECT_SECOND, ccy);

    try {
      getDataCurrency();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
