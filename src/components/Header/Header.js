import React, {useState} from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./Header.module.scss";
import { GlobalSvg } from "../../assets";
import { List } from "../List";
import { Button } from "../Button";
import { selectors } from "../../store/selectors";
import { findCcy } from "../../util";

const Header = () => {
    const [isDone, setIsDone] = useState(false);
    const {nav = [], nameSvg = "", btn = "", USD, EUR } = useSelector(selectors.header);
    const { data } = useSelector(selectors.currency);

    const dataUSD = findCcy(data, USD);
    const dataEUR = findCcy(data, EUR);

    return (
        <header className={styles.header}>
            <div className={classNames(styles.headerNav, styles.nav)}>
                <div className={styles.navTitle}>
                    <span className={styles.navTitleSvg}>
                    <GlobalSvg type={nameSvg} />
                    </span>
                    <h1 className={styles.navTitleText}>B-bank</h1>
                </div>
                <ul className={classNames(styles.navList, {[styles.navOpenBurger]:isDone})}>
                    {nav.map(({id, text}) =><List key={id} text={text}/>)}
                    <Button additionalClassNames={styles.navBtnList} text={btn.text}/>
                </ul>
                <div className={styles.navCuurrency}>
                {dataUSD && <p><GlobalSvg type={USD} />{`${dataUSD.buy}/${dataUSD.sale}`}</p>}
                {dataEUR && <p><GlobalSvg type={EUR} />{`${dataEUR.buy}/${dataEUR.sale}`}</p>}
                </div>
                <div className={styles.navContainerBtn}>
                <Button additionalClassNames={classNames(styles.navBtn, {[styles.navOpenBurgerBtn]:isDone})} handelClick={()=>setIsDone(!isDone)} >
                    {btn.text}
                    <span className={styles.navBurggerLine}></span>
                </Button>
                </div>
            </div>
        </header>
    );
};

export { Header };