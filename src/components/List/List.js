/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
    const {text} = props;
    return (
        <li>{text}</li>
    );
};


List.protoTypes = {
    text: PropTypes.string
};

export default List;