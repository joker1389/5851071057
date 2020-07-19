import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Ks1 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		      				<div className="room">
			        			<h2><b>KINGS HOTEL</b></h2>
			        			<h4>Đà Lạt</h4>
			           			<img src="images/ksDL.jpg" alt="" />
								<div className="clear" /><br /><br />
								<p>Kings Hotel là một khách sạn 4 sao tại Đà Lạt.</p>
								<h4>Giá Phòng: 380k/1 ngày đêm</h4>
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
export default Ks1
