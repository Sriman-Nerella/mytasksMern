"use client";

import React, { Children } from "react";
import { GLobalProvider } from "../context/globalProvider";

interface Props{
    children:React.ReactNode;
}

function ContextProvider({children}:Props){

    const [isReady,setIsReady] = React.useState(false);
    React.useEffect(()=> {
        setTimeout(()=> {
            setIsReady(true);
        }, 200);
    },[]);

    if(!isReady){
        return null;
    }

    return(
            <GLobalProvider>
                {children}
            </GLobalProvider>
    )
}

export default ContextProvider