import { findCcy } from "../../../util";
import { GET_DATA_CURRENCY } from "./currencyActions";



export const getDataCurrency = () => async (dispatch) => {
    const data = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then(res=>res.json());
    const usd = findCcy(data, "USD");
    const eur = findCcy(data, "EUR");
   
    const newEur = {
        ccy:eur.ccy,
        base_ccy:usd.ccy,
        buy:`${(eur.buy / usd.buy).toFixed(2)}`,
        sale:`${(usd.buy / eur.buy).toFixed(2)}`,
    };

    data.push(newEur);

    const newData = [...data].map(element =>{
        element.buy = element.buy.slice(0,5);
        element.sale = element.sale.slice(0,5);
        return element;
    });
    

    dispatch({type:GET_DATA_CURRENCY, payload:newData});
};