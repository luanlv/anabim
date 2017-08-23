import React from 'react'

import { Form, Icon, Input, Button, Select, message } from 'antd';
const Option = Select.Option;
import axios from 'axios'

const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: props.defaultValue || {

      }
    }
    // console.log('=============================================')
    // console.log(props.defaultValue)
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    return (
      <div style={{marginBottom: 5}}>
        <div style={{display: 'inline-block', width: 50, marginRight: 10, marginBottom: '5px'}}>
          <Input
           style={{ width: '100%'}}
           defaultValue={this.state.data.stt}
           placeholder="stt"
           onChange={(e) => {
             let value = e.target.value
             this.setState(prev => {
               return {
                 ...prev,
                 data: {
                   ...prev.data,
                   stt: parseFloat(value)
                 }
               }
             })
           }}
          />
        </div>

        <div style={{display: 'inline-block', width: 200, marginRight: 10, marginBottom: '5px'}}>
          <Input
            style={{ width: '100%'}}
            defaultValue={this.state.data.name}
            placeholder="Tên video"
            onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  data: {
                    ...prev.data,
                    name: value
                  }
                }
              })
            }}
          />
        </div>

        <div style={{display: 'inline-block', width: 200, marginRight: 10, marginBottom: '5px'}}>
          <Input
            style={{ width: '100%'}}
            defaultValue={this.state.data.link}
            placeholder="Link video"
            onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  data: {
                    ...prev.data,
                    link: value
                  }
                }
              })
            }}
          />
        </div>

        <div style={{display: 'inline-block', width: 70, marginRight: 10, marginBottom: '5px'}}>
          <Input
            style={{ width: '100%'}}
            defaultValue={this.state.data.time}
            placeholder="Thời gian"
            onBlur={(e) => {
              var time = e.target.value;
              if(time.indexOf('p') > -1){
                time = time.split('p');
                time = parseInt(time[0])*60 + parseInt(0 + time[1]);
                time = parseInt(time);
              } else {
                time = parseInt(time)
              }

              time = isNaN(time) ? 0 : time

              this.setState(prev => {
                return {
                  ...prev,
                  data: {
                    ...prev.data,
                    time: time
                  }
                }
              })
              e.target.value = time;
            }}
          />
        </div>

        <div style={{display: 'inline-block', width: 120, marginRight: 10, marginBottom: '5px'}}>
          <Select defaultValue={this.state.data.kind || 'free'}
                  style={{ width: '100%' }}
                  onChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          kind: value
                        }
                      }
                    })
                  }}
          >
            <Option value="free">Miễn phí</Option>
            <Option value="paid">Thành viên</Option>
          </Select>
        </div>

        <div style={{display: 'inline-block', width: 120, marginRight: 10, marginBottom: '5px'}}>
          <Select defaultValue={this.state.data.source || 'anabim'}
                  style={{ width: '100%' }}
                  onChange={(value) => {
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: {
                          ...prev.data,
                          source: value
                        }
                      }
                    })
                  }}
          >
            <Option value="anabim">Anabim</Option>
            <Option value="youtube">Youtube</Option>
          </Select>
        </div>

        <div style={{display: 'inline-block', width: 200, marginRight: 0, marginBottom: '5px'}}>
          <Input
            style={{ width: '100%'}}
            value={this.state.data.url}
            placeholder="Slug"
            onChange={(e) => {
              let value = e.target.value
              this.setState(prev => {
                return {
                  ...prev,
                  data: {
                    ...prev.data,
                    url: value
                  }
                }
              })
            }}
          />
        </div>
        <Button
          style={{marginRight: 10, marginBottom: '5px'}}
          type="primary"
          onClick={() => {
            let that = this
            let newSlug = function(){
              return slugify(that.state.data.name)
            }
            this.setState(prev => {
              return {
                ...prev,
                data: {
                  ...prev.data,
                  url: newSlug()
                }
              }
            })
          }}
        >
          URL

        </Button>
        {this.state.data._id && <a target="_blank" href={"/course/" + this.props.courseSlug + "/" + this.state.data.url}>
          <Button
            style={{marginRight: 10, marginBottom: '5px'}}
            type="primary"
            htmlType="submit"
          >
            Xem trước
          </Button>
        </a>}
        {this.state.data._id && <Button
          style={{marginRight: 10, marginBottom: '5px'}}
          type="primary"
          htmlType="submit"
          onClick={() => {
            axios.post('/api/video/delete', {id: this.state.data._id})
              .then(res => {
                this.props.deleteVideo(this.state.data._id)
              })
              .catch(err => {
                message.error('Xóa video thất bại')
              })
          }}
        >
          Xóa
        </Button>}
        {this.state.data._id && <Button
          style={{marginRight: 10, marginBottom: '5px'}}
          type="primary"
          htmlType="submit"
          onClick={() => {
            axios.post('/api/video/update', this.state.data)
              .then(res => {
                message.success('Cập nhập video thành công!')
              })
              .catch(err => {
                message.error('Cập nhập video thất bại')
              })
          }}
        >
          Cập nhập
        </Button>}

        {!this.state.data._id && <Button
          style={{marginRight: 10, marginBottom: '5px'}}
          type="primary"
          htmlType="submit"
          onClick={() => {
            axios.post('/api/video/new', this.state.data)
              .then(res => {
                message.success('Thêm mới video thành công!')
                this.setState(prev => {
                  return {
                    ...prev,
                    data: {
                      ...prev.data,
                      _id: res.data._id
                    }
                  }
                })
              })
              .catch(err => {
                message.error('Thêm mới video thất bại')
              })
          }}
        >
          Thêm mới
        </Button>}

      </div>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default WrappedHorizontalLoginForm

function slugify(str = '')
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
