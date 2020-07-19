import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Ks3 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		      				<div className="room">
			        			<h2><b>BOSAMIA HOTEL</b></h2>
			        			<h4>Đà Nẵng</h4>
			           			<img src="images/ksDN.jpg" alt="" />
								<div className="clear" /><br /><br />
								<p>BOSAMIA HOTEL thuộc hạng 5 sao ngay giữa thành phố Đà Nẵng.</p>
								<h4>Giá Phòng: 500k/1 ngày đêm</h4>
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
export default Ks3
