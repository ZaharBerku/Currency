/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";


const Input = (props) => {
    const { isDisable, value, handelInput, additionalClassNames, type, placeholder } = props;
    return (
        <input disabled={isDisable} value={value} placeholder={placeholder} type={type} onInput={handelInput} className={additionalClassNames}/>
    );
};



Input.defaultProps = {
    isDisable:true,
    handelInput:()=>{},
    additionalClassNames:"input",
    type:"text",
    placeholder:"",
};

Input.protoTypes = {
    isDisable: PropTypes.bool,
    value: PropTypes.string.isRequired,
    handelInput: PropTypes.func,
    additionalClassNames: PropTypes.string ,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default React.memo(Input);
