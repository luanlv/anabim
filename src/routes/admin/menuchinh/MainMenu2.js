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

class MainMenu extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: {},
      showModalSelectImage: false,
    }
    this.init()
  }

  async init () {
    let information = 'information{footer,nav}'
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
    console.log(this.state.data)
    
    return (
        <div>
          <Collapse>
  
            <Panel header={'Đào tạo BIM | L'} key="71">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav7left.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav7left
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav7left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav7left
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav7left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav7left
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav7left: newMenu
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
                          let menu = this.state.data.nav.nav7left
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav7left: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
            
            <Panel header={'Đào tạo BIM | R'} key="72">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav7right.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav7right
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav7right: menu
                            }
                          }
                        }
                      })
                    }} />
        
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav7right
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav7right: menu
                            }
                          }
                        }
                      })
                    }} />
        
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav7right
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav7right: newMenu
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
                          let menu = this.state.data.nav.nav7right
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav7right: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
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

export default MainMenu
