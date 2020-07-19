import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Hs1 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
			        		<div className="room">
			        			<h2><b>HOA CÚC</b></h2>
			        			<h4>Đà Lạt</h4>
			           			<img src="images/hoacuc.jpg" alt="" />
								<div className="clear" /><br /><br />
								<p>Hoa Cúc là một home stay có thiết kế như một vùng nông thôn yên bình nằm giữa lòng thành phố Đà Lạt.</p>
			    				<h4>Giá Phòng: 250k/1 ngày đêm</h4>
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
export default Hs1
