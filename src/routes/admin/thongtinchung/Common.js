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
      data: data.information.common
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

            <Panel header={'Social network'} key="socialnetwork">
              <Row className="padding-5">
                <b>Facebook: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.facebook} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        facebook: value

                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Google: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.google} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        google: value

                      }
                    }
                  })
                }} />
              </Row>
            </Panel>
            <Panel header={'Information Header'} key="informationheader">
              <Row className="padding-5">
                <b>Title 1: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.title1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        title1: value

                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body 1: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.body1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        body1: value

                      }
                    }
                  })
                }} />
              </Row>

              <hr style={{borderColor: 'blue'}} />

              <Row className="padding-5">
                <b>Title 2: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.title2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        title2: value

                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body 2: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.body2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        body2: value

                      }
                    }
                  })
                }} />
              </Row>

              <hr style={{borderColor: 'blue'}} />

              <Row className="padding-5">
                <b>Title 3: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.title3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        title3: value

                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body 3: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.body3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        body3: value

                      }
                    }
                  })
                }} />
              </Row>
            </Panel>


            <Panel header={'Information Footer'} key="informationfooter">
              <Row className="padding-5">
                <b>Left: </b>
                <br/>
                <Editor
                  initValue={this.state.data.footer1}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          footer1: value
                        }
                      }
                    })
                  }
                  }
                />
              </Row>

              <Row className="padding-5">
                <b>Left: </b>
                <br/>
                <Editor
                  initValue={this.state.data.footer2}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          footer2: value
                        }
                      }
                    })
                  }
                  }
                />
              </Row>

            </Panel>

            <Panel header={'Logo'} key="logo">
              {this.state.data.logo1 !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Logo Chính</b></label>
                {this.state.data.logo1 && <Card bordered={false} className="imgWr"
                                               onClick={() => this.showModalSelectImage('logo1')}
                >
                  <img src={this.state.data.logo1} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('logo1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.logo1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          logo1: null
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>
              }

              {this.state.data.logo2 !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Logo Phụ:</b></label>
                {this.state.data.logo2 && <Card bordered={false} className="imgWr" style={{background: '#ddd !important'}}
                                               onClick={() => this.showModalSelectImage('logo2')}
                >
                  <img src={this.state.data.logo2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('logo2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.logo2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          logo2: null
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>
              }

            </Panel>

            {this.state.data.menu &&
            <Panel header={'Menu'} key="menu">
              <Row className="padding-5">
                <b>Menu 1: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.menu1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          menu1: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Path 1: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.path1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          path1: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Menu 2: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.menu2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          menu2: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Path 2: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.path2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          path2: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Menu 3: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.menu3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          menu3: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Path 3: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.path3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          path3: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Menu 4: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.menu4} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          menu4: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Path 3: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.path4} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          path4: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Menu 5: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.menu5} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          menu5: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Path 5: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.path5} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          path5: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Menu 6: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.menu6} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          menu6: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Path 6: </b>
                <br/>
                <Input size="large" defaultValue={this.state.data.menu.path6} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        menu: {
                          ...prev.data.menu,
                          path6: value
                        }

                      }
                    }
                  })
                }}/>
              </Row>

              <hr style={{borderColor: 'blue'}}/>


            </Panel>
            }

          </Collapse>
          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                this.updateSetting({common: this.state.data});
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
