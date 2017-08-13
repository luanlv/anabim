import React  from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse, Input, InputNumber} from 'antd';
import axios from 'axios'
import moment from 'moment'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

// import CodeMirror from '../Components/CodeMirror'
const Panel = Collapse.Panel;
var CodeMirror = require('react-codemirror')
if(process.env.BROWSER) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

import Editor from '../Components/CustomEditor'

class DonHang extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: []
    }
    this.init()
  }

  async init () {
    let subscribe = 'allPendingSubscribe{_id, done, state, email, name, phone, month, bonusDay, price, info, coupon, created_at}';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{' + subscribe + '}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();

    this.setState({
      data: data.allPendingSubscribe
    })

  }


  updateSetting(data){
    axios.post('/api/information/update', data)
      .then(res => {
        message.success('Cập nhập thành công!')
      })
      .catch(err => {
        message.error('Cập nhập thất bại')
      })
  }

  render() {
    let that = this
    return (
        <div>
          <Row className="padding-5">
            <Table>
              <Thead>
              <Tr>
                <Th>Tên</Th>
                <Th>Email</Th>
                <Th>Số điện thoại</Th>
                <Th>Thời gian</Th>
                <Th>Thành tiền</Th>
                <Th>Code</Th>
                <Th>Thời gian</Th>
                <Th>Xét duyệt</Th>
              </Tr>
              </Thead>
              <Tbody>
              {that.state.data.map((el, key) => {
                return (
                  <Tr key={key}
                  >
                    <Td>
                      <span>{el.name}</span>
                    </Td>
                    <Td>
                      <span>{el.email}</span>
                    </Td>
                    <Td>
                      <span>{el.phone}</span>
                    </Td>
                    <Td>
                      <span>{el.month} tháng</span>
                    </Td>
                    <Td>
                      <span>{(el.price || 0).toLocaleString()}</span>
                    </Td>
                    <Td>
                      <span>{el.coupon ? el.coupon.code : ''}</span>
                    </Td>
                    <Td>
                      <span>{moment(el.createdAt).format("DD/MM/YYYY")}</span>
                    </Td>
                    <Td>
                      <div>
                        <button
                          onClick={() => {
                            el.action = true
                            axios.post('/api/membership/action', el)
                              .then(res => {
                                message.success('Duyệt thành công')
                                that.init()
                              })
                              .catch(err => {
                                message.error('Duyệt thất bại')
                              })
                          }}
                        >Duyệt</button>
                        - | -
                        <button
                          onClick={() => {
                            el.action = false
                            axios.post('/api/membership/action', el)
                              .then(res => {
                                message.success('Duyệt thành công')
                                that.init()
                              })
                              .catch(err => {
                                message.error('Duyệt thất bại')
                              })
                          }}
                        >Hủy</button>
                      </div>
                    </Td>
                  </Tr>
                )
              })}

              </Tbody>
            </Table>
          </Row>

        </div>
    )
  }


}

export default DonHang
