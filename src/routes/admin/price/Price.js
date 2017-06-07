import React  from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse, Input, InputNumber} from 'antd';
// import CodeMirror from '../Components/CodeMirror'
import axios from 'axios'
const Panel = Collapse.Panel;
var CodeMirror = require('react-codemirror')
if(process.env.BROWSER) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

import Editor from '../Components/CustomEditor'

class Price extends React.Component {

  constructor(props){
    super(props)
    this.state = {
    }
    this.init()
  }

  async init () {
    let price = 'onePrice{_id, one, three, six, twelve}';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{' + price + '}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();

    this.setState({
      data: data.onePrice
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
    return (
        <div>
          {this.state.data !== undefined &&
          <div>
            <Row className="padding-5">
              <b>Giá tiền 1 tháng: </b>
              <br/>
              <InputNumber
                defaultValue={this.state.data.one || 0}
                min={0}
                formatter={value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                parser={value => value.replace(/(,*)/g, '')}
                style={{minWidth: 200}}
                onChange={(value) => {
                  if(parseInt(value).isNaN){
                    value = 0;
                  }
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        one: parseInt(value)
                      }
                    }
                  })
                }}
              />
            </Row>
            <Row className="padding-5">
              <b>Giá tiền 3 tháng: </b>
              <br/>
              <InputNumber
                defaultValue={this.state.data.three || 0}
                min={0}
                formatter={value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                parser={value => value.replace(/(,*)/g, '')}
                style={{minWidth: 200}}
                onChange={(value) => {
                  if(parseInt(value).isNaN){
                    value = 0;
                  }
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        three: parseInt(value)
                      }
                    }
                  })
                }}
              />
            </Row>
            <Row className="padding-5">
              <b>Giá tiền 6 tháng: </b>
              <br/>
              <InputNumber
                defaultValue={this.state.data.six || 0}
                min={0}
                formatter={value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                parser={value => value.replace(/(,*)/g, '')}
                style={{minWidth: 200}}
                onChange={(value) => {
                  if(parseInt(value).isNaN){
                    value = 0;
                  }
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        six: parseInt(value)
                      }
                    }
                  })
                }}
              />
            </Row>
            <Row className="padding-5">
              <b>Giá tiền 12 tháng: </b>
              <br/>
              <InputNumber
                defaultValue={this.state.data.twelve || 0}
                min={0}
                formatter={value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                parser={value => value.replace(/(,*)/g, '')}
                style={{minWidth: 200}}
                onChange={(value) => {
                  if(parseInt(value).isNaN){
                    value = 0;
                  }
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        twelve: parseInt(value)
                      }
                    }
                  })
                }}
              />

            </Row>
          </div>
          }
          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                axios.post('/api/price/update', this.state.data)
                  .then(res => {
                    message.success('Cập nhập giá tiền thành công!')
                  })
                  .catch(err => {
                    message.error('Cập nhập giá tiền thất bại')
                  })
              }}
            >Cập nhập</Button>
          </Row>
        </div>
    )
  }


}

export default Price
