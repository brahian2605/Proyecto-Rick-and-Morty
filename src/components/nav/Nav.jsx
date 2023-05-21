import React from "react";
import { Link } from "react-router-dom"
import NavLink from "../Navlink/Navlink";
import SearchBar from "../searchbar/SearchBar";
import style from './Nav.module.css'

class Nav extends React.Component {
    constructor(props){
        super()
    }

    render(){
        return <nav className={style.nav}>
           <Link to={'/home'}> <button>home</button></Link> 
        <Link to={'/about'}> <span>about</span></Link>

             <SearchBar onSearch={this.props.onSearch} />
        </nav>
    }
}

export default Nav;