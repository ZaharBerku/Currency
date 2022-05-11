import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";


const ProviderContext = (props) => {
    const [ isLogin, setIsLogin ] = useState(false);
    const { children } = props;
    const value = {
        isLogin,
        setIsLogin
      };
    return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider> 
    );
};

ProviderContext.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

ProviderContext.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ProviderContext;