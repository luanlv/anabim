/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

// import {Header, Footer} from '../../components/Partial'
import * as C from './components/index'
import Link from '../../components/Link'

class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tab: 1
    }

  }

  componentDidMount () {
    $('.ui.search2')
      .search({
        apiSettings: {
          url: '/api/search/soft/{query}'
        },
        fields: {
          results: 'data',
          title: 'name',
          url: 'slug'
        },
        minCharacters: 3
      })

    $('.ui.example').dimmer({
      on: 'hover'
    })

    $('.ui.embed').embed()

    $('#video-background').html('<source src="http://video.vnguy.com/video.mp4" type="video/mp4" />')
  }

  render() {

      var button = (this.props.user.member === 'membership') ? ('') : ((this.props.user.member === 'pending') ? (
          <button className='ui large orange button'
                  onClick={function () {
                    $('#membership-info').modal('show')
                  }}
          >Thông tin đăng ký</button>
        ) : (
          <button className='ui large orange button '
                  onClick={() => {
                    if (!this.props.user.username) {
                      $('#dang-ky')
                        .modal('show')
                    } else {
                      if (this.props.user.member === 'none' || this.props.user.member === 'trialed' || this.props.user.member === 'membershiped') {
                        $('.first.modal')
                          .modal('show')
                      }
                    }
                  }}
          >Đăng ký học ngay</button>)
      )

      const indexCourses = this.props.data.indexcourse.value.value
      const allSoftware = this.props.data.allSoftware.value

      return (
        <div >
          <div id='main'>
            <div id='slider'>
              <div className='video-image' />
              <div className='ui container'>
                <div className='ui grid'>
                  <div className='ten wide column'>
                    <div className='ui stackable grid index-1'>
                      <div className='ten wide column'>
                        <h1>Việc tự học sẽ mang lại cho bạn cả một gia tài</h1>
                      </div>
                      <div className='six wide column' />
                    </div>
                  </div>
                  <div className='six wide column index-1'>
                    <div className='index-icon' style={{marginTop: '10px'}}>
                      <a target='_blank' href='https://facebook.com/daotaokientrucxaydung/'><i
                        className='circular facebook icon pull-right' style={{background: 'white !important'}} /></a>
                      <a target='_blank' href='https://plus.google.com/105729788429368018982'><i
                        className='circular google icon pull-right' style={{background: 'white !important'}} /></a>
                    </div>
                  </div>
                </div>

              </div>
              <video autoPlay loop id='video-background' muted />
            </div>

            <div className='main'>
              <div className='ui container segment noBor noSha'>
                <div className='ui three column stackable grid'>
                  <div className='column '>
                    <div className='centerInside'><i className='huge history icon ' /></div>
                    <div className='centerInside' style={{fontSize: '20px', fontWeight: 'bold'}}>XEM KHÔNG GIỚI HẠN
                    </div>
                    <div className='centerInside' style={{textAlign: 'center'}}>
                      Xem không giới hạn tất cả video có trên thư viện.
                    </div>
                  </div>
                  <div className='column'>
                    <div className='centerInside'><i className='huge student icon ' /></div>
                    <div className='centerInside' style={{fontSize: '20px', fontWeight: 'bold'}}>GIÁO VIÊN KINH NGHIỆM
                    </div>
                    <div className='centerInside' style={{textAlign: 'center'}}>
                      Học từ giảng viên có nhiều kinh nghiệm trong linh vực.
                    </div>
                  </div>
                  <div className='column'>
                    <div className='centerInside'><i className='huge laptop icon ' /></div>
                    <div className='centerInside' style={{fontSize: '20px', fontWeight: 'bold'}}>HỌC TẬP MỌI NƠI</div>
                    <div className='centerInside' style={{textAlign: 'center'}}>
                      Học tập mọi lúc, mọi nơi, trên mọi thiết bị.
                    </div>
                  </div>
                </div>
              </div>
              <div id='slider2' style={{background: 'url("/assets/img/5.jpg") no-repeat center #eee', marginTop: 50}}>
                <div className='hero-img'>
                  <div className='ui container'>
                    <div className='ui stackable grid'>
                      <div className='ui ten wide column index-2'>
                        <div className='ui segment noBor noSha noBa'>
                          <C.Search />
                          <div className='ui segment' style={{height: '300px', background: 'rgba(255,255,255,0.7)'}}>
                            <div className='ui three column grid'>
                              <div className='column'>
                                <div className='ui list index-3'>
                                  {allSoftware.map(function (el, index) {
                                    if (index % 3 === 0) {
                                      return (
                                        <Link to={'/software/' + el.slug} className='item centerInside' style={{height: '35px'}} key={index}>
                                          <img src={el.coverUrl} alt='' width={35} height={35} style={{marginRight: '5px', float: 'left'}} />
                                          <span style={{lineHeight: '35px', fontSize: '20px'}}>{el.name}</span>
                                        </Link>
                                      )
                                    } else {
                                      return ''
                                    }
                                  })
                                  }
                                </div>
                              </div>
                              <div className='column'>
                                <div className='ui list index-3'>
                                  {allSoftware.map(function (el, index) {
                                    if (index % 3 === 1) {
                                      return (
                                        <Link to={'/software/' + el.slug} className='item centerInside' style={{height: '35px'}} key={index}>
                                          <img src={el.coverUrl} alt='' width={35} height={35} style={{marginRight: '5px', float: 'left'}} />
                                          <span style={{lineHeight: '35px', fontSize: '20px'}}>{el.name}</span>
                                        </Link>
                                      )
                                    }
                                  })
                                  }
                                </div>
                              </div>
                              <div className='column'>
                                <div className='ui list index-3'>
                                  {allSoftware.map(function (el, index) {
                                    if (index % 3 === 2) {
                                      return (
                                        <Link to={'/software/' + el.slug} className='item centerInside' style={{height: '35px'}} key={index}>
                                          <img src={el.coverUrl} alt='' width={35} height={35} style={{marginRight: '5px', float: 'left'}} />
                                          <span style={{lineHeight: '35px', fontSize: '20px'}}>{el.name}</span>
                                        </Link>
                                      )
                                    } else {
                                      return ''
                                    }
                                  })
                                  }
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div className='ui six wide column index-1' />
                    </div>
                  </div>
                </div>

              </div>

              <div className='ui container segment noBor noSha index-10' >
                <div className='row centerInside'>
                  { button }
                </div>
              </div>
              <C.IndexCourse indexCourses={indexCourses} />
              <div className='ui container segment noBor noSha index-10' style={{margin: '40px auto !important'}}>
                <div className='row centerInside'>
                  { button }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }

  redraw () {
    this.setState({})
  }

}

export default Home;
