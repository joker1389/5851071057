import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Hs2 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
			        		<div className="room">
			        			<h2><b>HƯỚNG DƯƠNG</b></h2>
			        			<h4>Vũng Tàu</h4>
			           			<img src="images/vungtau.jpg" alt="" />
								<div className="clear" /><br /><br />
								<p>Hướng Dương  nằm ở Vũng Tàu.</p>
								<h4>Giá Phòng: 280k/1 ngày đêm</h4>
							</div>
		    			</div>
		    			<div className="main">
		    				<BookRooms />
		    			</div>

					</div>
				</div>
			</div>
		);
	}
}
export default Hs2
