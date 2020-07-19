import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Hs3 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		      				<div className="room">
			        			<h2><b>BÀ NÀ</b></h2>
			        			<h4>Đà Nẵng</h4>
			           			<img src="images/danang.jpg" alt="" />
								<div className="clear" /><br /><br />
								<p>Bà Nà nằm ở Đà Nẵng.</p>
								<h4>Giá Phòng: 310k/1 ngày đêm</h4>
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
export default Hs3
