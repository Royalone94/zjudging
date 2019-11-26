
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

class AboutUSPage extends React.Component {

    render() {
        console.log('AboutUsPage')
        return (
            <div className="AboutUs" style={{paddingTop:'150px'}}>
                <p style={{color:'#0098A7', fontSize:'40px', textAlign:'center', fontWeight:'bold'}}>ABOUT</p>
                <div className="container" style={{ marginTop:'60px', marginBottom:'60px'}}>
                    <div className="row">
                    <div className="col-xs-6">
                        <img src="http://img1.wsimg.com/isteam/stock/V85nEBd/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" />
                    </div>
                    <div className="col-xs-6">
                        <p style={{color:'white', fontSize:'20px', textAlign:'center'}}>Personalized Online Judging</p>
                        <p style={{color:'#A0A0A4', fontSize:'16px', textAlign:'center'}}>Each contest is different, we don't limit how you organize your contest or judge your entries. Define your own judging rubric, questions, and comments for judges to submit as they review each entry. Need multiple rounds, want group collaboration, no problem. We also support automated & manual judging assignments or use our smart judge system where we ensure every project is judged without making assignments.
                            </p>
                    </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop:'60px', marginBottom:'60px'}}>
                    <div className="col-xs-6">
                        <p style={{color:'white', fontSize:'20px', textAlign:'center'}}>Rigorous Testing</p>
                        <p style={{color:'#A0A0A4', fontSize:'16px', textAlign:'center'}}>For most of your clients their contest is one day a year; it is crucial that your online judging system is up and running. We ensure our systems are running at their peak and provide extra support on the day(s) of your contest. If something does go wrong we have complete redundant systems so your contest can go on.</p>
                    </div>

                    <div className="col-xs-6">
                        <img src="http://img1.wsimg.com/isteam/stock/8qNYpPY/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" />
                    </div>
                </div>

                <div className="container" style={{ marginTop:'60px', marginBottom:'60px'}}>
                    <div className="col-xs-6">
                        <img src="http://img1.wsimg.com/isteam/stock/103907/:/rs=w:600,h:300,cg:true/cr=w:600,h:300" />
                    </div>

                    <div className="col-xs-6">
                        <p style={{color:'white', fontSize:'20px', textAlign:'center'}}>Judging</p>
                        <p style={{color:'#A0A0A4', fontSize:'16px' , textAlign:'center'}}>For most of your clients their contest is one day a year; it is crucial that your online judging system is up and running. We ensure our systems are running at their peak and provide extra support on the day(s) of your contest. If something does go wrong we have complete redundant systems so your contest can go on.</p>
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

export default connect(null, mapDispatchToProps)(AboutUSPage);
