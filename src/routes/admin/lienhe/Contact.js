import React  from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse, Input} from 'antd';
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

class Contact extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
    this.init()
  }

  async init () {
    let information = 'information{id, about, services, common, home, contact, tracking, allService}'
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{' + information + '}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    this.setState({
      data: data.information.contact
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
          {this.state.data.title !== undefined &&
          <Row className="padding-5">
            <b>Title: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.data.title} onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  data: {
                    ...prev.data,
                    title: value
                  }
                }
              })
            }} />
          </Row>}
          {this.state.data.description !== undefined &&
          <Row className="padding-5">
            <b>Description: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.data.description} onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  data: {
                    ...prev.data,
                    description: value
                  }
                }
              })
            }} />
          </Row>}
          {this.state.data.header !== undefined &&
          <Row className="padding-5">
            <b>Headr Form: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.data.header} onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  data: {
                    ...prev.data,
                    header: value
                  }
                }
              })
            }} />
          </Row>}
          <Collapse>

            <Panel header={'Body Form'} key="2">
              {this.state.data.body !== undefined &&
              <Row className="padding-5">
                {/*<CodeMirror*/}
                  {/*value={this.state.data.body} onChange={(value) => this.setState(prev => {*/}
                  {/*return {*/}
                    {/*...prev,*/}
                    {/*data: {*/}
                      {/*...prev.data,*/}
                      {/*body: value*/}
                    {/*}*/}
                  {/*}*/}
                {/*})}*/}
                {/*/>*/}
                <Editor
                  initValue={this.state.data.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          body: value
                        }
                      }
                    })
                  }
                  }
                />
              </Row>}
            </Panel>
            <Panel header={'Widget'} key="3">
              {this.state.data.widget !== undefined &&
              <Row className="padding-5">
                <CodeMirror
                  value={this.state.data.widget} onChange={(value) => this.setState(prev => {
                  return {
                    ...prev,
                    data: {
                      ...prev.data,
                      widget: value
                    }
                  }
                })}
                />
              </Row>}
            </Panel>
          </Collapse>
          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                this.updateSetting({contact: this.state.data});
              }}
            >Cập nhập</Button>
          </Row>
        </div>
    )
  }

  handleChange(value, target) {
    console.log(value)
    console.log(target)
  }
}

export default Contact
