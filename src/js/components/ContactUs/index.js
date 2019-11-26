
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class ContactUSPage extends React.Component {
    render() {
        return (
            <div className="ContactUs" style={{paddingTop:'150px', marginBottom:'100px'}}>
                <p className="fontsize_40" style={{color:'#0098A7', textAlign:'center', fontWeight:'bold'}}>CONTACT US</p>
                <div className="container" style={{textAlign:'center'}}>
                    <p style={{color:'white', fontSize:'25px', textAlign:'center'}}>Each Contest is different tell us about yours.</p>
                    <div style={{marginTop:'20px', marginBottom:'20px'}}><input type="text" placeholder="Name" style={{width:'80%'}}/></div>
                    <div style={{marginTop:'20px', marginBottom:'20px'}}><input type="email" placeholder="Email*" style={{width:'80%'}}/></div>
                    <div style={{marginTop:'20px', marginBottom:'20px'}}>
                        <textarea  placeholder="Message" 
                        />
                    </div>
                    <button type="submit" className="white">SEND</button>
                    <p className="gray-text text-center fontsize_18" style={{marginTop:'30px'}}>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>

                    <div style={{marginTop:'60px'}}>
                        <p className="white fontsize_25">zJudging - Online Judging</p>
                        <p className="gray-text fontsize_18">3556 S 5600 W Unit 1-138, West Valley City, Utah 84128, United States</p>
                        <a className="fontsize_18" rel="" href="tel:8002520903">(800) 252-0903</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {})(ContactUSPage);
