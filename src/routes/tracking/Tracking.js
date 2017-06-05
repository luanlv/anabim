import React from 'react';

import {Title, BreadCrumb} from './components'

class Tracking extends React.Component {
  render() {

    const tracking = this.props.data.information.value.tracking

    return (
      <div>
        <Title title={tracking.title} description={tracking.description} />
        <BreadCrumb title={tracking.title} />

        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 margin-bottom-60">
              <div dangerouslySetInnerHTML={{__html: tracking.body}}/>
              <form method="post" action="tracking_result" className="trackForm clearfix">
                <input type="text" name="code" placeholder="Điền mã code ở đây..." id="name" />
                <button type="submit" className="btn btn-info">Xem thông tin</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Tracking
