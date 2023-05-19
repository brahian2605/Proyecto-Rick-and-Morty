import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from './Nav.module.css'

class Nav extends React.Component {
    constructor(props){
        super()
    }

    render(){
        return <nav className={style.nav}>
            <SearchBar onSearch={this.props.onSearch} />
        </nav>
    }
}

export default Nav;