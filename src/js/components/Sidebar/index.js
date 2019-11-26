
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as UIActionsCreator from '../../redux/actions/ui.js';

function mapStateToProps({ ui, post }) {
  return {
    sidebarOpen: ui.sidebarOpen,
    categories: post.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UIActions: bindActionCreators(UIActionsCreator, dispatch)
  }
}

class Sidebar extends React.Component {

  render () {

    let { sidebarOpen, categories } = this.props
    let { toggleSidebar, filterPost } = this

    return(
      <div className="Sidebar-container">
        <aside className={"Sidebar u-shadow " + ( sidebarOpen ? 'Sidebar--open' : '') }>
          <ul className="list-unstyled Sidebar-menu">
            <li><a href="#" onClick={ filterPost.bind(this,'') }>HOME</a></li>
            <li><a href="#contactus" onClick={ filterPost.bind(this,'') }>CONTACTUS</a></li>
            <li><a href="#reviews" onClick={ filterPost.bind(this,'') }>REVIEWS</a></li>
            <li><a href="#aboutus" onClick={ filterPost.bind(this,'') }>ABOUT US</a></li>
          </ul>
        </aside>
        <div className={ "Sidebar-overlay " + ( sidebarOpen ? 'Sidebar-overlay--open' : '' ) } onClick={ toggleSidebar.bind(this) }></div>
      </div>
    )
  }

  toggleSidebar() {
    this.props.UIActions.toggleSidebar()
  }

  filterPost(query,e) {
    e.preventDefault()
    this.props.UIActions.updateQuery(query)
    this.toggleSidebar()
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
