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

const dateFormat = 'YYYY/MM/DD';

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
    let membership = 'getMembership{_id, name, username, uid, provider, member, isAdmin, mustConfirmEmail, role, info, createAt}';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{' + membership + '}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();

    this.setState({
      data: data.getMembership
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
                <Th>Ngày tạo</Th>
                <Th>Ngày bắt đầu</Th>
                <Th>Ngày kết thúc</Th>
                <Th></Th>
              </Tr>
              </Thead>
              <Tbody>
              {that.state.data.map((el, index) => {
                return (
                  <Tr key={index}
                  >
                    <Td>
                      <span>{el.name}</span>
                    </Td>
                    <Td>
                      <span>{el.username}</span>
                    </Td>
                    <Td>
                      <span>
                        <DatePicker defaultValue={moment(moment(el.info.created_at).format("DD/MM/YYYY"), "DD/MM/YYYY")} format={"DD/MM/YYYY"}
                                    onChange={(date, dateString) => {
                                      let newData = that.state.data
                                      newData[index].info.createdAt = date.format()
                                      this.setState(prev => {
                                        return {
                                          ...prev,
                                          data: newData
                                        }
                                      })
                                    }}
                        />
                      </span>
                    </Td>
                    <Td>
                      <span>
                        <DatePicker defaultValue={moment(moment(el.info.start).format("DD/MM/YYYY"), "DD/MM/YYYY")} format={"DD/MM/YYYY"}
                                    onChange={(date, dateString) => {
                                      let newData = that.state.data
                                      newData[index].info.start = date.format()
                                      this.setState(prev => {
                                        return {
                                          ...prev,
                                          data: newData
                                        }
                                      })
                                    }}
                        />
                      </span>
                    </Td>
                    <Td>
                      <span>
                        <DatePicker defaultValue={moment(moment(el.info.end).format("DD/MM/YYYY"), "DD/MM/YYYY")} format={"DD/MM/YYYY"}
                                    onChange={(date, dateString) => {
                                      let newData = that.state.data
                                      newData[index].info.end = date.format()
                                      this.setState(prev => {
                                        return {
                                          ...prev,
                                          data: newData
                                        }
                                      })
                                    }}
                        />
                      </span>
                    </Td>

                    <Td>
                      <div>
                        <Button type="primary"
                          onClick={() => {
                            axios.post('/api/user/update', el)
                              .then(res => {
                                message.success('Cập nhập thành công!')
                              })
                              .catch(err => {
                                message.error('Cập nhập thất bại')
                              })
                          }}
                        >Cập nhập</Button>

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
