import React from "react";//{useState,useEffect,useContext}
import Header2 from "./Header2";
import Menu from "./Menu";
const HeaderWithMenu2=({username})=>{
    return(<>
    <Header2 username={username}/>
        <Menu/>
        </>
    );
}
export default HeaderWithMenu2;