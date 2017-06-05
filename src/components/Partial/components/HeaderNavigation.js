import React from 'react'
import Link from '../../Link'

class HeaderNavigation extends React.Component {
  render () {

    const common = this.props.common

    return (
      <div className="header__navigation-widgets">
        <a target="_blank" href={common.facebook} className="social-icons__link"><i className="fa fa-facebook" /></a>
        {/*<a target="_blank" href="https://twitter.com/chillyorange" className="social-icons__link"><i className="fa fa-twitter" /></a>*/}
        {/*<a target="_blank" href="http://themeforest.net/user/chilly_orange/portfolio" className="social-icons__link"><i className="fa fa-wordpress" /></a>*/}
        <a target="_blank" href={common.google} className="social-icons__link"><i className="fa fa-youtube" /></a>
      </div>
    )
  }
}

export default HeaderNavigation
