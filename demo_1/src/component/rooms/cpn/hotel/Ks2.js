import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Ks2 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		      				<div className="room">
			        			<h2><b>GREEN HOTEL</b></h2>
			        			<h4>Đà Lạt</h4>
			           			<img src="images/ksVT.jpg" alt="" />
								<div className="clear" /><br /><br />
								<p>GREEN HOTEL là một khách sạn của người anh tại Vũng Tàu.</p>
								<h4>Giá Phòng: 300k/1 ngày đêm</h4>
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
export default Ks2
