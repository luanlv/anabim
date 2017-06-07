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

class Coupon extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newCode: {
        code: randomString(),
        kind: 1,
        price: 0,
        percent: 0,
        day: 0,
        month: [1, 3, 6, 12],
        quantity: 1000,
        endTime: new Date,
        active: true
      },
      data: []
    }
    this.init()
  }

  async init () {
    let allCoupon = 'allCoupon{_id, code, kind, price, percent, day, month, active, quantity, endTime}';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{' + allCoupon + '}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();

    this.setState({
      data: data.allCoupon
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
                <Th>Loại</Th>
                <Th>Mã giảm giá</Th>
                <Th>
                  {this.state.newCode.kind === 1 && "Theo %"}
                  {this.state.newCode.kind === 2 && "Theo giá tiền"}
                  {this.state.newCode.kind === 3 && "Thêm ngày"}
                </Th>
                <Th>Tháng áp dụng</Th>
                <Th>Hạn cuối</Th>
                <Th>Số lượng</Th>
                <Th></Th>
              </Tr>
              </Thead>
              <Tbody>
                <Tr
                >
                  <Td>
                    <span>
                      <Select
                        style={{width: '100%'}}
                        placeholder="Chọn danh mục"
                        defaultValue={this.state.newCode.kind + ''}
                        onChange={(value) => {
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                kind: parseInt(value)
                              }
                            }
                          })
                          console.log(this.state.newCode)
                        }}
                      >
                    <Option key={1}>Theo %</Option>
                    <Option key={2}>Theo giá tiền</Option>
                    <Option key={3}>Thêm ngày</Option>
                  </Select>
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="code"
                        value={this.state.newCode.code}
                        onChange={(e) => {
                          let value = e.target.value
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                code: value
                              }
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      {this.state.newCode.kind === 1 && <Input
                         placeholder="% giảm"
                         defaultValue={this.state.newCode.percent}
                         onChange={(e) => {
                           let value = e.target.value
                           this.setState(prev => {
                             return {
                               ...prev,
                               newCode: {
                                 ...prev.newCode,
                                 percent: parseInt(value),
                               }
                             }
                           })
                         }}
                       />}
                      {this.state.newCode.kind === 2 && <Input
                        placeholder="Số tiền giảm"
                        defaultValue={this.state.newCode.price}
                        onChange={(e) => {
                          let value = e.target.value
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                price: parseInt(value),
                              }
                            }
                          })
                        }}
                      />}
                      {this.state.newCode.kind === 3 && <Input
                        placeholder="Số ngày tăng"
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
                      />}
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="tháng áp dụng"
                        defaultValue={this.state.newCode.month.join(',')}
                        onChange={(e) => {
                          let value = e.target.value
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                month: textToList(value),
                              }
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <DatePicker defaultValue={moment(moment(this.state.newCode.endTime).format("DD/MM/YYYY"), "DD/MM/YYYY")} format={"DD/MM/YYYY"}
                                  onChange={(date, dateString) => {
                                    this.setState(prev => {
                                      return {
                                        ...prev,
                                        newCode: {
                                          ...prev.newCode,
                                          endTime: date.format()
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
                        value={this.state.newCode.quantity}
                        onChange={(e) => {
                          let value = e.target.value
                          this.setState(prev => {
                            return {
                              ...prev,
                              newCode: {
                                ...prev.newCode,
                                quantity: parseInt(value)
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
                          axios.post('/api/coupon/new', this.state.newCode)
                            .then(res => {
                              message.success('Thêm mới thành công')
                              this.setState(prev => {
                                return {
                                  newCode: {
                                    code: randomString(),
                                    kind: 1,
                                    price: 0,
                                    percent: 0,
                                    day: 0,
                                    month: [1, 3, 6, 12],
                                    quantity: 1000,
                                    endTime: new Date,
                                    active: true,
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
                <Th>Loại</Th>
                <Th>Mã giảm giá</Th>
                <Th>
                  Giá trị
                </Th>
                <Th>Tháng áp dụng</Th>
                <Th>Hạn cuối</Th>
                <Th>Số lượng</Th>
                <Th></Th>
              </Tr>
              </Thead>
              <Tbody>
              {this.state.data.map((el, index) => {
                return (<Tr key={index}
                >
                  <Td>
                    <span>
                      <Select
                        style={{width: '100%'}}
                        placeholder="Chọn danh mục"
                        defaultValue={el.kind + ''}
                        onChange={(value) => {
                          let coupons = this.state.data
                          coupons[index].kind = parseInt(value)
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: coupons
                            }
                          })
                        }}
                      >
                    <Option key={1}>Theo %</Option>
                    <Option key={2}>Theo giá tiền</Option>
                    <Option key={3}>Thêm ngày</Option>
                  </Select>
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="code"
                        defaultValue={el.code}
                        onChange={(e) => {
                          let value = e.target.value
                          let coupons = this.state.data
                          coupons[index].code = value
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: coupons
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      {el.kind === 1 && <Input
                        placeholder="% giảm"
                        defaultValue={el.percent}
                        onChange={(e) => {
                          let value = e.target.value
                          let coupons = this.state.data
                          coupons[index].percent = parseInt(value)
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: coupons
                            }
                          })
                        }}
                      />}
                      {el.kind === 2 && <Input
                        placeholder="Giá tiền giảm"
                        defaultValue={el.price}
                        onChange={(e) => {
                          let value = e.target.value
                          let coupons = this.state.data
                          coupons[index].price = parseInt(value)
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: coupons
                            }
                          })
                        }}
                      />}

                      {el.kind === 3 && <Input
                        placeholder="Số ngày tăng"
                        defaultValue={el.day}
                        onChange={(e) => {
                          let value = e.target.value
                          let coupons = this.state.data
                          coupons[index].day = parseInt(value)
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: coupons
                            }
                          })
                        }}
                      />}
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <Input
                        placeholder="tháng áp dụng"
                        defaultValue={el.month.join(',')}
                        onChange={(e) => {
                          let value = e.target.value
                          let coupons = this.state.data
                          coupons[index].month = textToList(value)
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: coupons
                            }
                          })
                        }}
                      />
                    </span>
                  </Td>
                  <Td>
                    <span>
                      <DatePicker defaultValue={moment(moment(el.endTime).format("DD/MM/YYYY"), "DD/MM/YYYY")} format={"DD/MM/YYYY"}
                                  onChange={(date, dateString) => {
                                    let coupons = this.state.data
                                    coupons[index].endTime = date.format()
                                    this.setState(prev => {
                                      return {
                                        ...prev,
                                        data: coupons
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
                        value={el.quantity}
                        onChange={(e) => {
                          let value = e.target.value
                          let coupons = this.state.data
                          coupons[index].quantity = parseInt(value)
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: coupons
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
                          axios.post('/api/coupon/update', el)
                            .then(res => {
                              message.success('Cập nhập thành công')
                            })
                            .catch(err => {
                              message.error('Cập nhập thất bại')
                            })
                        }}
                      >Cập nhập</Button>

                      <Popconfirm placement="right"
                                  onConfirm={() => {
                                    let that = this;
                                    axios.post('/api/coupon/delete', {id: el._id})
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

export default Coupon

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

function textToList (text){
  var list = text.split(',');
  let result = [];
  list.map(function(el){
    if(!isNaN(parseInt(el))) {
      result.push(parseInt(el))
    }
  });
  return result;
}
