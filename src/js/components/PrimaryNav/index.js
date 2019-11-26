
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as UIActionsCreator from '../../redux/actions/ui.js';

function mapStateToProps({ ui }) {
  return {
    sidebarOpen: ui.sidebarOpen,
    searchbarOpen: ui.searchbarOpen,
    onPostItem: ui.onPostItem,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UIActions: bindActionCreators(UIActionsCreator, dispatch)
  }
}

class PrimaryNav extends React.Component {

  render () {

    let { onPostItem, sidebarOpen } = this.props
    let { toggleSidebar, backToHome } = this

    return(
      <div className="PrimaryNav u-shadow">
            <div className="col-xs-2 PrimaryNav-button_nav_container text-center">
              { onPostItem ?
                  <button v-if="onPostItem" className="btn PrimaryNav-button_nav PrimaryNav-button" onClick={ backToHome.bind(this) }>
                    <i className="ion-arrow-left-c"></i>
                  </button>
                :
                  <button v-if="!onPostItem" className="btn PrimaryNav-button_nav PrimaryNav-button" onClick={ toggleSidebar.bind(this) }>
                    <i className={ sidebarOpen ? 'ion-close' : 'ion-navicon' }></i>
                  </button>
              }
            </div>
            <div className="col-xs-8 PrimaryNav-logo_container text-center">
              <h1 className="PrimaryNav-logo"><a href="#/">ZJUDGING - ONLINE JUDGING</a></h1>
            </div>
            <div className="PrimaryNav-links_container">
              <a className="PrimaryNav-link" href="#/">HOME</a>
              <a className="PrimaryNav-link" href="#/contactus">CONTACTUS</a>
              <a className="PrimaryNav-link" href="#/reviews">REVIEWS</a>
              <a className="PrimaryNav-link" href="#/aboutus">ABOUT US</a>
            </div>
    </div>
    )
  }


  toggleSearchbar() {
    this.props.UIActions.toggleSearchbar()
  }

  toggleSidebar() {
    this.props.UIActions.toggleSidebar()
  }

  backToHome() {
    window.history.back()
    this.props.UIActions.onNetralPage()
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav);
