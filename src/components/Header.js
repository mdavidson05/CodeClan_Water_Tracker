import { useContext } from "react";
import UserContext from "../context/UserContext";
import React from "react";
const Header = () => {

    const {name} = useContext(UserContext)

    return (

        <>
            
            <h2>Hello {name} 👋</h2>
        </>
    )
}

export default Header;
