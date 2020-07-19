import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Vl3 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		      				<div className="room">
			        			<h2><b>HAPPY HOUSE</b></h2>
			        			<h4>Đà Nẵng</h4>
			           			<img src="images/vlDN.jpg" alt="" />
								<div className="clear" /><br /><br />
								<p>HAPPY HOUSE chứa đầy ánh nẵng của thành phố Đà Nẵng, phù hợp với gia đình.</p>
								<h4>Giá Phòng: 999k/1 ngày đêm</h4>
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
export default Vl3
