/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {Modal, Input, Button, Switch, Select, Row, Col, Card, Tabs, message, Affix, Icon} from 'antd';
import axios from 'axios';
import history from '../../../history'
import CustomTag from '../Components/Tags'
import ImageUpload from '../Components/ImageUpload'
import ImageSelect from '../Components/ImageSelect'
import TreeSelect from '../Components/TreeSelect'
const TabPane = Tabs.TabPane;
import CKEditor from '../Components/CKEditor'
const Option = Select.Option;
import DynamicForm from '../Components/DynamicForm'

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i + ' value'}</Option>);
}

class SuaKhoaHoc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        documents: '',
        section: [],
        level: 1
      },
    }
    if(this.props.isEdit)
      this.init(this.props.slug)
    else
      this.init()
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if(nextProps.isEdit) this.init(nextProps.slug)
  }

  async init (slug) {
    let course = 'oneCourse(slug: "' + slug + '"){_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
    let allCourse = 'allCourse{_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
    let allSoftware = 'allSoftware:allSoftware{_id, name, slug, coverUrl}';
    let allCategory = 'allCategory{_id, name, coverUrl, slug, description}';

    let query = slug ? '{ ' + course + allSoftware + allCategory + allCourse + ' }' : '{ ' + allSoftware + allCategory + allCourse + ' }';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    this.setState(prev => {
      return {
        ...prev,
        loading: false,
        data: data.oneCourse || prev.data,
        software: data.allSoftware,
        categories: data.allCategory,
        courses: data.allCourse,
      }
    })
  }

  handleCoverUpload (img) {
    this.setState(prevState => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          coverUrl: '/image/' + img.name
        }
      }
    })
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

  handleSelectImage(img){
    if(this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            coverUrl: '/image/' + img.name
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

  add(data){
    data.related = mapStringToInt(data.related)
    data.softID = mapStringToInt(data.softID)
    data.cateID = mapStringToInt(data.cateID)
    axios.post('/api/course/new', data)
      .then(res => {
        message.success('Thêm mới thành công!')
        history.push({
          pathname: '/admin/khoahoc',
          search: '?v=edit&slug=' + res.data.slug
        })
      })
      .catch(err => {
        message.error('Thêm mới thất bại')
      })
  }

  update(data){
    data.related = mapStringToInt(data.related)
    data.softID = mapStringToInt(data.softID)
    data.cateID = mapStringToInt(data.cateID)
    axios.post('/api/course/update', data)
      .then(res => {
        message.success('Cập nhập thành công!')
      })
      .catch(err => {
        message.error('Cập nhập thất bại')
      })
  }

  render() {
    if(this.props.loading){
      return (<div>loading...</div>)
    }

    //List Categories
    let listCategory = []

    let allCategory = []
    if(this.state.categories) allCategory = this.state.categories

    allCategory.map(el => {
      listCategory.push(<Option key={el._id}>{el.name}</Option>);
    })

    //List Software
    let listSoftware = []

    let allSoftware = []
    if(this.state.software) allSoftware = this.state.software

    allSoftware.map(el => {
      listSoftware.push(<Option key={el._id}>{el.name}</Option>);
    })


    //List courses
    let listCourse = []

    let allCourse = []
    if(this.state.courses) allCourse = this.state.courses

    let id = -1
    console.log(this.state.data)
    if(this.state.data._id) id = this.state.data._id;
    allCourse.map(el => {
      if(parseInt(el._id) !== parseInt(id)){
        listCourse.push(<Option key={el._id}>{el.name}</Option>);
      }
    })



    return (
      !this.state.loading && <div className="admin-editor">
        <Row className="padding-5" style={{marginBottom: 15}}>
          <Affix
            offsetTop={10}
          >
            {this.props.isEdit && <Button type="primary" style={{float: 'right'}}
                                          size="large"
                                          onClick={() => {
                                            this.update(this.state.data)
                                          }}
            >Cập nhập</Button>}
            {!this.props.isEdit && <Button type="primary" style={{float: 'right'}}
                                           size="large"
                                           onClick={() => {
                                             this.add(this.state.data)
                                           }}
            >Thêm mới</Button>}
          </Affix>
        </Row>
        <Row>
          <Tabs type="card">
            <TabPane tab="Thông tin" key="1">
              <Row>
              <Col sm={12} className="padding-5" >
                <div style={{ marginBottom: 16 }}>
                  <label><b>Tựa đề:</b></label>
                  <Input
                    placeholder="Tựa đề"
                    defaultValue={this.state.data.name}
                    onChange={(e) => {
                      let that = this
                      let value = e.target.value
                      let newSlug = function(){
                        if(that.props.isEdit)
                          return that.state.data.slug
                        else {
                          return slugify(value)
                        }
                      }
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            name: value,
                            slug: newSlug()
                          }
                        }
                      })
                    }}
                  />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label><b>slug:</b></label>
                  <Input
                    placeholder="Slug"
                    disabled={this.props.isEdit}
                    value={this.state.data.slug}
                    onChange={(e) => {
                      let value = e.target.value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            slug: value
                          }
                        }
                      })
                    }}
                  />
                </div>
                {this.state.categories &&
                <div style={{marginBottom: 16}}>
                  <label><b>Danh mục:</b></label>
                  <Select
                    mode="multiple"
                    style={{width: '100%'}}
                    placeholder="Chọn danh mục"
                    defaultValue={mapIntToString(this.state.data.cateID)}
                    onChange={(value) => {
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            cateID: value
                          }
                        }
                      })
                    }}
                  >
                    {listCategory}
                  </Select>
                </div>
                }
                {this.state.software &&
                <div style={{marginBottom: 16}}>
                  <label><b>Phần mềm sử dụng:</b></label>
                  <Select
                    mode="multiple"
                    style={{width: '100%'}}
                    placeholder="Chọn danh mục"
                    defaultValue={mapIntToString(this.state.data.softID)}
                    onChange={(value) => {
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            softID: value
                          }
                        }
                      })
                    }}
                  >
                    {listSoftware}
                  </Select>
                </div>
                }
                <div style={{marginBottom: 16}}>
                  <label><b>Cấp độ:</b></label>
                  <Select
                    style={{width: '100%'}}
                    placeholder="Chọn danh mục"
                    defaultValue={'' + this.state.data.level}
                    onChange={(value) => {
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            level: value
                          }
                        }
                      })
                    }}
                  >
                    <Option key={1}>Cấp độ 1</Option>
                    <Option key={2}>Cấp độ 2</Option>
                    <Option key={3}>Cấp độ 3</Option>
                  </Select>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label><b>Giảng viên:</b></label>
                  <Input
                    placeholder="Giảng viên"
                    defaultValue={this.state.data.authorId}
                    onChange={(e) => {
                      let value = e.target.value
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            authorId: value,
                          }
                        }
                      })
                    }}
                  />
                </div>

              </Col>
              <Col sm={12} className="padding-5">
                <div style={{ marginBottom: 16 }}>
                  <label><b>Ảnh đại diện:</b></label>
                  {!this.state.data.coverUrl && <ImageUpload
                    isMultiple={false}
                    handleUpload={(img) => this.handleCoverUpload(img)}
                  />}
                  {this.state.data.coverUrl && <Card bordered={false} className="imgWr"
                                                     onClick={() => this.showModalSelectImage('cover')}
                  >
                    <img src={this.state.data.coverUrl} />
                  </Card>}
                </div>
                <Button style={{marginRight: 10}}
                        onClick={() => this.showModalSelectImage('cover')}
                >Chọn ảnh từ thư viện</Button>
                {this.state.data.coverUrl && <Button
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        ...prevState,
                        data: {
                          ...prevState.data,
                          coverUrl: null
                        }
                      }
                    })
                  }
                  }
                >Xóa ảnh </Button>}


                <div style={{marginBottom: 16}}>
                  <label><b>Khóa học liên quan:</b></label>
                  <Select
                    mode="multiple"
                    style={{width: '100%'}}
                    placeholder="Chọn khóa học liên quan"
                    defaultValue={mapIntToString(this.state.data.related)}
                    onChange={(value) => {
                      this.setState(prev => {
                        return {
                          ...prev,
                          data: {
                            ...prev.data,
                            related: value
                          }
                        }
                      })
                    }}
                  >
                    {listCourse}
                  </Select>
                </div>


                <div style={{ marginBottom: 16 }}>
                  <label><b>Các phần trong khóa học:</b></label>
                  {this.state.data.section.map((value, index) => {
                    return (
                      <div key={index}>
                        <Input placeholder="Nội dung" style={{ width: '60%', marginRight: 8 }}
                            defaultValue={value}
                            onChange={(e) => {
                              let value = e.target.value
                              this.setState(prev => {
                                let newSection = prev.data.section
                                newSection[index] = value
                                return {
                                  ...prev,
                                  data: {
                                    ...prev.data,
                                    section: newSection
                                  }
                                }
                              })
                            }}
                        />

                        <Icon
                          className="dynamic-delete-button"
                          type="minus-circle-o"
                          // disabled={keys.length === 1}
                          onClick={() => {
                            this.setState(prev => {
                              let newSection = prev.data.section.filter((el, index2) => { return index !== index2})
                              return {
                                ...prev,
                                data: {
                                  ...prev.data,
                                  section: newSection
                                }
                              }
                            })
                          }}
                        />
                      </div>
                    )
                  })}

                  <div>
                    <Button type="dashed"  style={{ width: '60%' }}
                      onClick={() => {
                        this.setState(prev => {
                          let newSection = prev.data.section
                          newSection.push('')
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              section: newSection
                            }
                          }
                        })
                      }}
                    >
                      <Icon type="plus" /> Add field
                    </Button>
                  </div>
                </div>


              </Col>
            </Row>
            </TabPane>
            <TabPane tab="Nội dung giới thiệu" key="2">
              <Row >
                <div style={{maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto'}}>
                  <Col className="padding-5">
                    <CKEditor
                      id={1}
                      value={this.state.data.description || ''}
                      onChange={(value) => {
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              description: value
                            }
                          }
                        })
                      }}
                    />
                  </Col>

                </div>
              </Row>
            </TabPane>
            <TabPane tab="Tài liệu thực hành" key="3">
              <Row >
                <div style={{maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto'}}>
                  <Col className="padding-5">
                    <CKEditor
                      id={1}
                      value={this.state.data.documents || ''}
                      onChange={(value) => {
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              documents: value
                            }
                          }
                        })
                      }}
                    />
                  </Col>

                </div>
              </Row>
            </TabPane>
          </Tabs>
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
    );
  }
}

function slugify(str)
{
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

export default SuaKhoaHoc

function mapIntToString(array = []){
  let result = []
  array.forEach(num => {
    result.push('' + num)
  })
  return result
}
function mapStringToInt(array = []){
  let result = []
  array.forEach(num => {
    result.push(parseInt(num))
  })
  return result
}
