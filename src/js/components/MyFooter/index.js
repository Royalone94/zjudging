
import React, { PropTypes } from 'react'

class MyFooter extends React.Component {

  render () {
    return(
      <footer className="Footer text-center">
        <p className="text-center Footer-copyright">zJudging - Online Judging<br/></p>
        <p className="text-center">3556 S 5600 W Unit 1-138, Salt Lake City, UT 84128 US<br/></p>
        <a href="tel:8002520903">(800) 252-0903<br/></a>
        
        <div className="container">
          <p className="col-xs-6 gray-text">Copyright © 2019 illuminating Software llc - All Rights Reserved.<br/></p>
          <p className="col-xs-6 gray-text">Powered by GoDaddy GoCentral 
          <a href="https://www.godaddy.com/websites/website-builder?isc=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=en-us_corp_applications_base"> Website Builder </a></p>
        </div>
      </footer>
    )
  }
}

export default MyFooter;
