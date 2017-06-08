/* global $ */
import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';

class ActiveCode extends React.Component {
  static contextTypes = { store: PropTypes.object.isRequired };

  render() {
    const user = this.context.store.getState().user
    return (
      <div id='activeCode' className='ui small modal '>
        <div className='header' style={{textAlign: 'center'}}>
          Điền mã kích hoạt
        </div>
        <div className='ui' style={{textAlign: 'center', padding: '30px 10px'}}>
          <div className='ui two column stackable grid'>
            <div className='column'>
              <div className='ui form'>
                <div className='field' >
                  <input type='text' id='inputActiveCode' placeholder='VD:3DAYS' />
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='ui form'>
                <div className='field'>
                  <button className='ui primary button'
                          onClick={function () {
                            var code = $('#inputActiveCode').val()
                            if (code.length > 0) {
                              axios.get('/api/membership/activebycode/' + code)
                                .then((res) => {
                                  if(!user){
                                    alert('Bạn phải đăng nhập!')
                                  } else {
                                    if(res.data.all || res.data.email === user.username ){
                                      if(res.data.used){
                                        alert("Mã đã được sử dụng trước đó")
                                      } else {
                                        axios.post('/api/membership/activebycode', res.data)
                                          .then(res2 => {
                                            console.log(res2.data)
                                          })
                                          .catch(err2 => {
                                            alert('Có lỗi, vui lòng liên lạc với bộ phận kỹ thuật chúng tôi')
                                          })
                                      }
                                    } else {
                                      alert("Mã không áp dụng cho tài khoản của bạn")
                                    }
                                  }
                                })
                                .catch((err) => {
                                  alert('Sai hoặc không tồn tại mã: ' + code)
                                })
                            }
                          }}
                  >Kích hoạt</button>
                </div>
              </div></div>
          </div>

        </div>

      </div>
    )
  }
}

export default ActiveCode

let Data = {}
Data.baseUrl = ''
Data.user = {
  id: ''
}
