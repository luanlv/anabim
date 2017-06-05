import React from 'react';

import {Title, BreadCrumb} from './components'
import Link from '../../components/Link'

class Service extends React.Component {
  render() {

    const services = this.props.data.information.value.services
    const service = services[this.props.slug.replace(/-/g, '')]

    return (
      <div>
        <Title title={service.title} description={''} />
        <BreadCrumb title={service.title} />

        <div className="container">
          <div className="row">
            <main className="col-xs-12 col-md-9 col-md-push-3">
              <div className="row margin-bottom-30">
                <div className="col-sm-6"
                      dangerouslySetInnerHTML={{ __html: service.body }}
                />
                <div className="col-sm-6">
                  <p>
                    <img alt="placeholder" src={service.img1} className="alignnone" />
                  </p>
                  <p>
                    <img alt="placeholder" src={service.img2} className="alignnone" />
                  </p>
                </div>
              </div>
            </main>
            <div className="col-xs-12 col-md-3 col-md-pull-9">
              <div className="sidebar widget_nav_menu">
                <ul className="menu" id="menu-services-menu">
                  <li>
                    <Link to="/service">Các dịch vụ</Link>
                  </li>

                  <li className={this.props.slug === services.groundtransport.slug ? "current-menu-item" : ""}>
                    <Link to={"/service/" + services.groundtransport.slug}>{services.groundtransport.title}</Link>
                  </li>
                  <li className={this.props.slug === services.cargo.slug ? "current-menu-item" : ""}>
                    <Link to={"/service/" + services.cargo.slug}>{services.cargo.title}</Link>
                  </li>
                  <li className={this.props.slug === services.warehousing.slug ? "current-menu-item" : ""}>
                    <Link to={"/service/" + services.warehousing.slug}>{services.warehousing.title}</Link>
                  </li>
                  <li className={this.props.slug === services.logisticservice.slug ? "current-menu-item" : ""}>
                    <Link to={"/service/" + services.logisticservice.slug}>{services.logisticservice.title}</Link>
                  </li>
                  <li className={this.props.slug === services.trackingservice.slug ? "current-menu-item" : ""}>
                    <Link to={"/service/" + services.trackingservice.slug}>{services.trackingservice.title}</Link>
                  </li>
                  <li className={this.props.slug === services.storage.slug ? "current-menu-item" : ""}>
                    <Link to={"/service/" + services.storage.slug}>{services.storage.title}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}


export default Service
