import React from 'react'
import Link from '../../Link'

class HeaderWidget extends React.Component {
  render () {

    const common = this.props.common

    return (
      <div className="header__widgets">
        <div className="widget-icon-box">
          <div className="icon-box">
            <i className="fa fa-headphones" />
            <h4 className="icon-box__title">{common.title1}</h4>
            <span className="icon-box__subtitle"
              dangerouslySetInnerHTML={{__html: common.body1}}
            />
          </div>
        </div>
        <div className="widget-icon-box">
          <div className="icon-box">
            <i className="fa fa-clock-o" />
            <h4 className="icon-box__title">{common.title2}</h4>
            <span className="icon-box__subtitle"
                  dangerouslySetInnerHTML={{__html: common.body2}}
            />
          </div>
        </div>
        <div className="widget-icon-box">
          <div className="icon-box">
            <i className="fa fa-envelope-o" />
            <h4 className="icon-box__title">{common.title3}</h4>
            <span className="icon-box__subtitle"
                  dangerouslySetInnerHTML={{__html: common.body3}}
            />
          </div>
        </div>
        <Link to="/contact#form" className="btn btn-info" id="button_requestQuote"> Liên hệ ngay</Link>
      </div>
    )
  }
}

export default HeaderWidget


