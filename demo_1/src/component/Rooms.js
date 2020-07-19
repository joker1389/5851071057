import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export class Rooms extends Component {
	render() {
		return (
			<div>				
			  {/*start main */}
		  		<div className="main_bg">
		    		<div className="wrap">
		      			<div className="main">
		        			<div>
		          				{/*tiêu đề*/}
		          				<div className="room">
		            				<h2>ROOMS</h2>
		           					<p className="para">Có rất nhiều loại hình nghỉ chân dành cho bạn. Hãy lựa chọn phù hợp với nhu cầu của bạn.</p>
		          				</div>

		          				<div>

			          				<Router>

			          					<ul>
			          						{/*homestay*/}
									        <div className="wrap">
									            <h3>HOMESTAY</h3>
												<div className="grids_of_2">
												    <div className="grids_of_img">
												    	<img src="images/pic2.jpg" alt="" />
												    </div>
												    <div className="grids_of_para">
												    	<p>Ở homestay là một trải nghiệm hoàn toàn mới lạ và hợp túi tiền cũng như không kém phần sang trọng cho những ai đam mê du lịch hay đi công tác xa nhà.</p>
												    </div>
												    <div className="clear" />					
												</div>
									            <li className="room"><NavLink to="/homestay">
									            	<button type="button" className="btn btn-primary">Chi Tiết</button>
									            </NavLink></li>
									        </div>
									   		{/*hotel*/}
								            <div className="wrap">
									            <h3>HOTEL</h3>
												<div className="grids_of_2">
												    <div className="grids_of_img">
												    	<img src="images/pic1.jpg" alt="" />
												    </div>
												    <div className="grids_of_para">
												    	<p>Khách sạn là công trình kiến trúc được xây dựng độc lập, có quy mô từ 10 buồng ngủ trở lên, bảo đảm chất lượng về cơ sở vật chất, trang thiết bị, dịch vụ cần thiết phục vụ khách du lịch.[1] Các tiện nghi cơ bản trong một phòng ở khách sạn là một giường, một nhà vệ sinh, một bàn nhỏ. Còn trong các khách sạn sang trọng hơn thì có thể có vài phòng với phòng ngủ và phòng khách riêng và thêm các tiện nghi khác như máy điều hòa nhiệt độ, điện thoại, ti vi, mini bar với các loại đồ uống, cà phê, trà và các dụng cụ nấu nước nóng.</p>
												    </div>
												    <div className="clear" />					
												</div>
									            <li className="room"><NavLink to="/hotel">								            	
						          					<button type="button" className="btn btn-primary">Chi Tiết</button>
									            </NavLink></li>
									        </div>
									    {/*villa*/}
									        <div className="wrap">
									            <h3>VILLA</h3>
												<div className="grids_of_2">
												    <div className="grids_of_img">
												    	<img src="images/pic3.jpg" alt="" />
												    </div>
												    <div className="grids_of_para">
												    	<p>Thuê biệt thự nghỉ dưỡng là nhu cầu ngày càng tăng cao với cả các khách hàng cao cấp và trung bình. Nó không phải chỉ là nơi dành cho những khách du lịch nhiều tiền nữa bởi mức giá thuê cũng không phải quá đắt đỏ như trước. </p>
												    </div>
												    <div className="clear" />					
												</div>
									            <li className="room"><NavLink to="/villa">
						          					<button type="button" className="btn btn-primary">Chi Tiết</button>
									            </NavLink></li>
									        </div>
								        </ul>

				       				</Router>

				       			</div>

		        			</div>
		        			<div className="clear" />
		    			</div>
					</div>
				</div>						
			  
			</div>

		);
	}
}

export default Rooms
