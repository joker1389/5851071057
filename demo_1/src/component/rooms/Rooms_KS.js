import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Rooms_KS extends Component {
	render() {
		return (
			<div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
	    			<div className="thumbnail">
	    				<div className="caption">
	    					<h3><NavLink to={this.props.btn}>{this.props.ten}</NavLink></h3>
	    					<img src={this.props.img} alt="" />
	    					<p>
	    						{this.props.gia}<br />
	    						{this.props.dia_chi}<br />
	    						{this.props.cap}
	    					</p>
	    				</div>
	    			</div>
	    		</div>
			</div>
		);
	}
}

export default Rooms_KS
