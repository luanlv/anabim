import React from 'react';
import Link from '../../components/Link'

import {Title, BreadCrumb} from './components'

class AllService extends React.Component {
  render() {

    const allService = this.props.data.information.value.allService
    const services = this.props.data.information.value.services

    return (
      <div>
        <Title title={allService.title} description={allService.description} />
        <BreadCrumb title={allService.title} />

        <div className="container">
          <div className="row">
            <main className="col-xs-12 col-md-9 col-md-push-3">
              <div className="row margin-bottom-30">
                <div className="col-sm-4">
                  <div className="page-box page-box--block">
                    <Link to={'/service/' + services.groundtransport.slug} className="page-box__picture">
                      <img alt="Ground Transport" className="wp-post-image" src={services.groundtransport.img1} />
                    </Link>
                    <div className="page-box__content">
                      <h5 className="page-box__title text-uppercase">
                        <Link to={'/service/' + services.groundtransport.slug}>{services.groundtransport.title}</Link>
                      </h5>
                      <p>
                        {services.groundtransport.description} ...
                      </p>
                      <p>
                        <Link className="read-more" to={'/service/' + services.groundtransport.slug}>Chi tiết</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="page-box page-box--block">
                    <Link to={'/service/' + services.logisticservice.slug} className="page-box__picture">
                      <img alt="Ground Transport" className="wp-post-image" src={services.logisticservice.img1} />
                    </Link>
                    <div className="page-box__content">
                      <h5 className="page-box__title text-uppercase">
                        <Link to={'/service/' + services.logisticservice.slug}>{services.logisticservice.title}</Link>
                      </h5>
                      <p>
                        {services.logisticservice.description} ...
                      </p>
                      <p>
                        <Link className="read-more" to={'/service/' + services.logisticservice.slug}>Chi tiết</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="page-box page-box--block">
                    <Link to={'/service/' + services.trackingservice.slug} className="page-box__picture">
                      <img alt="Ground Transport" className="wp-post-image" src={services.trackingservice.img1} />
                    </Link>
                    <div className="page-box__content">
                      <h5 className="page-box__title text-uppercase">
                        <Link to={'/service/' + services.trackingservice.slug}>{services.trackingservice.title}</Link>
                      </h5>
                      <p>
                        {services.trackingservice.description} ...
                      </p>
                      <p>
                        <Link className="read-more" to={'/service/' + services.trackingservice.slug}>Chi tiết</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row margin-bottom-30">
                <div className="col-sm-4">
                  <div className="page-box page-box--block">
                    <Link to={'/service/' + services.warehousing.slug} className="page-box__picture">
                      <img alt="Ground Transport" className="wp-post-image" src={services.warehousing.img1} />
                    </Link>
                    <div className="page-box__content">
                      <h5 className="page-box__title text-uppercase">
                        <Link to={'/service/' + services.warehousing.slug}>{services.warehousing.title}</Link>
                      </h5>
                      <p>
                        {services.warehousing.description} ...
                      </p>
                      <p>
                        <Link className="read-more" to={'/service/' + services.warehousing.slug}>Chi tiết</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="page-box page-box--block">
                    <Link to={'/service/' + services.cargo.slug} className="page-box__picture">
                      <img alt="Ground Transport" className="wp-post-image" src={services.cargo.img1} />
                    </Link>
                    <div className="page-box__content">
                      <h5 className="page-box__title text-uppercase">
                        <Link to={'/service/' + services.cargo.slug}>{services.cargo.title}</Link>
                      </h5>
                      <p>
                        {services.cargo.description} ...
                      </p>
                      <p>
                        <Link className="read-more" to={'/service/' + services.cargo.slug}>Chi tiết</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="page-box page-box--block">
                    <Link to={'/service/' + services.warehousing.slug} className="page-box__picture">
                      <img alt="Ground Transport" className="wp-post-image" src={services.warehousing.img1} />
                    </Link>
                    <div className="page-box__content">
                      <h5 className="page-box__title text-uppercase">
                        <Link to={'/service/' + services.warehousing.slug}>{services.warehousing.title}</Link>
                      </h5>
                      <p>
                        {services.warehousing.description} ...
                      </p>
                      <p>
                        <Link className="read-more" to={'/service/' + services.warehousing.slug}>Chi tiết</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <div className="col-xs-12 col-md-3 col-md-pull-9">
              <div className="sidebar widget_nav_menu">
                <ul className="menu" id="menu-services-menu">
                  <li className="current-menu-item">
                    <Link to="/service">Các dịch vụ</Link>
                  </li>

                  <li>
                    <Link to={"/service/" + services.groundtransport.slug}>{services.groundtransport.title}</Link>
                  </li>
                  <li>
                    <Link to={"/service/" + services.cargo.slug}>{services.cargo.title}</Link>
                  </li>
                  <li>
                    <Link to={"/service/" + services.warehousing.slug}>{services.warehousing.title}</Link>
                  </li>
                  <li>
                    <Link to={"/service/" + services.logisticservice.slug}>{services.logisticservice.title}</Link>
                  </li>
                  <li>
                    <Link to={"/service/" + services.trackingservice.slug}>{services.trackingservice.title}</Link>
                  </li>
                  <li>
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

export default AllService
