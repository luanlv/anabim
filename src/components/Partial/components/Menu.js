import React from 'react'
import Link from '../../Link'

class Menu extends React.Component {

  closeMenu() {
    $('.collapse').collapse('hide');
  }

  render () {
    const services = this.props.services
    const common = this.props.common
    return (
      <div className="header__navigation">
        <nav className="collapse navbar-collapse" id="cargopress-navbar-collapse">
          <ul className="main-navigation js-main-nav js-dropdown">
            <li>
              <Link to={common.menu.path1}
                onClick={this.closeMenu}
              >{common.menu.menu1}</Link>
            </li>
            <li className="menu-item-has-children">
              <Link to={common.menu.path2}
                onClick={this.closeMenu}
              >{common.menu.menu2}</Link>
              <ul role="menu" className="sub-menu">

                <li>
                  <Link to={"/service/" + services.groundtransport.slug}
                    onClick={this.closeMenu}
                  >{services.groundtransport.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.cargo.slug}
                        onClick={this.closeMenu}
                  >{services.cargo.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.warehousing.slug}
                        onClick={this.closeMenu}
                  >{services.warehousing.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.logisticservice.slug}
                        onClick={this.closeMenu}
                  >{services.logisticservice.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.trackingservice.slug}
                        onClick={this.closeMenu}
                  >{services.trackingservice.title}</Link>
                </li>
                <li>
                  <Link to={"/service/" + services.storage.slug}
                        onClick={this.closeMenu}
                  >{services.storage.title}</Link>
                </li>

              </ul>
            </li>
            <li>
              <Link to={common.menu.path3}
                    onClick={this.closeMenu}
              >{common.menu.menu3}</Link>
            </li>
            <li>
              <Link to={common.menu.path4}
                    onClick={this.closeMenu}
              >{common.menu.menu4}</Link>
            </li>
            <li>
              <Link to={common.menu.path5}
                    onClick={this.closeMenu}
              >{common.menu.menu5}</Link>
            </li>
            <li>
              <Link to={common.menu.path6}
                    onClick={this.closeMenu}
              >{common.menu.menu6}</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
