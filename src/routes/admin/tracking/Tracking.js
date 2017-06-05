import React  from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse, Input, Card, Modal} from 'antd';
// import CodeMirror from '../Components/CodeMirror'
import axios from 'axios'
const Panel = Collapse.Panel;
var CodeMirror = require('react-codemirror')

import ImageUpload from '../Components/ImageUpload'
import ImageSelect from '../Components/ImageSelect'
import Editor from '../Components/CustomEditor'

if(process.env.BROWSER) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Contact extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: {},
      showModalSelectImage: false,
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
      data: data.information.tracking
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
            <b>Description :</b>
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

          {this.state.data.body !== undefined &&
          <Row className="padding-5">
            <b>Body : </b>
            <br/>
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


          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                this.updateSetting({tracking: this.state.data});
              }}
            >Cập nhập</Button>
          </Row>

          <Modal
            style={{top: 30}}
            width="90%"
            title="Basic Modal" visible={this.state.modalSelectImage}
            onOk={this.handleOk} onCancel={this.handleCancel}
          >
            <ImageSelect handleSelect={(img) => this.handleSelectImage(img)} />
          </Modal>

        </div>
    )
  }

  showModalSelectImage = (type) => {
    this.setState(prev => {
      return {
        ...prev,
        modalSelectImage: true,
        selectImageType: type
      }
    });
  }

  handleSelectImage(img){
    if(this.state.selectImageType === 'img1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            img1: '/image/' + img.name
          }
        }
      })
    } else if(this.state.selectImageType === 'img2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            img2: '/image/' + img.name
          }
        }
      })
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name)
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
        }
      })
    }
  }

  handleOk = (e) => {
    this.setState({
      modalSelectImage: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      modalSelectImage: false,
    });
  }

}

export default Contact
