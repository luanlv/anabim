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
import Video from './VideoComponent'
import VideoIntro from './VideoIntroComponent'

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i + ' value'}</Option>);
}

class SuaVideo extends React.Component {
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
      videos: [],
      course: {},
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
    // let allCourse = 'allCourse{_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
    let videos = 'videos:videoInCourse(slug: "' + slug + '"){_id, stt, courseId, section, name, link, kind, url, source, time}';

    let query = '{ ' + course + videos + ' }';
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
        course: data.oneCourse,
        videos: data.videos,
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

    let that = this;

    return (
      !this.state.loading && <div className="admin-editor">
        <Row className="padding-5" style={{marginBottom: 15}}>
          <a target="_blank" href={"/course/" + this.state.course.slug}>
            <Button type="primary" style={{float: 'right'}} size="large" >Xem trước khóa học</Button>
          </a>
        </Row>
        <Row>
          <div>Tên khóa học : <span style={{color: 'red', fontWeight: 'bold'}}>{this.state.course.name}</span></div>
          <div>Tổng cộng: <span style={{color: 'red', fontWeight: 'bold'}}>{this.state.course.section.length}</span> phần</div>
        </Row>
        <Row>
          <Tabs type="card">
            <TabPane tab="Danh sách video" key="1">
              <p className="bold sm-p-t-20"><span style={{color: 'red'}}>Video giới thiệu :</span></p>
              {this.state.videos.filter(function (el) {
                return el.section  < 0
              }).map(function(video, index) {
                return <VideoIntro defaultValue={video} key={video._id} courseId={that.state.course._id} courseSlug={that.state.course.slug} />
              })}
              {this.state.videos.filter(function (el) {
                return el.section  < 0
              }).length < 1 && <VideoIntro key="intro" courseId={that.state.course._id} courseSlug={that.state.course.slug} />}
              <br/>
              {this.state.course.section.map(function(el, index){
                return <div key={index}>
                  <p className="bold sm-p-t-20">Phần {index + 1}: <span style={{color: 'red'}}>{el}</span></p>
                  {
                    that.state.videos.filter(function(el){
                      return el.section == index;
                    }) .map (function(video, index){
                      return (<Video defaultValue={video} key={video._id} courseSlug={that.state.course.slug} deleteVideo={(id) => {
                        let videos = that.state.videos.filter((video )=> {
                          return video._id != id
                        })
                        that.setState(prev => {
                          return {
                            ...prev,
                            videos: videos
                          }
                        })
                        message.success('Xóa video thành công!')
                      }} />)
                    })
                  }

                  <Button type="dashed" onClick={() => {
                        let videos = that.state.videos
                        videos.push({section: index, courseId: that.state.course._id})
                        that.setState(prev => {
                          return {
                            ...prev,
                            videos: videos
                          }
                        })
                      }} style={{ width: '60%' }}>
                    <Icon type="plus" /> Add field
                  </Button>

                </div>
              })}
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

export default SuaVideo

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
