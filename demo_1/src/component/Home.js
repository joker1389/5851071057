import React, { Component } from 'react';
import HomeStay from './rooms/HomeStay';
import KhachSan from './rooms/KhachSan';
import Villa from './rooms/Villa';


class Home extends Component {

	constructor(props){
        super(props);
        this.state = {
            isHomestay : false,
            isHotel    : false,
            isVilla    : false
        }
    }

    onHomestay = () => {
        this.setState({
            isHomestay : !this.state.isHomestay,
            isHotel : false,
            isVilla : false
        });
    }

    onHotel = () => {
        this.setState({
            isHotel : !this.state.isHotel,
            isHomestay : false,
            isVilla : false
        });
    }
     
    onVilla = () => {
        this.setState({
            isVilla : !this.state.isVilla,
            isHomestay : false,
            isHotel : false
        });
    }
	
	render() {
		var {isHomestay, isHotel, isVilla} = this.state;
        var eleHomestay = isHomestay ? <HomeStay /> : '';
        var eleHotel = isHotel ? <KhachSan /> : '';
        var eleVilla = isVilla ? <Villa /> : '';

		return (
			<div>
			  {/*slide*/}
				<div className="images-slider">			    
				    <div id="fwslider">
					    <div className="slider_container">
					        <div className="slide">			          
					          	<img src="images/slider-bg.jpg" alt="" />			          
						        <div className="slide_content">
						            <div className="slide_content_wrap">			              
						              	<h4 className="title"><i className="bg" />tiện ích, sang trọng</h4>
						             	<h5 className="title1"><i className="bg" />VN TRAVEL BOOKING</h5>			              
						            </div>
						        </div>			          
					        </div>			        
					        <div className="slide">
					          <img src="images/slider-bg.jpg" alt="" />
					          <div className="slide_content">
					            <div className="slide_content_wrap">			              
					              <h4 className="title"><i className="bg" />ở mọi điểm đến</h4>
					              <h5 className="title1"><i className="bg" />VN TRAVEL BOOKING</h5>			              
					            </div>
					          </div>
					        </div>			        
					    </div>
					    <div className="timers"> </div>
					    <div className="slidePrev"><span> </span></div>
					    <div className="slideNext"><span> </span></div>
				    </div>			    
				</div>
				
				<table className="table table-bordered table-hover">
					<thead>
						<tr>
							<th>
								<h4><b><center>CÁC LOẠI HÌNH</center></b></h4>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div>
				                    <button
				                        type="button"
				                        className="btn btn-large btn-block btn-info"
				                        onClick={this.onHomestay}
				                        >
				                            HOMESTAY
				                    </button>
				                    {eleHomestay}
				                </div>
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td>
								<div>
				                    <button
				                        type="button"
				                        className="btn btn-large btn-block btn-info"
				                        onClick={this.onHotel}
				                        >
				                            HOTEL
				                    </button>
				                    {eleHotel}
				                </div>
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td>
								<div>
				                    <button
				                        type="button"
				                        className="btn btn-large btn-block btn-info"
				                        onClick={this.onVilla}
				                        >
				                            VILLA
				                    </button>
				                    {eleVilla}
				                </div>
							</td>
						</tr>
					</tbody>
				</table>              
                
			</div>

		);
	}
}

export default Home;
