import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import styles from "./Main.module.scss";
import { Input } from "../Input";
import { Button } from "../Button";
import { colourStyles } from "../../data";
import { selectors } from "../../store/selectors";
import { FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND } from "../../store/actions";
import bigBoss from "../../assets/images/big-boss.png";
import { GlobalSvg } from "../../assets/icons/global/GlobalSvg";
import { useCreateActions } from "../../hooks/useCreateActions";
import { createActions }  from "../../store/createActions";



const Main = () => {
    const { data } = useSelector(selectors.currency);
    const {valueInputFirst, valueInputSecond, isDisable} = useSelector(selectors.input);
    const { optionsSelectFirst, optionsSelectSecond, ccy, base_ccy } = useSelector(selectors.select);
    const { getValueInput, getCcy, changeInputValue, filterOptions, reverseValueInputs, reverseValueSelect, getBaseCcy} = useCreateActions(createActions);
    
    return (
        <main className={styles.main}>
            <div className={styles.mainContainer}>
                <div>
                    <h1 className={styles.mainTitleText}>Instant currency exchange</h1>
                    <div className={styles.mainCurrency}>
                        <div className={styles.mainInputAndSelect}>
                            <Select
                                value={{ value: ccy, label: ccy }}
                                styles={colourStyles}
                                options={optionsSelectFirst}
                                onChange={({ value }) => {
                                    getCcy(value);
                                    changeInputValue({
                                        currency:data,
                                        nameFirst: "valueInputFirst",
                                        nameSecond: "valueInputSecond",
                                        ccy,
                                        base_ccy
                                    });
                                    filterOptions(FILTER_OPTIONS_SELECT_SECOND, value);
                                }} />

                            <Input
                                isDisable={isDisable}
                                value={valueInputFirst}
                                type={"number"}
                                handelInput={({ target }) => {
                                    getValueInput({ name: "valueInputFirst", value: target.value });
                                    changeInputValue(
                                        {
                                            currency:data,
                                            nameFirst: "valueInputFirst",
                                            nameSecond: "valueInputSecond",
                                            ccy,
                                            base_ccy
                                        }
                                    );  
                                }}
                                additionalClassNames={styles.mainInput}
                                placeholder={"0,000"} />
                        </div>


                        <Button 
                        additionalClassNames={styles.mainBtnReverse}
                        handelClick={()=> {
                            reverseValueInputs();
                            reverseValueSelect();
                            filterOptions(FILTER_OPTIONS_SELECT_FIRST, ccy);
                            filterOptions(FILTER_OPTIONS_SELECT_SECOND, base_ccy);
                        }}>
                            <GlobalSvg type={"arrowReverse"}/>
                        </Button>


                        <div className={styles.mainInputAndSelect}>
                            <Select
                                value={{ value: base_ccy, label: base_ccy }}
                                styles={colourStyles}
                                options={optionsSelectSecond}
                                onChange={({ value }) => {
                                    getBaseCcy(value);
                                    changeInputValue({
                                        currency:data,
                                        nameFirst: "valueInputSecond",
                                        nameSecond: "valueInputFirst",
                                        ccy,
                                        base_ccy:value
                                    });
                                    filterOptions(FILTER_OPTIONS_SELECT_FIRST, value);
                                }} />


                            <Input
                                isDisable={isDisable}
                                value={valueInputSecond}
                                type={"number"}
                                handelInput={({ target }) => {
                                    getValueInput({ name: "valueInputSecond", value: target.value });
                                    changeInputValue(
                                        {
                                            currency:data,
                                            nameFirst: "valueInputSecond",
                                            nameSecond: "valueInputFirst",
                                            ccy,
                                            base_ccy
                                        }
                                    );
                                }}
                                additionalClassNames={styles.mainInput}
                                placeholder={"0,000"} />
                        </div>
                    </div>
                </div>
                <img className={styles.mainImg} src={bigBoss} alt="big-boss" />
            </div>
        </main>
    );
};


export { Main };