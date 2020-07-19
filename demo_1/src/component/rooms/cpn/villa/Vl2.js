import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Vl2 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		      				<div className="room">
			        			<h2><b>STAR VILLA</b></h2>
			        			<h4>Vũng Tàu</h4>
			           			<img src="images/vlVT.jpg" alt="" />
								<div className="clear" /><br /><br /><br />
								<p>DSTAR VILLA là lựa chọn tuyệt vời cho ai muốn tìm một căn villa rộng rãi mà giá cực kỳ hợp lý khi đi Vũng Tàu.</p>
		    					<h4>Giá Phòng: 880k/1 ngày đêm</h4>
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
export default Vl2
