
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as postActionsCreator from '../../redux/actions/post.js';

import PostList from '../PostList/';

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActionsCreator, dispatch)
    }
}

class ReviewPage extends React.Component {

    render() {
        console.log('ReviewPage')
        return (
            <div className="Reviews" style={{backgroundColor:'#161616', paddingTop:'150px'}}>
                <p style={{color:'#0098A7', fontSize:'40px', textAlign:'center', fontWeight:'bold'}}>REVIEWS</p>
                <div className="container" style={{ marginTop:'60px', marginBottom:'60px'}}>    
                    {/* <div> */}
                        <div className="col-xs-8">
                            <p style={{color:'white', fontSize:'25px'}}>California Invention Convention:</p>
                            <p style={{color:'#A0A0A4', fontSize:'18px'}}>The California Invention Convention has been holding Invention Conventions for the past 4 years.  Three years ago we piloted a registration and judging system that was cumbersome, didn't provide the data we needed in a timely fashion, and required lots of front-loading from us before we were able to download usable results.<br/><br/>
                                    Last year we were introduced to <a href="http://zfairs.com/">zFairs.com</a> for our registration and judging needs.  Although there were a few areas which we felt could be improved, it was so much easier for us to use and download the data and reports we needed, that we were sold on the software immediately.  Perhaps the best part of it, was that Trent was able to listen to our needs and make immediate additions to the software so that we were able to get most everything we wanted in reports that worked well for us.
                                    This is our second year with zFairs, and during the interim time since we used the software last year, and this, Trent worked to improve all of the areas we had asked about last year that required a more intensive "fix"!  What is also great for our students entering our contest is that a percentage of them continue onto a National Program to compete, and the National Invention Convention uses zFairs, as well, so that their data seamlessly moves forward to their platform.<br/><br/>
                                    The judging system is easy for the judges to use, and the just like the registration system, last year, the few areas we asked to have improved were fixed for this year's judging.  Trent is easy to work with, and can be relied on to listen to your suggestions.  Our experience with zFairs has been great!  If you are looking for a registration system, and judging system that is reliable and well thought out, we'd highly recommend zFairs.<br/><br/>
                                    Brenda
                            </p>
                        </div>
                        <div className="col-xs-4">
                            <img src="http://img1.wsimg.com/isteam/ip/73d427b2-5ae9-43b5-9c09-e9e7a67d63fd/CIC.png/:/rs=w:400,cg:true,m"/>
                        </div>
                    {/* </div> */}
                </div>

                <div style={{ backgroundColor: 'black', paddingTop:'60px', paddingBottom:'60px'}}>
                    <div className="container">
                        <div className="col-xs-8">
                            <p style={{ color: 'white', fontSize: '25px' }}>Ritchey Science & Engineering Fair<br/><br/></p>
                            <p style={{ color: '#A0A0A4', fontSize: '18px' }}>I can say right off that almost everyone I spoke with at the fair loved the online system and I believe it made our judging process shorter this year. The time was mostly saved during the reporting process and we were actually ready early for once.
                            <br/><br/>
                            Sheri
                            </p>
                        </div>
                        <div className="col-xs-4">
                            <img src="//img1.wsimg.com/isteam/ip/73d427b2-5ae9-43b5-9c09-e9e7a67d63fd/RitcheyLogoWSU-0002.png/:/rs=w:400,cg:true,m" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
        let { postActions } = this.props
        postActions.fetchList()
    }

}

export default connect(null, mapDispatchToProps)(ReviewPage);
