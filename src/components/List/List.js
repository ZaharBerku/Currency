import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
    const {text} = props;
    return (
        <li>{text}</li>
    );
};


List.propTypes = {
    text: PropTypes.string
};

export { List };