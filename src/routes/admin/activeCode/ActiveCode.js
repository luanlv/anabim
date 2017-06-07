import React  from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse, Input, InputNumber, Select, Popconfirm} from 'antd';
import axios from 'axios'
import moment from 'moment'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
const Option = Select.Option;
// import CodeMirror from '../Components/CodeMirror'
const Panel = Collapse.Panel;
var CodeMirror = require('react-codemirror')
if(process.env.BROWSER) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

import Editor from '../Components/CustomEditor'

class ActiveCode extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newCode: {
        code: randomString(),
        day: 3,
        email: "",
        all: false,
        quantity: 1,
        used: false
      },
      data: []
    }
    this.init()
  }

  async init () {
    let activeCode = 'allActiveCode{_id, code, day, email, all, quantity, used, created_at}';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{' + activeCode + '}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();

    this.setState({
      data: data.allActiveCode
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
                <Th>Mã kích hoạt</Th>
                <Th>Số ngày</Th>
                <Th>Email áp dụng</Th>
                <Th>Cho tất cả</Th>
                <Th>Số lượng</Th>
                <Th></Th>
              </Tr>
              </Thead>
              <Tbody>
                <Tr
                >
                  <Td>
                    <span>
                      <Input
                        placeholder="Code"
                        value={this.state.newCode.code}
                        onChange={(e) => {
                          let value = e.target.value
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                code: value,
                              }
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="Số ngày"
                        defaultValue={this.state.newCode.day}
                        onChange={(e) => {
                          let value = e.target.value
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                day: parseInt(value),
                              }
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                       <Input
                         placeholder="Email"
                         defaultValue={this.state.newCode.email}
                         onChange={(e) => {
                           let value = e.target.value
                           this.setState(prev => {
                             return {
                               ...prev,
                               newCode: {
                                 ...prev.newCode,
                                 email: value,
                               }
                             }
                           })
                         }}
                         disabled={this.state.newCode.all}
                       />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Switch
                        checked={this.state.newCode.all}
                        onChange={() => {
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                all: !prev.newCode.all,
                              }
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="Số lượng"
                        defaultValue={this.state.newCode.quantity}
                        onChange={(e) => {
                          let value = e.target.value
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                quantity: parseInt(value),
                              }
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>

                  <Td>
                    <div>
                      <Button
                        type="primary"
                        onClick={() => {
                          axios.post('/api/activecode/new', this.state.newCode)
                            .then(res => {
                              message.success('Thêm mới thành công')
                              this.setState(prev => {
                                return {
                                  newCode: {
                                    code: randomString(),
                                    day: 3,
                                    email: "",
                                    all: false,
                                    quantity: 1,
                                    used: false
                                  }
                                }
                              })
                              this.init()
                            })
                            .catch(err => {
                              message.error('Thêm mới thất bại')
                            })
                        }}
                      >Thêm mới</Button>
                    </div>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Row>


          <Row className="padding-5">
            <Table>
              <Thead>
              <Tr>
                <Th>Mã kích hoạt</Th>
                <Th>Số ngày</Th>
                <Th>Tất cả</Th>
                <Th>Email</Th>
                <Th>Số lượng</Th>
                <Th>Trạng thái</Th>
                <Th></Th>
              </Tr>
              </Thead>
              <Tbody>
              {this.state.data.map((el, index) => {
                return (<Tr key={el._id}
                >
                  <Td>
                    <span>
                      <Input
                        placeholder="Code"
                        defaultValue={el.code}
                        onChange={(e) => {
                          let value = e.target.value
                          let activeCode = this.state.data
                          activeCode[index].code = value
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: activeCode
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="Số ngày"
                        defaultValue={el.day}
                        onChange={(e) => {
                          let value = e.target.value
                          let activeCode = this.state.data
                          activeCode[index].day = parseInt(value)
                          this.setState(prev => {
                            return {
                              ...prev,
                              day: activeCode
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Switch
                        checked={el.all}
                        onChange={() => {
                          let activeCode = this.state.data
                          activeCode[index].all = !activeCode[index].all
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: activeCode
                            }
                          })
                        }}
                        style={{display: 'inline-block'}}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="Email"
                        defaultValue={el.email}
                        onChange={(e) => {
                          let value = e.target.value
                          let activeCode = this.state.data
                          activeCode[index].email = value
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: activeCode
                            }
                          })
                        }}
                        disabled={el.all}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="Số lượng"
                        defaultValue={el.quantity}
                        onChange={(e) => {
                          let value = e.target.value
                          let activeCode = this.state.data
                          activeCode[index].quantity = value
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: activeCode
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      {el.used ? (<span style={{color: 'green'}}>Đã sử dụng</span>) : (<span style={{color: 'red'}}>Chưa sử dụng</span>) }
                    </span>
                  </Td>
                  <Td>
                    <div>
                      <Button
                        type="primary"
                        onClick={() => {
                          axios.post('/api/activecode/update', el)
                            .then(res => {
                              message.success('Cập nhập thành công')
                              this.setState(prev => {
                                return {
                                  newCode: {
                                    code: randomString(),
                                    day: 3,
                                    email: "",
                                    all: false,
                                    quantity: 1,
                                    used: false
                                  }
                                }
                              })
                              // this.init()
                            })
                            .catch(err => {
                              message.error('Cập nhập thất bại')
                            })
                        }}
                      >Cập nhập</Button>
                      <Popconfirm placement="right"
                                  onConfirm={() => {
                                    let that = this;
                                    axios.post('/api/activecode/delete', {id: el._id})
                                      .then(res => {
                                        message.success('Xoá thành công')
                                        that.init()
                                      })
                                      .catch(err => {
                                        message.error('Có lỗi')
                                      })
                                  }}
                                  okText="Chắc chắn xóa" cancelText="Hủy">
                        <Button
                          type="danger"
                        >Xóa</Button>
                      </Popconfirm>
                    </div>
                  </Td>
                </Tr>)
              })}
              </Tbody>
            </Table>
          </Row>

        </div>
    )
  }


}

export default ActiveCode

function randomString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var string_length = 5;
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}
