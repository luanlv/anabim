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
    let information = 'information{menu, footer}'
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
      data: data.information
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
          <Collapse>

            <Panel header={'Menu'} key="Menu">
              {this.state.data.menu && <div>
                {this.state.data.menu.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.menu
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            menu: menu
                          }
                        }
                      })
                    }} />
                    
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.menu
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            menu: menu
                          }
                        }
                      })
                    }} />
                    
                    <Button type="danger"
                      onClick={() => {
                        let menu = this.state.data.menu
                        let newMenu = menu.filter((el, idx) => {return index !== idx} )
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              menu: newMenu
                            }
                          }
                        })
                      }
                      }
                    >Xóa</Button>
                    
                  </div>
                })}
                <Button type="primary"
                        onClick={() => {
                          let menu = this.state.data.menu
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                menu: menu
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
            
            <Panel header={'Footer Cột 1'} key="Footer1">
              {this.state.data.footer && <div>
                {this.state.data.footer.cot1.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.footer.cot1
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            footer: {
                              ...prev.data.footer,
                              cot1: menu
                            }
                          }
                        }
                      })
                    }} />
        
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.footer.cot1
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            footer: {
                              ...prev.data.footer,
                              cot1: menu
                            }
                          }
                        }
                      })
                    }} />
        
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.footer.cot1
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    footer: {
                                      ...prev.data.footer,
                                      cot1: newMenu
                                    }
                                  }
                                }
                              })
                            }
                            }
                    >Xóa</Button>
      
                  </div>
                })}
                <Button type="primary"
                        onClick={() => {
                          let menu = this.state.data.footer.cot1
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                footer: {
                                  ...prev.data.footer,
                                  cot1: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Footer Cột 2'} key="Footer2">
              {this.state.data.footer && <Editor
                initValue={this.state.data.footer.cot2}
                handleChange={(value) => {
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        footer: {
                          ...prev.data.footer,
                          cot2: value
                        }
                      }
                    }
                  })
                }
                }
              />
              }
            </Panel>
  
            <Panel header={'Footer Cột 3'} key="Footer3">
              {this.state.data.footer && <Editor
                initValue={this.state.data.footer.cot3}
                handleChange={(value) => {
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        footer: {
                          ...prev.data.footer,
                          cot3: value
                        }
                      }
                    }
                  })
                }
                }
              />
              }
            </Panel>

          </Collapse>
          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                this.updateSetting({information: this.state.data});
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
    if(this.state.selectImageType === 'logo1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            logo1: '/image/' + img.name
          }
        }
      })
    } else if(this.state.selectImageType === 'logo2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            logo2: '/image/' + img.name
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
