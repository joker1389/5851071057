import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export class Header extends Component {
	render() {
		return (
			
			 <div className="header_bg">
			    <div className="wrap">
			      <div className="header">
			        <div className="logo">
			          <NavLink className="active" to="/"><img src="images/logo.png" alt="" /></NavLink>
			        </div>
			        <div className="h_right">
			          {/*bản menu đầu trang*/}
			          <ul className="menu">
			            <li><NavLink className="active" to="/">HOME</NavLink></li> |
			            <li><NavLink to="/contact">LIÊN LẠC</NavLink></li>
			          </ul>
			        </div>
			        <div className="clear" />
			      </div>
			    </div>
			  </div>

		);
	}
}

export default Header
