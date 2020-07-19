import React, { Component } from 'react';
import Rooms_VL from './Rooms_KS';
class Villa extends Component {
	render() {
		
		var villa = [
			{
				id : 1,
				ten : 'DALAT VILLA',
				img : 'images/vlDL.jpg',
				dia_chi : 'Đà Lạt',
				gia: '790k/đêm',
				cap : 'Có 4 phòng ngủ, 1 phòng khách, 1 nhà bếp',
				btn : '/vl1',
				status : true
			},
			{
				id : 2,
				ten : 'STAR VILLA',
				img : 'images/vlVT.jpg',
				dia_chi : 'Vũng Tàu',
				gia: '880k/đêm',
				cap : 'Có hồ bơi riêng',
				btn : '/vl2',
				status : true
			},
			{
				id : 3,
				ten : 'HAPPY HOUSE',
				img : 'images/vlDN.jpg',
				gia: '999k/đêm',
				cap : 'Làm hài lòng mọi khách du lịch',
				dia_chi : 'Đà Nẵng',
				btn : '/Vl3',
				status : true
			},
		];

		let vl = villa.map((villa, index) =>{
			return <Rooms_VL
						key={villa.id}
						ten={villa.ten}
						img={villa.img}
						dia_chi={villa.dia_chi}
						btn={villa.btn}
						gia={villa.gia}
						cap={villa.cap}
						/>
		});

		return (
		    <div className="wrap">
	    		
	    		
    			<div className="room">
    				<h3>VILLA</h3>
    				<p>Thuê biệt thự nghỉ dưỡng là nhu cầu ngày càng tăng cao với cả các khách hàng cao cấp và trung bình. Nó không phải chỉ là nơi dành cho những khách du lịch nhiều tiền nữa bởi mức giá thuê cũng không phải quá đắt đỏ như trước. </p>
    			</div>
    			<br />
				<div className="grids_of_2">
					{vl}					
				</div>

			</div>
		);
	}
}

export default Villa