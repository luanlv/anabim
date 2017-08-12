/* global $ */
import React from 'react'
import Link from '../../components/Link'
import PropTypes from 'prop-types';
import Sidebar from './Sidebar'

class Nav extends React.Component {
  
  static contextTypes = { store: PropTypes.object.isRequired };
  
  
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    $('.ui.search1')
      .search({
        apiSettings: {
          url: '/api/search/{query}'
        },
        fields: {
          results: 'data',
          title: 'name',
          url: 'slug'
        },
        minCharacters: 3
      })

    let $menu = $('#danhmuc')
    let firstMenu = $('#danhmuc').children('.item')[0]
    $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
    })

    $('.ui.dropdown')
      .dropdown({
        on: 'hover',
        onShow: function (text, value) {
          if ($('.maintainHover').length < 1) {
            activateSubmenu(firstMenu)
          }
        }
      })
    function activateSubmenu (row) {
      let $row = $(row)
      let submenuId = $row.data('submenuId')
      let $submenu = $('#' + submenuId)
      let height = $menu.outerHeight()
      let width = $menu.outerWidth()

      let level = parseInt($row.attr('data-submenu-id'))
      $submenu.css({
        display: 'block',
        top: -1 - (level - 1) * 60,
        left: width - 6,  // main should overlay submenu
        height: height  // padding for main dropdown's arrow
      })
      $row.addClass('maintainHover')
    }

    function deactivateSubmenu (row) {
      let $row = $(row)
      let submenuId = $row.data('submenuId')
      let $submenu = $('#' + submenuId)

      $submenu.css('display', 'none')
      $row.removeClass('maintainHover')
    }
  }

  render () {
    const user = this.props.user
    const logged = this.props.user.username
    // if(logged && !this.props.user.passwordChanged && !this.props.user.avatar) {
    //   this.changePassword()
    // }
    const menu = this.context.store.getState().data.information.value.menu
    const nav = this.context.store.getState().data.information.value.nav
    return (
      <div className='nav'>
        <div className='ui inverted segment nav-top'>
          <div className='ui container'>
            <div className='ui inverted secondary menu'>
              <Sidebar />
              <a id='logo' href='http://anabim.com/' target='_blank' style={{width: '120px !important'}}>
                <img src='/assets/img/logo.jpg' alt='' width={120} height={42} />
              </a>
              <span className='ui top left pointing dropdown item navbar' style={{marginRight: '0px !important'}}>
                DANH MỤC
                <i className='dropdown icon' />
                <ul className='ui blue menu' id='danhmuc'>
                  <li className='item' data-submenu-id='1'>
                    <i className='dashboard icon' />
                    KIẾN TRÚC SƯ
                    <div id='1' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav1left.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav1right.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='2'>
                    <i className='object ungroup icon' />
                    KỸ SƯ MEP
                    <div id='2' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav2left.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                           {nav.nav2right.map((el, index) => {
                             return <li key={index}>
                               <Link to={el.url}>{el.title}</Link>
                             </li>
                           })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='3'>
                    <i className='calculator icon' />
                    KỸ SƯ KẾT CẤU
                    <div id='3' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav3left.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                           {nav.nav3right.map((el, index) => {
                             return <li key={index}>
                               <Link to={el.url}>{el.title}</Link>
                             </li>
                           })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='4'>
                    <i className='cubes icon' />
                    MÔ PHỎNG & PHÂN TÍCH NĂNG LƯỢNG
                    <div id='4' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                           {nav.nav4left.map((el, index) => {
                             return <li key={index}>
                               <Link to={el.url}>{el.title}</Link>
                             </li>
                           })}
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav4right.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='5'>
                    <i className='cube icon' />
                    KỸ SƯ CHẾ TẠO
                    <div id='5' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav5left.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav5right.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='6'>
                    <i className='cube icon' />
                    KỸ SƯ HẠ TẦNG KỸ THUẬT
                    <div id='6' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav6left.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='7'>
                    <i className='cube icon' />
                    ĐÀO TẠO BIM
                    <div id='7' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list' >
                            {nav.nav7left.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            {nav.nav7right.map((el, index) => {
                              return <li key={index}>
                                <Link to={el.url}>{el.title}</Link>
                              </li>
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

              </span>
              <div className='item' style={{paddingTop: 7}}>
                <div className='ui icon input search search1'>
                  <div className='ui icon input'>
                    <input
                      style={{width: '400px'}}
                      className='prompt' type='text' placeholder='TÌM KIẾM KHÓA HỌC ...' />
                  </div>
                </div>
              </div>

              {(logged) ? (
                <div className='right menu'>
                  <div className='ui inverted circular item noPa' style={{background: 'black', width: '50px'}}>
                    <div className='ui top right pointing dropdown icon button noPa noMa' style={{background: 'black', width: '50px'}} >
                      <i className='inverted big alarm icon' />
                      <div className='menu'>
                        <div className='item'>Hiện chưa có thông báo nào</div>
                      </div>
                    </div>
                  </div>

                  <div className='ui inverted circular item noPa' style={{background: 'black', width: '50px'}}>
                    <div className='ui top right pointing dropdown ' >
                      <a className='ui item' style={{padding: 0}}>
                        <img src='/assets/img/avatar.png' alt='avatar' />
                      </a>
                      <div className='menu'>
                        <a className='item' style={{color: 'black !important'}} onClick={this.changePassword.bind(this)}
                        >
                          <i className='tags icon' />
                          Đổi mật khẩu
                        </a>
                        <a className='item' style={{color: 'black !important'}} onClick={this.membership.bind(this)}
                        >
                          <i className='tags icon' />
                          Membership
                        </a>
                        <a href='/auth/logout' className='item' style={{color: 'black !important'}}>
                          <div className='ui black empty circular label' />
                          Đăng xuất
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                ) : (<div className='right menu'>
                  <a className='ui item dang-nhap'>
                    Đăng nhập
                  </a>
                  <a className='ui item dang-ky' style={{backgroundColor: '#008cc9'}}>
                    Đăng ký
                  </a>
                </div>)}
            </div>

          </div>
        </div>
        <div className='ui inverted segment nav-bot'>
          <div className='ui inverted  mini secondary pointing menu'>
            <div className='ui container'>
              <Link to='/' className='item'>
                <i className='home icon' />
              </Link>
              {menu.map((el, index) => {
                return (
                  <Link key={index} to={el.url} className='item'>
                    {el.title}
                  </Link>
                )
              })}
              <div className='right menu'>

                {(user.member === 'member') ? ('') : (
                  <a className='item'
                    onClick={this.activeCode.bind(this)}
                  >
                    Mã kích hoạt
                  </a>
                )}
                <a className='red item' onClick={this.membership.bind(this)} >
                  Membership
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  membership () {
    if (!this.props.user.username) {
      $('#dang-ky')
        .modal('show')
    } else {
      if (this.props.user.member === 'none' || this.props.user.member === 'trialed' || this.props.user.member === 'membershiped') {
        $('.first.modal')
          .modal('show')
      } else {
        $('#membership-info').modal('show')
      }
    }
  }

  activeCode () {
    $('#activeCode')
      .modal('show')
  }

  changePassword () {
    if(process.env.BROWSER) {
      $('#doi-mat-khau')
        .modal('show')
    }
  }

}

export default Nav

let Data = {}
Data.baseUrl = ''
Data.user = {
  id: ''
}
let link = function (slug, name) {
  return <Link to={Data.baseUrl + '/course/' + slug}>{name}</Link>
}
