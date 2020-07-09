import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return(
        <div className="App">            
    		<div className="header_bg">        		
		        <div className="images-slider">
		            <div id="fwslider">
		                <div className="slider_container">
		                    <div className="slide"> 
		                        <img src="images/slider-bg.jpg" alt=""/>
		                        <div className="slide_content">
		                            <div className="slide_content_wrap">
		                                <h4 className="title"><i className="bg"></i> tiện ích, <span className="hide">sang trọng</span></h4>
		                                <h5 className="title1"><i className="bg"></i>VN TRAVEL BOOKING</h5>

		                            </div>
		                        </div>
		                    </div>
		                    <div className="slide">
		                        <img src="images/slider-bg.jpg" alt=""/>
		                        <div className="slide_content">
		                             <div className="slide_content_wrap">
		                                <h4 className="title"><i className="bg"></i> AN TOÀN, <span className="hide"> ĐẢM BẢO </span>text</h4>
		                                <h5 className="title1"><i className="bg"></i>VN TRAVEL BOOKING</h5>               
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
    		</div>

        </div>
    ); 
  }
}

export default App;
