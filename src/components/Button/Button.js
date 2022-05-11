/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    const {text, handelClick, additionalClassNames, children} = props;
    return(
        <button onClick={handelClick} className={additionalClassNames}>{text || children}</button>
    );
};

Button.defaultProps = {
    handelClick:()=>{},
    additionalClassNames:"",
};

Button.protoTypes = {
    text: PropTypes.string.isRequired,
    handelClick: PropTypes.func,
    additionalClassNames: PropTypes.string,
};


export default Button;