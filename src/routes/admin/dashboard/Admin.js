/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Button, DatePicker, Table, Timeline, Icon, Row, Col, Calendar} from 'antd';
import moment from 'moment'

class Admin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: this.props.orders || []
    }
  }

  render() {
    return (
        <div>
          <Row className="padding-5">
            <Calendar onPanelChange={onPanelChange} />
          </Row>
        </div>
    );
  }
}

function onPanelChange(value, mode) {
  console.log(value, mode);
}



export default Admin
