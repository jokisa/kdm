import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation=() => {
    return(
        <div className='navigation'>
            <Logo/>
            
            <NavLink className={(navData) => navData.isActive ? "nav-active" : "" }  exact to="/" >   
                Accueil

            </NavLink>
            <NavLink  className={(navData)=>navData.isActive ? "nav-active" : ""} exact to='/nosservices'>
               Nos Services 
            </NavLink>
            <NavLink className={(navData)=>navData.isActive ? "nav-active" : "" } exact to='/notreequipe'>
               Notre Equipe 
            </NavLink>
        </div>
    )
};
export default Navigation;

