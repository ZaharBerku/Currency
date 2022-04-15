import React, {useState} from "react";
import styles from "./Header.module.scss";
import { GlobalSvg } from "../../assets";
import { useSelector } from "react-redux";
import List from "../List";
import Button from "../Button";
import { findCcy } from "../../util";
import classNames from "classnames";

const Header = () => {
    const [isDone, setIsDone] = useState(false);
    const {header:{header}, currency:{data}} = useSelector(state => state);
    const {nav = [], nameSvg = "", btn = "", USD, EUR } = header;
    
    const dataUSD = findCcy(data, USD);
    const dataEUR = findCcy(data, EUR);

    return (
        <header className={styles.header}>
            <div className={classNames(styles.header__nav, styles.nav)}>
                <div className={styles.nav__title}>
                    <span className={styles.nav__title_svg}>
                    <GlobalSvg type={nameSvg} />
                    </span>
                    <h1 className={styles.nav__title_text}>B-bank</h1>
                </div>
                <ul className={classNames(styles.nav__list, {[styles.nav__open_burger]:isDone})}>
                    {nav.map(({id, text}) =><List key={id} text={text}/>)}
                    <Button additionalClassNames={styles.nav__btn_list} text={btn.text}/>
                </ul>
                <div className={styles.nav__cuurrency}>
                {dataUSD && <p><GlobalSvg type={USD} />{`${dataUSD.buy}/${dataUSD.sale}`}</p>}
                {dataEUR && <p><GlobalSvg type={EUR} />{`${dataEUR.buy}/${dataEUR.sale}`}</p>}
                </div>
                <div className={styles.nav__container_btn}>
                <Button additionalClassNames={classNames(styles.nav__btn, {[styles.nav__open_burger_btn]:isDone})} handelClick={()=>setIsDone(!isDone)} >
                    {btn.text}
                    <span className={styles.nav__burgger_line}></span>
                </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;