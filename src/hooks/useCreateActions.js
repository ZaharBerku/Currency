import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators } from "redux";


export const useCreateActions = (createActions) => {
    const dispatch = useDispatch();
    
    const boundCreateActions = useMemo(()=>{
        return bindActionCreators(createActions, dispatch);
    }, [createActions, dispatch]);

    return boundCreateActions;
};