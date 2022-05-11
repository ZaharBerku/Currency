import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import styles from "./Main.module.scss";
import { Input } from "../Input";
import { Button } from "../Button";
import { colourStyles } from "../../data";
import { FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND } from "../../store/actions";
import bigBoss from "../../assets/images/big-boss.png";
import { GlobalSvg } from "../../assets/icons/global/GlobalSvg";
import {
    getBaseCcy, 
    getCcy, 
    getValueInput, 
    changeInputValue, 
    filterOptions, 
    reverseValueInputs,
    reverseValueSelect }  from "../../store/createActions";




const Main = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.currency);
    const {valueInputFirst, valueInputSecond, isDisable} = useSelector(state => state.input);
    const { optionsSelectFirst, optionsSelectSecond, ccy, base_ccy } = useSelector(state => state.select);

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
                                    dispatch(getCcy(value));
                                    dispatch(changeInputValue({
                                        currency:data,
                                        nameFirst: "valueInputFirst",
                                        nameSecond: "valueInputSecond",
                                        ccy,
                                        base_ccy
                                    }));
                                    dispatch(filterOptions(FILTER_OPTIONS_SELECT_SECOND, value));
                                }} />

                            <Input
                                isDisable={isDisable}
                                value={valueInputFirst}
                                type={"number"}
                                handelInput={({ target }) => {
                                    dispatch(getValueInput({ name: "valueInputFirst", value: target.value }));
                                    dispatch(changeInputValue(
                                        {
                                            currency:data,
                                            nameFirst: "valueInputFirst",
                                            nameSecond: "valueInputSecond",
                                            ccy,
                                            base_ccy
                                        }
                                    ));  
                                }}
                                additionalClassNames={styles.mainInput}
                                placeholder={"0,000"} />
                        </div>


                        <Button 
                        additionalClassNames={styles.mainBtnReverse}
                        handelClick={()=> {
                            dispatch(reverseValueInputs());
                            dispatch(reverseValueSelect());
                            dispatch(filterOptions(FILTER_OPTIONS_SELECT_FIRST, ccy));
                            dispatch(filterOptions(FILTER_OPTIONS_SELECT_SECOND, base_ccy));
                        }}>
                            <GlobalSvg type={"arrowReverse"}/>
                        </Button>


                        <div className={styles.mainInputAndSelect}>
                            <Select
                                value={{ value: base_ccy, label: base_ccy }}
                                styles={colourStyles}
                                options={optionsSelectSecond}
                                onChange={({ value }) => {
                                    dispatch(getBaseCcy(value));
                                    dispatch(changeInputValue({
                                        currency:data,
                                        nameFirst: "valueInputSecond",
                                        nameSecond: "valueInputFirst",
                                        ccy,
                                        base_ccy:value
                                    }));
                                    dispatch(filterOptions(FILTER_OPTIONS_SELECT_FIRST, value));
                                }} />


                            <Input
                                isDisable={isDisable}
                                value={valueInputSecond}
                                type={"number"}
                                handelInput={({ target }) => {
                                    dispatch(getValueInput({ name: "valueInputSecond", value: target.value }));
                                    dispatch(changeInputValue(
                                        {
                                            currency:data,
                                            nameFirst: "valueInputSecond",
                                            nameSecond: "valueInputFirst",
                                            ccy,
                                            base_ccy
                                        }
                                    ));
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