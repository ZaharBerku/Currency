import React from "react";
import styles from "./Main.module.scss";
import Input from "../Input";
import Button from "../Button";
import Select from "react-select";
import { colourStyles } from "../../data";
import createActions  from "../../store/createActions";
import actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import bigBoss from "../../assets/images/big-boss.png";
import GlobalSvg from "../../assets/icons/global/GlobalSvg";




const Main = () => {
    const dispatch = useDispatch();
    const { input, select, currency:{data} } = useSelector(state => state);
    const {valueInputFirst, valueInputSecond, isDisable} = input;
    const { optionsSelectFirst, optionsSelectSecond, ccy, base_ccy } = select;
    
    const { 
        getBaseCcy, 
        getCcy, 
        getValueInput, 
        changeInputValue, 
        filterOptions, 
        reverseValueInputs,
        reverseValueSelect } = createActions;


    const { FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND } = actions;


    return (
        <main className={styles.main}>
            <div className={styles.main__container}>
                <div>
                    <h1 className={styles.main__title_text}>Instant currency exchange</h1>
                    <div className={styles.main__currency}>
                        <div className={styles.main__input_and_select}>
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
                                additionalClassNames={styles.main__input}
                                placeholder={"0,000"} />
                        </div>


                        <Button 
                        additionalClassNames={styles.main__btn_reverse}
                        handelClick={()=> {
                            dispatch(reverseValueInputs());
                            dispatch(reverseValueSelect());
                            dispatch(filterOptions(FILTER_OPTIONS_SELECT_FIRST, ccy));
                            dispatch(filterOptions(FILTER_OPTIONS_SELECT_SECOND, base_ccy));
                        }}>
                            <GlobalSvg type={"arrowReverse"}/>
                        </Button>


                        <div className={styles.main__input_and_select}>
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
                                additionalClassNames={styles.main__input}
                                placeholder={"0,000"} />
                        </div>
                    </div>
                </div>
                <img className={styles.main__img} src={bigBoss} alt="big-boss" />
            </div>
        </main>
    );
};


export default Main;