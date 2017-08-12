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
            <Panel header={'Kiến trúc sư | trái'} key="11">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav1left.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav1left
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav1left: menu
                            }
                          }
                        }
                      })
                    }} />
        
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav1left
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav1left: menu
                            }
                          }
                        }
                      })
                    }} />
        
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav1left
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav1left: newMenu
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
                          let menu = this.state.data.nav.nav1left
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav1left: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kiến trúc sư | phải'} key="12">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav1right.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav1right
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav1right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav1right
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav1right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav1right
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav1right: newMenu
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
                          let menu = this.state.data.nav.nav1right
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav1right: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư MEP | trái'} key="21">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav2left.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav2left
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav2left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav2left
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav2left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav2left
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav2left: newMenu
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
                          let menu = this.state.data.nav.nav2left
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav2left: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư MEP | phải'} key="22">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav2right.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav2right
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav2right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav2right
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav2right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav2right
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav2right: newMenu
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
                          let menu = this.state.data.nav.nav2right
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav2right: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư kết cấu | trái'} key="31">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav3left.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav3left
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav3left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav3left
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav3left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav3left
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav3left: newMenu
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
                          let menu = this.state.data.nav.nav3left
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav3left: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư kết cấu | phải'} key="32">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav3right.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav3right
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav3right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav3right
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav3right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav3right
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav3right: newMenu
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
                          let menu = this.state.data.nav.nav3right
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav3right: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Mô phỏng và phân tích năng lượng | L'} key="41">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav4left.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav4left
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav4left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav4left
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav4left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav4left
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav4left: newMenu
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
                          let menu = this.state.data.nav.nav4left
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav4left: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Mô phỏng và phân tích năng lượng | R'} key="42">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav4right.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav4right
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav4right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav4right
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav4right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav4right
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav4right: newMenu
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
                          let menu = this.state.data.nav.nav4right
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav4right: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư chế tạo | L'} key="51">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav5left.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav5left
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav5left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav5left
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav5left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav5left
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav5left: newMenu
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
                          let menu = this.state.data.nav.nav5left
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav5left: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư chế tạo | R'} key="52">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav5right.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav5right
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav5right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav5right
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav5right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav5right
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav5right: newMenu
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
                          let menu = this.state.data.nav.nav5right
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav5right: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư hạ tầng kỹ thuật | L'} key="61">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav6left.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav6left
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav6left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav6left
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav6left: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav6left
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav6left: newMenu
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
                          let menu = this.state.data.nav.nav6left
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav6left: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
            <Panel header={'Kỹ sư hạ tầng kỹ thuật | R'} key="62">
              {this.state.data.nav && <div>
                {this.state.data.nav.nav6right.map((el, index) => {
                  return <div key={index} style={{border: '1px solid #ddd', padding: 5}}>
                    <Input size="large" style={{width: '40%'}} defaultValue={el.title} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav6right
                      let row = menu[index]
                      row.title = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav6right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Input size="large" style={{width: '40%'}} defaultValue={el.url} onChange={(e) => {
                      let value = e.target.value
                      let menu = this.state.data.nav.nav6right
                      let row = menu[index]
                      row.url = value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            nav: {
                              ...prev.data.nav,
                              nav6right: menu
                            }
                          }
                        }
                      })
                    }} />
          
                    <Button type="danger"
                            onClick={() => {
                              let menu = this.state.data.nav.nav6right
                              let newMenu = menu.filter((el, idx) => {return index !== idx} )
                              this.setState(prev => {
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    nav: {
                                      ...prev.data.nav,
                                      nav6right: newMenu
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
                          let menu = this.state.data.nav.nav6right
                          menu.push({title: '', url: ''})
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                nav: {
                                  ...prev.data.nav,
                                  nav6right: menu
                                }
                              }
                            }
                          })
                        }
                        }
                >Thêm mới</Button>
              </div>}
            </Panel>
  
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
