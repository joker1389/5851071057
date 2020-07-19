import React, { Component } from 'react';
import BookRooms from './BookRooms';

class Vl1 extends Component {
	
	
	render() {
		return (
			<div>
				<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		      				<div className="room">
			        			<h2><b>DALAT VILLA</b></h2>
			        			<h4>Đà Lạt</h4>
			           			<img src="images/vlDL.jpg" alt="" />
								<div className="clear" /><br /><br />								
								<p>DALAT VILLA là một villa nằm ngoài trung tâm thành phố Đà Lạt mang sự yên tĩnh nhưng không hề kém sang trọng.</p>
		    					<h4>Giá Phòng: 790k/1 ngày đêm</h4>
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
export default Vl1
