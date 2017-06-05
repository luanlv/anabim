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
      data: data.information.home
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

            <Panel header="Slide" key="slide">
              {this.state.data.slideTitle1 !== undefined &&
              <Row className="padding-5">
                <b>Slide Title [1]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.slideTitle1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        slideTitle1: value
                      }
                    }
                  })
                }} />
              </Row>}

              {this.state.data.slideBody1 !== undefined &&
              <Row className="padding-5">
                <b>Slide Body [1]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.slideBody1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        slideBody1: value
                      }
                    }
                  })
                }} />
              </Row>}

              {this.state.data.slideImg1 !== undefined &&
                <div style={{ marginBottom: 16 }}>
                  <label><b>Ảnh slide 1:</b></label>
                  {this.state.data.slideImg1 && <Card bordered={false} className="imgWr"
                                                     onClick={() => this.showModalSelectImage('slideImg1')}
                  >
                    <img src={this.state.data.slideImg1} />
                  </Card>}

                  <Button style={{marginRight: 10}}
                          onClick={() => this.showModalSelectImage('slideImg1')}
                  >Chọn ảnh từ thư viện</Button>
                  {this.state.data.slideImg1 && <Button
                    onClick={() => {
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          data: {
                            ...prevState.data,
                            slideImg1: null
                          }
                        }
                      })
                    }
                    }
                  >Xóa ảnh </Button>}

                </div>
              }

              {this.state.data.slideTitle2 !== undefined &&
              <Row className="padding-5">
                <b>Slide Title [2]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.slideTitle2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        slideTitle2: value
                      }
                    }
                  })
                }} />
              </Row>}

              {this.state.data.slideBody2 !== undefined &&
              <Row className="padding-5">
                <b>Slide Body [2]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.slideBody2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        slideBody2: value
                      }
                    }
                  })
                }} />
              </Row>}

              {this.state.data.slideImg2 !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh slide 1:</b></label>
                {this.state.data.slideImg2 && <Card bordered={false} className="imgWr"
                                                    onClick={() => this.showModalSelectImage('slideImg2')}
                >
                  <img src={this.state.data.slideImg2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('slideImg2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.slideImg2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          slideImg2: null
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>
              }

              {this.state.data.aboutTitle !== undefined &&
              <Row className="padding-5">
                <b>About Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.aboutTitle} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        aboutTitle: value
                      }
                    }
                  })
                }} />
              </Row>}

              {this.state.data.aboutTitle !== undefined &&
              <Row className="padding-5">
                <b>About Body: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.aboutBody} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        aboutBody: value
                      }
                    }
                  })
                }} />
              </Row>}
            </Panel>

            {this.state.data.aboutTitle !== undefined &&
            <Panel header={'Welcome'} key="welcome">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.aboutTitle} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        aboutTitle: value
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.aboutBody} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        aboutBody: value
                      }
                    }
                  })
                }} />
              </Row>


            </Panel>
            }


            {this.state.data.about1 !== undefined &&
              <Panel header={'About 1'} key="about1">
                <Row className="padding-5">
                  <b>Title: </b>
                  <br/>
                  <Input size="large"  defaultValue={this.state.data.about1.title} onChange={(e) => {
                    let value = e.target.value
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          about1: {
                            ...prev.data.about1,
                            title: value
                          }
                        }
                      }
                    })
                  }} />
                </Row>

                <Row className="padding-5">
                  <b>Path: </b>
                  <br/>
                  <Input size="large"  defaultValue={this.state.data.about1.path} onChange={(e) => {
                    let value = e.target.value
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          about1: {
                            ...prev.data.about1,
                            path: value
                          }
                        }
                      }
                    })
                  }} />
                </Row>

                {this.state.data.about1 !== undefined &&
                <div style={{ marginBottom: 16 }}>
                  <label><b>Ảnh slide 1:</b></label>
                  {this.state.data.about1.img && <Card bordered={false} className="imgWr"
                                                      onClick={() => this.showModalSelectImage('about1')}
                  >
                    <img src={this.state.data.about1.img} />
                  </Card>}

                  <Button style={{marginRight: 10}}
                          onClick={() => this.showModalSelectImage('about1')}
                  >Chọn ảnh từ thư viện</Button>
                  {this.state.data.about1.img && <Button
                    onClick={() => {
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          data: {
                            ...prevState.data,
                            about1: {
                              ...prevState.data.about1,
                              img: null
                            }
                          }
                        }
                      })
                    }
                    }
                  >Xóa ảnh </Button>}

                </div>
                }

                <Row className="padding-5">
                  <b>Body: </b>
                  <br/>
                  <Input size="large"  defaultValue={this.state.data.about1.body} onChange={(e) => {
                    let value = e.target.value
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          about1: {
                            ...prev.data.about1,
                            body: value
                          }
                        }
                      }
                    })
                  }} />
                </Row>

              </Panel>
            }
            {this.state.data.about2 !== undefined &&
            <Panel header={'About 2'} key="about2">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.about2.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        about2: {
                          ...prev.data.about2,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.about2.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        about2: {
                          ...prev.data.about2,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              {this.state.data.about2 !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh slide 1:</b></label>
                {this.state.data.about2.img && <Card bordered={false} className="imgWr"
                                                     onClick={() => this.showModalSelectImage('about2')}
                >
                  <img src={this.state.data.about2.img} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('about2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.about2.img && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          about2: {
                            ...prevState.data.about2,
                            img: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>
              }

              <Row className="padding-5">
                <b>Body: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.about2.body} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        about2: {
                          ...prev.data.about2,
                          body: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }
            {this.state.data.about3 !== undefined &&
            <Panel header={'About 3'} key="about3">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.about3.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        about3: {
                          ...prev.data.about3,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.about3.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        about3: {
                          ...prev.data.about3,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              {this.state.data.about3 !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh slide 1:</b></label>
                {this.state.data.about3.img && <Card bordered={false} className="imgWr"
                                                     onClick={() => this.showModalSelectImage('about3')}
                >
                  <img src={this.state.data.about3.img} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('about3')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.about3.img && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          about3: {
                            ...prevState.data.about3,
                            img: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>}

              <Row className="padding-5">
                <b>Body: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.about3.body} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        about3: {
                          ...prev.data.about3,
                          body: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }


            {this.state.data.service1 !== undefined &&
            <Panel header={'Service 1'} key="service1">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service1.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service1: {
                          ...prev.data.service1,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service1.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service1: {
                          ...prev.data.service1,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Description: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service1.description} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service1: {
                          ...prev.data.service1,
                          description: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }


            {this.state.data.service2 !== undefined &&
            <Panel header={'Service 2'} key="service2">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service2.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service2: {
                          ...prev.data.service2,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service2.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service2: {
                          ...prev.data.service2,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Description: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service2.description} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service2: {
                          ...prev.data.service2,
                          description: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }

            {this.state.data.service3 !== undefined &&
            <Panel header={'Service 3'} key="service3">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service3.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service3: {
                          ...prev.data.service3,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service3.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service3: {
                          ...prev.data.service3,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Description: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service3.description} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service3: {
                          ...prev.data.service3,
                          description: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }

            {this.state.data.service4 !== undefined &&
            <Panel header={'Service 4'} key="service4">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service4.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service4: {
                          ...prev.data.service4,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service4.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service4: {
                          ...prev.data.service4,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Description: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service4.description} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service4: {
                          ...prev.data.service4,
                          description: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }

            {this.state.data.service5 !== undefined &&
            <Panel header={'Service 5'} key="service5">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service5.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service5: {
                          ...prev.data.service5,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service5.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service5: {
                          ...prev.data.service5,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Description: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service5.description} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service5: {
                          ...prev.data.service5,
                          description: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }

            {this.state.data.service6 !== undefined &&
            <Panel header={'Service 6'} key="service6">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service6.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service6: {
                          ...prev.data.service6,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Path: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service6.path} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service6: {
                          ...prev.data.service6,
                          path: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Description: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.service6.description} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        service6: {
                          ...prev.data.service6,
                          description: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }

            {this.state.data.coreValue !== undefined &&
            <Panel header={'Core Values'} key="corevalue">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.coreValue.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        coreValue: {
                          ...prev.data.coreValue,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Author: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.coreValue.author} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        coreValue: {
                          ...prev.data.coreValue,
                          author: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Description: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.coreValue.body} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        coreValue: {
                          ...prev.data.coreValue,
                          body: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }

            {this.state.data.aboutUs !== undefined &&
            <Panel header={'About Us'} key="aboutUs">
              <Row className="padding-5">
                <b>Title: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.aboutUs.title} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        aboutUs: {
                          ...prev.data.aboutUs,
                          title: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body: </b>
                <br/>

                <Editor
                  initValue={this.state.data.aboutUs.body}
                  handleChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          aboutUs: {
                            ...prev.data.aboutUs,
                            body: value
                          }
                        }
                      }
                    })
                  }
                  }
                />

              </Row>


            </Panel>
            }


            {this.state.data.form !== undefined &&
            <Panel header={'Form'} key="form">
              <Row className="padding-5">
                <b>Header: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.form.header} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        form: {
                          ...prev.data.form,
                          header: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.form.body} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        form: {
                          ...prev.data.form,
                          body: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>
            }

            {this.state.data.testimonials !== undefined &&
            <Panel header={'Testimonial'} key="testimonial">

              <Row className="padding-5">
                <b>Name 1: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.name1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          name1: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Job 1: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.job1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          job1: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body 1: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.testimonial1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          testimonial1: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Name 2: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.name2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          name2: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Job 2: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.job2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          job2: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body 2: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.testimonial2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          testimonial2: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Name 3: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.name3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          name3: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Job 3: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.job3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          job3: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body 3: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.testimonial3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          testimonial3: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              <hr style={{borderColor: 'blue'}}/>

              <Row className="padding-5">
                <b>Name 4: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.name4} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          name4: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Job 4: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.job4} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          job4: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

              <Row className="padding-5">
                <b>Body 4: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.testimonials.testimonial4} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        testimonials: {
                          ...prev.data.testimonials,
                          testimonial4: value
                        }
                      }
                    }
                  })
                }} />
              </Row>

            </Panel>}

            {this.state.data.partners !== undefined &&
            <Panel header={'Partners'} key="partners">
              <Row className="padding-5">
                <b>Url [1]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.partners.url1} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        partners: {
                          ...prev.data.partners,
                          url1: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              {this.state.data.partners !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh slide 1:</b></label>
                {this.state.data.partners.img1 && <Card bordered={false} className="imgWr"
                                                     onClick={() => this.showModalSelectImage('partner1')}
                >
                  <img src={this.state.data.partners.img1} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('partner1')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.partners.img1 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          partners: {
                            ...prevState.data.partners,
                            img1: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>}

              <hr style={{backgroundColor: 'blue'}}/>


              <Row className="padding-5">
                <b>Url [2]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.partners.url2} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        partners: {
                          ...prev.data.partners,
                          url2: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              {this.state.data.partners !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh Partner [2]:</b></label>
                {this.state.data.partners.img2 && <Card bordered={false} className="imgWr"
                                                        onClick={() => this.showModalSelectImage('partner2')}
                >
                  <img src={this.state.data.partners.img2} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('partner2')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.partners.img2 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          partners: {
                            ...prevState.data.partners,
                            img2: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>}

              <hr style={{backgroundColor: 'blue'}}/>



              {/*Partner 3 */}

              <Row className="padding-5">
                <b>Url [3]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.partners.url3} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        partners: {
                          ...prev.data.partners,
                          url3: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              {this.state.data.partners !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh Partner 3:</b></label>
                {this.state.data.partners.img3 && <Card bordered={false} className="imgWr"
                                                        onClick={() => this.showModalSelectImage('partner3')}
                >
                  <img src={this.state.data.partners.img3} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('partner3')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.partners.img3 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          partners: {
                            ...prevState.data.partners,
                            img3: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>}

              <hr style={{backgroundColor: 'blue'}}/>

              {/*Partner 4 */}

              <Row className="padding-5">
                <b>Url [4]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.partners.url4} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        partners: {
                          ...prev.data.partners,
                          url4: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              {this.state.data.partners !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh Partner [4]:</b></label>
                {this.state.data.partners.img4 && <Card bordered={false} className="imgWr"
                                                        onClick={() => this.showModalSelectImage('partner4')}
                >
                  <img src={this.state.data.partners.img4} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('partner4')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.partners.img4 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          partners: {
                            ...prevState.data.partners,
                            img4: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>}

              <hr style={{backgroundColor: 'blue'}}/>

              {/*Partner 5 */}

              <Row className="padding-5">
                <b>Url [5]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.partners.url5} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        partners: {
                          ...prev.data.partners,
                          url5: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              {this.state.data.partners !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh Partner [5]:</b></label>
                {this.state.data.partners.img5 && <Card bordered={false} className="imgWr"
                                                        onClick={() => this.showModalSelectImage('partner5')}
                >
                  <img src={this.state.data.partners.img5} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('partner5')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.partners.img5 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          partners: {
                            ...prevState.data.partners,
                            img5: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>}

              <hr style={{backgroundColor: 'blue'}}/>


              {/*Partner 6 */}

              <Row className="padding-5">
                <b>Url [6]: </b>
                <br/>
                <Input size="large"  defaultValue={this.state.data.partners.url6} onChange={(e) => {
                  let value = e.target.value
                  this.setState(prev => {
                    return {
                      ...prev,
                      data: {
                        ...prev.data,
                        partners: {
                          ...prev.data.partners,
                          url6: value
                        }
                      }
                    }
                  })
                }} />
              </Row>


              {this.state.data.partners !== undefined &&
              <div style={{ marginBottom: 16 }}>
                <label><b>Ảnh Partner [6]:</b></label>
                {this.state.data.partners.img6 && <Card bordered={false} className="imgWr"
                                                        onClick={() => this.showModalSelectImage('partner6')}
                >
                  <img src={this.state.data.partners.img6} />
                </Card>}

                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('partner6')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.partners.img6 && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          partners: {
                            ...prevState.data.partners,
                            img6: null
                          }
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}

              </div>}

              <hr style={{backgroundColor: 'blue'}}/>

            </Panel>
            }

          </Collapse>
          <Row className="padding-5">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                this.updateSetting({home: this.state.data});
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
    if(this.state.selectImageType === 'slideImg1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            slideImg1: '/image/' + img.name
          }
        }
      })
    } else if(this.state.selectImageType === 'slideImg2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            slideImg2: '/image/' + img.name
          }
        }
      })
    } else if(this.state.selectImageType === 'about1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            about1: {
              ...prevState.data.about1,
              img:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'about2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            about2: {
              ...prevState.data.about2,
              img:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'about3') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            about3: {
              ...prevState.data.about3,
              img:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'partner1') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            partners: {
              ...prevState.data.partners,
              img1:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'partner2') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            partners: {
              ...prevState.data.partners,
              img2:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'partner3') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            partners: {
              ...prevState.data.partners,
              img3:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'partner4') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            partners: {
              ...prevState.data.partners,
              img4:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'partner5') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            partners: {
              ...prevState.data.partners,
              img5:  '/image/' + img.name
            }
          }
        }
      })
    } else if(this.state.selectImageType === 'partner6') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            partners: {
              ...prevState.data.partners,
              img6:  '/image/' + img.name
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
