const EUR = "EUR";
const USD = "USD";


///HEADER
export const dataHeader = {
    nav:[
        {
            id:1,
            text: "Service",
        },
        {
            id:2,
            text: "About us",
        },
        {
            id:3,
            text: "F.A.Q.",
        },
    ],
    EUR,
    USD,
    btn:{
        text:"log in",
    },
    nameSvg:"card"
};

///SELECT
export const options = [
    { value: "UAH", label: "UAH" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" }
  ];


  
export const colourStyles = {
    control: (styles) => ({
        ...styles,
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px #E5E5E5",
        borderRadius: "13px",
        padding:"7px 68px 7px 105px",
        border: "none",
        cursor: "pointer",  
    })
};