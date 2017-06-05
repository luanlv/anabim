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
      allService: {},
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
      allService: data.information.allService,
      services: data.information.services
    })
    // this.setState({
    //   services: data.information.services
    // })
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
          {this.state.allService.title !== undefined &&
          <Row className="padding-5">
            <b>Title: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.allService.title} onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  allService: {
                    ...prev.allService,
                    title: value
                  }
                }
              })
            }} />
          </Row>}

          {this.state.allService.description !== undefined &&
          <Row className="padding-5">
            <b>Title: </b>
            <br/>
            <Input size="large"  defaultValue={this.state.allService.description} onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  allService: {
                    ...prev.allService,
                    description: value
                  }
                }
              })
            }} />
          </Row>}

          {this.state.services && <div>
          <Collapse>
            {this.state.services && this.state.services.groundtransport &&
            <Panel header={'Service 1 (Ground Transport)'} key="service1">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.groundtransport.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        groundtransport: {
                          ...prev.services.groundtransport,
                          title: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Slug: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.groundtransport.slug} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        groundtransport: {
                          ...prev.services.groundtransport,
                          slug: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Body : </b>
                <br/>
                <Editor
                  initValue={this.state.services.groundtransport.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        services: {
                          ...prev.services,
                          groundtransport: {
                            ...prev.services.groundtransport,
                            body: value,
                            description: jQuery(value).text().slice(0, 250)
                          }
                        }
                      }
                    })
                  }

                  }
                />
              </Row>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 1:</b></label>
                {this.state.services.groundtransport.img1 && <Card bordered={false} className="imgWr"
                                               onClick={() => this.showModalSelectImage('groundtransport1')}
                >
                  <img src={this.state.services.groundtransport.img1} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('groundtransport1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.groundtransport.img1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          groundtransport: {
                            ...prevState.groundtransport,
                            img1: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>

              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 2:</b></label>
                {this.state.services.groundtransport.img2 && <Card bordered={false} className="imgWr"
                                                             onClick={() => this.showModalSelectImage('groundtransport2')}
                >
                  <img src={this.state.services.groundtransport.img2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('groundtransport2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.groundtransport.img2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          groundtransport: {
                            ...prevState.groundtransport,
                            img2: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>

            </Panel>
            }
          </Collapse>

          <Collapse>

            <Panel header={'Service 2 (Cargo)'} key="service2">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.cargo.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        cargo: {
                          ...prev.services.cargo,
                          title: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Slug: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.cargo.slug} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        cargo: {
                          ...prev.services.cargo,
                          slug: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Body : </b>
                <br/>
                <Editor
                  initValue={this.state.services.cargo.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        services: {
                          ...prev.services,
                          cargo: {
                            ...prev.services.cargo,
                            body: value,
                            description: jQuery(value).text().slice(0, 250)
                          }
                        }
                      }
                    })
                  }
                  }
                />
              </Row>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 1:</b></label>
                {this.state.services.cargo.img1 && <Card bordered={false} className="imgWr"
                                                                   onClick={() => this.showModalSelectImage('cargo1')}
                >
                  <img src={this.state.services.cargo.img1} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('cargo1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.cargo.img1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          cargo: {
                            ...prevState.cargo,
                            img1: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>

              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 2:</b></label>
                {this.state.services.cargo.img2 && <Card bordered={false} className="imgWr"
                                                                   onClick={() => this.showModalSelectImage('cargo2')}
                >
                  <img src={this.state.services.cargo.img2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('cargo2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.cargo.img2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          cargo: {
                            ...prevState.cargo,
                            img2: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}
              </div>

            </Panel>

          </Collapse>

          <Collapse>
            <Panel header={'Service 3 (warehousing)'} key="service3">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.warehousing.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        warehousing: {
                          ...prev.services.warehousing,
                          title: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Slug: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.warehousing.slug} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        warehousing: {
                          ...prev.services.warehousing,
                          slug: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Body : </b>
                <br/>
                <Editor
                  initValue={this.state.services.warehousing.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        services: {
                          ...prev.services,
                          warehousing: {
                            ...prev.services.warehousing,
                            body: value,
                            description: jQuery(value).text().slice(0, 250)
                          }
                        }
                      }
                    })
                  }
                  }
                />
              </Row>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 1:</b></label>
                {this.state.services.warehousing.img1 && <Card bordered={false} className="imgWr"
                                                               onClick={() => this.showModalSelectImage('warehousing1')}
                >
                  <img src={this.state.services.warehousing.img1} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('warehousing1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.warehousing.img1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          warehousing: {
                            ...prevState.warehousing,
                            img1: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 2:</b></label>
                {this.state.services.warehousing.img2 && <Card bordered={false} className="imgWr"
                                                               onClick={() => this.showModalSelectImage('warehousing2')}
                >
                  <img src={this.state.services.warehousing.img2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('warehousing2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.warehousing.img2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          warehousing: {
                            ...prevState.warehousing,
                            img2: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>


            </Panel>

          </Collapse>

          <Collapse>
            {this.state.services && this.state.services.logisticservice &&
            <Panel header={'Service 4 (Logistic Service)'} key="service4">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.logisticservice.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        logisticservice: {
                          ...prev.services.logisticservice,
                          title: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Slug: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.logisticservice.slug} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        logisticservice: {
                          ...prev.services.logisticservice,
                          slug: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Body : </b>
                <br/>
                <Editor
                  initValue={this.state.services.logisticservice.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        services: {
                          ...prev.services,
                          logisticservice: {
                            ...prev.services.logisticservice,
                            body: value,
                            description: jQuery(value).text().slice(0, 250)
                          }
                        }
                      }
                    })
                  }
                  }
                />
              </Row>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 1:</b></label>
                {this.state.services.logisticservice.img1 && <Card bordered={false} className="imgWr"
                                                                   onClick={() => this.showModalSelectImage('logisticservice1')}
                >
                  <img src={this.state.services.logisticservice.img1} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('logisticservice1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.logisticservice.img1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          logisticservice: {
                            ...prevState.logisticservice,
                            img1: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 2:</b></label>
                {this.state.services.logisticservice.img2 && <Card bordered={false} className="imgWr"
                                                                   onClick={() => this.showModalSelectImage('logisticservice2')}
                >
                  <img src={this.state.services.logisticservice.img2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('logisticservice2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.logisticservice.img2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          logisticservice: {
                            ...prevState.logisticservice,
                            img2: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>

            </Panel>
            }
          </Collapse>

          <Collapse>

            <Panel header={'Service  5 (Tracking Service)'} key="service5">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.trackingservice.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        trackingservice: {
                          ...prev.services.trackingservice,
                          title: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Slug: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.trackingservice.slug} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        trackingservice: {
                          ...prev.services.trackingservice,
                          slug: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Body : </b>
                <br/>
                <Editor
                  initValue={this.state.services.trackingservice.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        services: {
                          ...prev.services,
                          trackingservice: {
                            ...prev.services.trackingservice,
                            body: value,
                            description: jQuery(value).text().slice(0, 250)
                          }
                        }
                      }
                    })
                  }
                  }
                />
              </Row>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 1:</b></label>
                {this.state.services.trackingservice.img1 && <Card bordered={false} className="imgWr"
                                                                   onClick={() => this.showModalSelectImage('trackingservice1')}
                >
                  <img src={this.state.services.trackingservice.img1} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('trackingservice1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.trackingservice.img1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          trackingservice: {
                            ...prevState.trackingservice,
                            img1: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>


              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh số 2:</b></label>
                {this.state.services.trackingservice.img2 && <Card bordered={false} className="imgWr"
                                                                   onClick={() => this.showModalSelectImage('trackingservice2')}
                >
                  <img src={this.state.services.trackingservice.img2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('trackingservice2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.trackingservice.img2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          trackingservice: {
                            ...prevState.trackingservice,
                            img2: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>


            </Panel>

          </Collapse>


          <Collapse>
            <Panel header={'Service 6 (storage)'} key="service6">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.storage.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        storage: {
                          ...prev.services.storage,
                          title: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Slug: </b>
                <br/>
                <Input size="large" defaultValue={this.state.services.storage.slug} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      services: {
                        ...prev.services,
                        storage: {
                          ...prev.services.storage,
                          slug: value
                        }
                      }
                    }
                  })
                }}/>
              </Row>

              <Row className="padding-5">
                <b>Body : </b>
                <br/>
                <Editor
                  initValue={this.state.services.storage.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        services: {
                          ...prev.services,
                          storage: {
                            ...prev.services.storage,
                            body: value,
                            description: jQuery(value).text().slice(0, 250)
                          }
                        }
                      }
                    })
                  }
                  }
                />
              </Row>


              <div style={{marginBottom: 16}}>
                <label><b>Ảnh số 1:</b></label>
                {this.state.services.storage.img1 && <Card bordered={false} className="imgWr"
                                                           onClick={() => this.showModalSelectImage('storage1')}
                >
                  <img src={this.state.services.storage.img1}/>
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('storage1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.storage.img1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          storage: {
                            ...prevState.storage,
                            img1: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>


              {this.state.services.storage.img2 !== undefined &&
              <div style={{marginBottom: 16}}>
                <label><b>Ảnh số 2:</b></label>
                {this.state.services.storage.img2 && <Card bordered={false} className="imgWr"
                                                           onClick={() => this.showModalSelectImage('storage2')}
                >
                  <img src={this.state.services.storage.img2}/>
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('storage2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.services.storage.img2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        services: {
                          ...prevState.services,
                          storage: {
                            ...prevState.storage,
                            img2: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>
              }

            </Panel>

          </Collapse>
          </div>
          }

          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                this.updateSetting({
                  allService: this.state.allService,
                  services: this.state.services
                });
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
    if(this.state.selectImageType === 'groundtransport1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            groundtransport: {
              ...prevState.services.groundtransport,
              img1: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'groundtransport2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            groundtransport: {
              ...prevState.services.groundtransport,
              img2: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'cargo1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            cargo: {
              ...prevState.services.cargo,
              img1: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'cargo2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            cargo: {
              ...prevState.services.cargo,
              img2: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'logisticservice1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            logisticservice: {
              ...prevState.services.logisticservice,
              img1: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'logisticservice2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            logisticservice: {
              ...prevState.services.logisticservice,
              img2: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'trackingservice1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            trackingservice: {
              ...prevState.services.trackingservice,
              img1: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'trackingservice2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            trackingservice: {
              ...prevState.services.trackingservice,
              img2: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'warehousing1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            warehousing: {
              ...prevState.services.warehousing,
              img1: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'warehousing2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            warehousing: {
              ...prevState.services.warehousing,
              img2: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'storage1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            storage: {
              ...prevState.services.storage,
              img1: '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'storage2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          services: {
            ...prevState.services,
            storage: {
              ...prevState.services.storage,
              img2: '/image/' + img.name
            }
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
