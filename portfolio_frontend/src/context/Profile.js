import {createContext, useContext} from "react"
const profileContest=createContext({

});
export const profileProvider=profileContest.Provider;
export const  useProfile=()=>{
    return useContext(profileContest);
}