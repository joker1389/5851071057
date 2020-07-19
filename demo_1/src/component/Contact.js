import React, { Component } from 'react';

class Contact extends Component {
	
    constructor(props){
        super(props);
        this.state = {
            txtTen : '',
            txtMail: '',
            txtSDT : '',
            txtYK  : ''
        };
    }

    isInputChange = (event) => {
        const target = event.target;

        const name = target.name;
        const value = target.value;



        this.setState({
            [name] : value
        });


    }

    submitForm = () => {
        
        if(this.state.txtTen === ''){
            alert('Chưa điền Họ Và Tên')
        }
        else if(this.state.txtMail === ''){
            alert('Chưa điền E-Mail')
        }
         else if(this.state.txtSDT === ''){
            alert('Chưa điền Số Điện Thoại')
        }
        else if(this.state.txtYK === ''){
            alert('Chưa điền Ý Kiện Đúng Góp')
        }
        else{
            var content = '';
        content += 'Họ Tên: ' + this.state.txtTen;
        content += ' - E-Mail: ' + this.state.txtMail;
        content += ' - Số Điện Thoại: ' + this.state.txtSDT;
        content += ' - Ý Kiên: ' + this.state.txtYK;

        console.log(content);

        this.props.submitForm(this.state);
        }
    }

    


    render() {
		return (
			<div>
                {/*start main */}
                <div className="main_bg">
                    <div className="wrap">
                        <div className="main">
                            <div className="contact">				
                                <div className="contact_left">
                                    <div className="company_address">
                                        <h3>Thông Tin:</h3>
                                        <p>450 Lê Văn Việt,</p>
                                        <p>phường Tăng Nhơn Phú A, quận 9, thành phố Hồ Chí Minh</p>
                                        <p>Việt Nam</p>
                                        <p>Phone:(+84) 123456789</p>
                                        <p>Email: <a href="https://mail.google.com/">Gmail</a></p>
                                        <p>Follow on: <a href="https://www.facebook.com/">Facebook</a></p>
                                    </div>
                                </div>				
                                <div className="contact_right">
                                    <div className="contact-form">
                                        <h3>Phản Hồi</h3>
                                        <form method="post" action="contact-post.html">
                                            <div>
                                                <span><label>Tên(*)</label></span>
                                                <span><input name="txtTen" type="text" className="textbox" onChange={this.isInputChange} /></span>
                                            </div>
                                            <div>
                                                <span><label>E-MAIL(*)</label></span>
                                                <span><input name="txtMail" type="text" className="textbox" onChange={this.isInputChange} /></span>
                                            </div>
                                            <div>
                                                <span><label>Số Điện Thoại(*)</label></span>
                                                <span><input name="txtSDT" type="text" className="textbox" onChange={this.isInputChange} /></span>
                                            </div>
                                            <div>
                                                <span><label>Ý Kiến Đòng Góp(*)</label></span>
                                                <span><textarea name="txtYK"  onChange={this.isInputChange} /></span>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-success" onClick={this.submitForm}>GỬI</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>		
                                <div className="clear" />		
                            </div>
                        </div>
                    </div>
                </div>		
            </div>

		);
	}
}

export default Contact