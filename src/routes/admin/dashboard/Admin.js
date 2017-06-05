/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Button, DatePicker, Table, Timeline, Icon, Row, Col} from 'antd';
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
            Dashboard !!
          </Row>
        </div>
    );
  }
}


const columns = [
  {
    title: 'Thời gian đặt hàng',
    dataIndex: 'created_at',
    key: 'created_at',
    render: text => <span><span style={{color: 'blue'}}>{moment(text).format('LT')}</span>, <b>{moment(text).format('L')}</b></span>,
  },
  {
  title: 'Tên',
  dataIndex: 'name',
  key: 'name',
  render: text => <span>{text}</span>,
},
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
    render: text => <span><a href={"tel:" + text}><Button>Gọi điện</Button></a> {text}</span>,
  },
  {
    title: 'Số lượng (kg)',
    dataIndex: 'quantity',
    key: 'quantity',
    render: text => <span>{text}</span>,
  },
  {
    title: 'Sản phẩm',
    key: 'action',
    render: (text, record) => (
      <span>
        {mapProduct(record.product)}
      </span>
    ),
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
    render: text => <span>{text}</span>,
  }
];

function mapProduct(slug){
  switch(slug){
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng'
      break;
    case 'Chả Cốm':
      return 'Chả Cốm'
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì'
      break;
    default:
      return ''
      break;
  }
}

export default Admin
