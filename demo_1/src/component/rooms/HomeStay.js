import React, { Component } from 'react';
import Rooms_HS from './Rooms_HS';

class HomeStay extends Component {

	

	render() {
		
		var homestay = [
			{
				id : 1,
				ten : 'Hoa Cúc',
				img : 'images/hoacuc.jpg',
				dia_chi : 'Đà Lạt',
				gia: '250k/đêm',
				btn : '/hs1',
				cap : 'Tối đa 4 người',
				status : true
			},
			{
				id : 2,
				ten : 'Hướng Dương',
				img : 'images/vungtau.jpg',
				dia_chi : 'Vũng Tàu',
				gia: '280k/đêm',
				btn : '/hs2',
				cap : 'Tối đa 2 người',
				status : true
			},
			{
				id : 3,
				ten : 'Bà Nà',
				img : 'images/danang.jpg',
				dia_chi : 'Đà Nẵng',
				gia: '310k/đêm',
				btn : '/hs3',
				cap : 'Tối đa 2 người',
				status : true
			},
		];

		let hs = homestay.map((homestay, index) =>{
			return <Rooms_HS
						key={homestay.id}
						ten={homestay.ten}
						img={homestay.img}
						dia_chi={homestay.dia_chi}
						gia={homestay.gia}
						btn={homestay.btn}
						cap={homestay.cap}/>
		});

		return (
		    <div className="wrap">
	    		{/*danh sách phòng*/}
	    		
    			<div className="room">
    				<h3>HOMESTAY</h3>
    				<p>Ở homestay là một trải nghiệm hoàn toàn mới lạ và hợp túi tiền cũng như không kém phần sang trọng cho những ai đam mê du lịch hay đi công tác xa nhà.</p>
    			</div>
    			<br />
				<div className="grids_of_2">
					{hs}					
				</div>
				

			</div>
		);
	}
}

export default HomeStay