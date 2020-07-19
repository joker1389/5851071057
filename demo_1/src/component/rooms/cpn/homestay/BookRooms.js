import React, { Component } from 'react';

class BookRooms extends Component {
  
  constructor(props){
        super(props);
        this.state = {
            txtTen   : '',
            txtMail  : '',
            txtSDT   : '',
            txtYK    : '',
            txtCMND  : '',
            ngaynhan : '',
            ngaytra  : '',
            sophong  : '',
            loaiphong: '',
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
        if(this.state.ngaynhan === ''){
            alert('Chưa điền Ngày Nhận Phòng')
        }
        else if(this.state.ngaytra === ''){
            alert('Chưa điền Ngày Trả Phòng')
        }
        else if(this.state.loaiphong === ''){
            alert('Chưa chọn Loại Phòng')
        }
        else if(this.state.sophong === ''){
            alert('Chưa chọn Số Lượn Phòng')
        }
        else if(this.state.txtTen === ''){
            alert('Chưa điền Họ Và Tên')
        }
        else if(this.state.txtMail === ''){
            alert('Chưa điền E-Mail')
        }
         else if(this.state.txtSDT === ''){
            alert('Chưa điền Số Điện Thoại')
        }
        else if(this.state.txtCMND === ''){
            alert('Chưa điền CMND')
        }
        else{
           var content = '';
          content += 'Họ Tên: ' + this.state.txtTen;
          content += ' - E-Mail: ' + this.state.txtMail;
          content += ' - Số Điện Thoại: ' + this.state.txtSDT;
          content += ' - CMND: ' + this.state.txtCMND;
          content += ' - Ngày nhận phòng: ' + this.state.ngaynhan;
          content += ' - Ngày trả phòng: ' + this.state.ngaytra;
          content += ' - Loại Phòng: ' + this.state.loaiphong;
          content += ' - Số Lượng Phòng: ' + this.state.sophong;
          content += ' - Ghi Chú: ' + this.state.txtYK;
          alert('Đặt Phòng Thành Công')
        }
    }

  render() {
    return (  
      <div>
        <div><center>
          <h3>ĐẶT PHÒNG</h3>
          <p className="para">Hãy cung cấp thông tin của bạn. Chúng tôi sẽ xác nhận thông tin khi bạn đặt phòng.</p></center>
          <div className="span2_of_1">
          </div>
        </div>      
        <div className="main">
          <div className="span2_of_1">
            <h4>Ngày nhận phòng(*):</h4>
            <div className="book_date btm">
              <form>
                <input type="date" name="ngaynhan" defaultValue="DD/MM/YY" className="form-control" required="required" title="" onChange={this.isInputChange} />
              </form>
            </div>  
            <div className="sel_room">
              <h4>Loại Phòng(*)</h4>
              <select id="country" name = "loaiphong" className="frm-field required" onChange={this.isInputChange}>
                <option value="">Chọn loại phòng</option>
                <option value="1">Phòng Đơn</option>         
                <option value="2">Phòng Đôi</option>
                <option value="3">Phòng 4 người</option>
              </select>
            </div>    
          </div>
          <div className="span2_of_1">
            <h4>Ngày Trả Phòng(*):</h4>
            <div className="book_date btm">
              <form>
                <input type="date" name="ngaytra" defaultValue="DD/MM/YY" className="form-control" required="required" title="" onChange={this.isInputChange} />
              </form>
            </div>  
            <div className="sel_room">
              <h4>Số Lượng Phòng(*):</h4>
              <select name="sophong" id="country" className="frm-field required" onChange={this.isInputChange}>
                <option value="">0</option>
                <option value="1">1</option>         
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>  
          </div>
        </div>
          
        <div className="clear" />
        
        <div className="main">
            <div className="contact-form">
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
                  <span><label>CMND(*)</label></span>
                  <span><input name="txtCMND" type="text" className="textbox" onChange={this.isInputChange}/></span>
                </div>
                <div>
                  <span><label>Ghi Chú</label></span>
                  <span><textarea name="txtYK" defaultValue={" "} onChange={this.isInputChange}/></span>
                </div>
              </form>
            </div>
          </div> 
          <div className="res_btn">
          <form>
            <button type="button" className="btn btn-large btn-block btn-primary" onClick={this.submitForm}>ĐẶT PHÒNG</button>
          </form>
        </div>  
          <div className="clear" />
      </div>
    );
  }
}

export default BookRooms
