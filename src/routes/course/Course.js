import React from 'react';
import { CourseInfo, Video } from './components'
import Link from '../../components/Link'
import fn from '../../components/Partial/Fn'
import FacebookProvider, { Comments } from 'react-facebook'
import moment from 'moment'

class Course extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tab: 1
    }
  }

  componentDidMount () {
    $('.special.cards .image').dimmer({
      on: 'hover'
    })

    $('.ui.rating')
      .rating('disable')

    $('.ui.accordion')
      .accordion({exclusive: false})
  }

  render () {
    var this2 = this
    let user = this.props.user
    var day = Math.floor(Math.random()*10)
    var key = "" + moment(moment().format()).add(day, 'days').unix() + day
    var videoBySlug = fn.findVideoBySlug(this.props.data.videos.value, this.props.params.slug, this.props.params.videoSlug)
    var linkVideo = ((videoBySlug.source === 'anabim') ? ('http://video.anabim.com/?v=' + fn.fixVideo(videoBySlug.link)  + '&k=' + key) : ('https://www.youtube.com/embed/' + videoBySlug.link + '?autoplay=1'))
    var button = (user.member === 'pending') ? (
      <button className='ui large orange button'
              onClick={function () {
                $('#membership-info').modal('show')
              }}
      >Thông tin đăng ký</button>
    ) : (
      <button className='ui large orange button '
              onClick={function () {
                console.log('click ')
                if (!user.username) {
                  console.log('dang ky')
                  $('#dang-ky')
                    .modal('show')
                } else {
                  if (user.member === 'none' || user.member === 'trialed' || user.member === 'membershiped') {
                    $('.first.modal')
                      .modal('show')
                  }
                }
              }}
      >Đăng ký học ngay</button>
    )
    let course = this.props.data.course.value
    if(!course.categories) course.categories = []
    if(!course.section) course.section = []
    if(!course.relatedCourse) course.relatedCourse = []
    let videos = this.props.data.videos.value

    return (
      <div id='main'>
        {(user.member !== 'membership') ? (
          <div className='ui segment noBor noRa noSha noMa' style={{backgroundColor: 'teal !important'}}>
            <div className='ui container '>
              <div className='ui column stackable grid'>
                <div className='ten wide column'>
                  <div style={{color: 'white'}} />
                </div>
                <div className='six wide column'>
                  <div className='row centerInside'>
                    { button }
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : ('')
        }
        <div className='ui segment noBor noRa noSha noMa' style={{backgroundColor: 'white !important'}}>
          <div className='ui container '>
            <div className='ui column  grid'>
              <div className='sixteen wide column'>
                <div className='ui breadcrumb'>
                  <Link to='/' >Trang chủ</Link>
                  <div className='divider'> /</div>
                  Danh mục: {course.categories.map(function (el, index) {
                  return [<Link to={'/category/' + el.slug} key={index}> [{el.name}] </Link>]
                })
                }
                </div>
                <Link to={'/course/' + course.slug}><h1 className='noMa' style={{marginBottom: '10px !important'}}>
                  {course.name} </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='ui segment noBor noRa noSha noMa'
             style={{backgroundColor: '#e5e5e5 !important', padding: '0px !important'}}>
          <div className='ui container '>
            <div className='ui column  stackable grid'>
              <div className='eleven wide column' style={{paddingTop: '0 !important'}}>
                <div className='row'>

                  { (videoBySlug.kind === "free" || (user.member === "membership" || user.member === "trial") && (moment(moment().format()).diff(moment(user.info.end), 'days') <= 0) )  ? (
                    <Video video={videoBySlug} user={this.props.user} linkVideo={linkVideo} button={button} />
                  ) : (
                    <div className="ui segment" style={{height: '556px', background: '#eee'}}>
                      <div className="centerInside" style={{marginTop: '150px', marginBottom: '20px'}}>
                        Đây là video dành riêng cho thành viên <span
                        style={{color: 'red', marginLeft: '5px', marginRight: '5px'}}> Membership </span> của <b
                        style={{marginLeft: '5px', marginRight: '5px'}}> Anabim </b>
                      </div>
                      <div className="centerInside">
                        { button }
                      </div>
                    </div>
                  )
                  }
                </div>
                <CourseInfo course={course} user={user} />
              </div>
              <div className='five wide column ' style={{paddingLeft: '0 !important'}}>

                <div className='ui segment noPa noBor noSha course-info'>
                  <div className='tabs ui top attached tabular menu'>
                    <a className='item active' data-tab='first'>Video khóa học</a>
                    <a className='item' data-tab='second'>Bình luận</a>
                  </div>
                  <div className='ui bottom attached tab segment active noPa' data-tab='first'>
                    <div className='ui styled fluid accordion'>
                      {course.section.map(function (el, index) {
                        return [
                          <div className='title active' style={{background: 'rgba(100, 100, 100, 0.1)', fontSize: '16px !important'}}>
                            <i className=' dropdown icon' />
                            {el}
                          </div>,
                          <div className='content active'>
                            <div className='ui relaxed divided list course-list'>
                              {videos.filter(function (el) {
                                return el.section === index
                              }).map(function (video, index) {
                                return (
                                  <Link to={'/course/' + course.slug + '/' + video.url} key={index}
                                        className='item'
                                        onClick={function () {
                                          this2.redraw()
                                        }}
                                  >
                                    {(video.kind === 'free') ? (<i className=' play middle aligned icon' />) : (
                                      <i className=' lock middle aligned icon' />)}
                                    <div className='content'>
                                      <h4 className='header'>{video.name}</h4>
                                      <div className='description'>{fn.secondToMinuteSecond(video.time)}</div>
                                    </div>
                                  </Link>
                                )
                              })
                              }
                            </div>
                          </div>
                        ]
                      })
                      }

                    </div>
                  </div>
                  <div className='ui bottom attached tab segment' data-tab='second'>
                    comment
                  </div>
                </div>

                <div className='ui segment noPa'>
                  <h3 className='ui top attached  header noBor noMa'
                      style={{border: '2px solid transparent !important'}}
                  >Khóa học liên quan</h3>
                  <div className='ui attached celled list  noBor noMa related-courses'
                       style={{background: 'white', borderRadius: '0 0 5px 5px'}}>
                    {course.relatedCourse.map(function (el, index) {
                      return (
                        <div className='item' key={index}>
                          <div className='ui avatar index-card-wr'>
                            <div className='index-card-text'>
                              <div>
                                <p>{el.name}</p>
                                <div className='card-text'>Cấp độ {el.level}</div>
                                <div className='card-button'>
                                  <Link to={'/course/' + el.slug}>
                                    <button className='ui inverted button'>
                                      <i className='play icon' />
                                      Xem khóa học
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <img className='ui fluid rounded image'
                                 src={el.coverUrl}
                                 style={{height: '140px'}} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='ui segment container noBor noSha'>
          <div  style={{maxWidth: 1000, textAlign: 'center'}}>
            <FacebookProvider appId='1245241202224163'>
              <Comments href={'http://edu.anabim.com/course/' + course.slug} />
            </FacebookProvider>
          </div>
        </div>

      </div>
    )
  }

  redraw () {
    this.setState({})
  }

}

export default Course
