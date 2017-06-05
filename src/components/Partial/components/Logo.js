import React from 'react'
import Link from '../../Link'

class Logo extends React.Component {
  render () {

    const common = this.props.common

    return (
      <div className="header__logo">
        <Link to="/">
          <img className="img-responsive"  alt="Colombus Logo" src={common.logo1} />
        </Link>
        <button data-target="#cargopress-navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
          <span className="navbar-toggle__text">MENU</span>
          <span className="navbar-toggle__icon-bar">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </span>
        </button>
      </div>
    )
  }
}

export default Logo
