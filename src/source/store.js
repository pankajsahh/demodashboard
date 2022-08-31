import { useState } from "react";
import Context from "./context"

const Store = (props)=>{

    const [sidebar,setsidebar] = useState(false);
   



    return(
        <Context.Provider value={{
            sidebar,
            setsidebar
        }}>
            {props.children}
        </Context.Provider>
    )
}
export default Store;