import React, { Component } from 'react';
import Rooms_KS from './Rooms_KS';

class KhachSan extends Component {
	render() {
		
		var hotel = [
			{
				id : 1,
				ten : 'Kings Hote',
				img : 'images/ksDL.jpg',
				dia_chi : 'Đà Lạt',
				gia: '380k/đêm',
				cap : 'Có Buffet sáng mỗi ngày tại nhà ăn',
				btn : '/ks1',
				status : true
			},
			{
				id : 2,
				ten : 'Green Hotel',
				img : 'images/ksVT.jpg',
				dia_chi : 'Vũng Tàu',
				gia: '300k/đêm',
				cap : 'View nhìn ra biển',
				btn : '/ks2',
				status : true
			},
			{
				id : 3,
				ten : 'BoSaMia Hotel',
				img : 'images/ksDN.jpg',
				dia_chi : 'Đà Nẵng',
				gia: '500k/đêm',
				cap : 'Phục vụ món ăn nhật tận phòng',
				btn : '/ks3',
				status : true
			},
		];

		let ks = hotel.map((hotel, index) =>{
			return <Rooms_KS
						key={hotel.id}
						ten={hotel.ten}
						img={hotel.img}
						dia_chi={hotel.dia_chi}
						btn={ hotel.btn}
						gia={hotel.gia}
						cap={hotel.cap}
						/>
		});

		return (
		    <div className="wrap">
	    		
    			<div className="room">
    				<h3>HOTEL</h3>
    				<p>Khách sạn là công trình kiến trúc được xây dựng độc lập, có quy mô từ 10 buồng ngủ trở lên, bảo đảm chất lượng về cơ sở vật chất, trang thiết bị, dịch vụ cần thiết phục vụ khách du lịch.[1] Các tiện nghi cơ bản trong một phòng ở khách sạn là một giường, một nhà vệ sinh, một bàn nhỏ. Còn trong các khách sạn sang trọng hơn thì có thể có vài phòng với phòng ngủ và phòng khách riêng và thêm các tiện nghi khác như máy điều hòa nhiệt độ, điện thoại, ti vi, mini bar với các loại đồ uống, cà phê, trà và các dụng cụ nấu nước nóng.</p>
    			</div>
    			<br />
				<div className="grids_of_2">
					{ks}					
				</div>
				

			</div>
		);
	}
}

export default KhachSan