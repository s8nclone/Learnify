import React, { createContext, useState } from "react";
import { certificateData } from "../components/CertificationSection/cetificationData";

const AuthContext = createContext();

const ContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("Dera");
    const [passwordProgress, setPasswordProgress] = useState(false)
    const [visible, setVisible] = useState(true)

    const moreCourseItems = [...certificateData];
    while (moreCourseItems.length < 8) {
        for (let i = 0; i < certificateData.length; i++) {
            if (moreCourseItems.length < 8) {
                moreCourseItems.push(certificateData[i]);
            } else {
                break;
            }
        }
    }

    return (
        <AuthContext.Provider 
            value={{ 
                isLoggedIn, 
                setIsLoggedIn, 
                userName, 
                setUserName, 
                moreCourseItems,
                passwordProgress,
                setPasswordProgress,
                visible,
                setVisible
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export {ContextProvider, AuthContext};