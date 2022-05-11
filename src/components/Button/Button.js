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
    children:null,
    text:null
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    text: PropTypes.string,
    handelClick: PropTypes.func,
    additionalClassNames: PropTypes.string,
};


export { Button };