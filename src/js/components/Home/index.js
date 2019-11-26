
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

class HomePage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:'#161616', paddingBottom:'250px'}}>
          <div>
            <img src="https://img1.wsimg.com/isteam/stock/103150/:/rs=w:1920,h:1300" style={{width:'100%'}}/>
            <div style={{backgroundImage: "url('https://mdn.mozillademos.org/files/7693/catfront.png')"}} />
            <div style={{position:'absolute'}}>
            <p>ONLINE JUDGING</p>
            <p>Science & Engineering Fairs, National History Day Contests, 
              Reflections, Invention Conventions, and more.</p>
            </div>
          </div>

          <div>
            <p style={{color:'#0098A7', fontSize:'40px', textAlign:'center', fontWeight:'bold', marginTop:'30px'}}>TRUSTED BY OVER 300 CONTESTS</p>
            <p style={{color:'#0098A7', fontSize:'25px', textAlign:'center'}}>Hundreds of contests use our system each year, isn't about time your contest starts?</p>
            <p className="white" style={{fontSize:'20px', textAlign:'center', fontWeight:'italic'}}>Contact us today to learn more</p>
          </div>
          <PostList />
      </div>
    );
  }

  componentWillMount() {
    let { postActions } = this.props
    postActions.fetchList()
  }

}

export default connect(null, mapDispatchToProps)(HomePage);
