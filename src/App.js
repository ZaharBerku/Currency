import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Main } from "./components";
import { dataHeader, options } from "./data";
import { getOptions, getDataHeader, getDataCurrency, filterOptions } from "./store/createActions";
import { FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();
  const { ccy, base_ccy } = useSelector(state => state.select);

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
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
