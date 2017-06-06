/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import {Nav, Footer, SignIn, EmailConfirm, SignUp, ActiveCode, MemberShip, Password} from './Partial'
import LoadingBar from 'react-redux-loading-bar';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  static contextTypes = { store: PropTypes.object.isRequired };

  constructor (props) {
    super(props)
    this.state = {
      membershipInfo: {}
    }

    this.redraw = () => {
      console.log('redraw !!')
      this.setState({})
    }
  }

  componentDidMount () {
    var this2 = this
    $('.dang-nhap').click(function () {
      $('#dang-nhap')
        .modal('show')
    })

    $('.dang-ky').click(function () {
      $('#dang-ky')
        .modal('show')
    })

    $('.coupled.modal')
      .modal({
        allowMultiple: false
      })
    $('.second.modal')
      .modal('attach events', '.first.modal .button')

    if (this.props.store.user.username) {
      $('#membership-info')
        .modal({
          onShow: function () {
            $.ajax({
              type: 'GET',
              url: '/api/membership',
              dataType: 'text'
            }).done(function (data) {
              this2.setState({
                membershipInfo: JSON.parse(data)
              })
            })
              .fail(function (error) {
                console.log(error)
              })
          }
        })


    }

    $('.ui.checkbox').checkbox()

    // if (this.props.params.email !== undefined) {
    //   $('#email').val(this.props.params.email)
    // }
    // if (this.props.params.name !== undefined) {
    //   $('#name').val(this.props.params.name)
    // }
    //
    // if (this.props.params.exist !== undefined) {
    //   $('#dang-ky').modal('show')
    // }
    // if (this.props.params.confirmEmail !== undefined) {
    //   $('#email-comfirm').modal('show')
    // }
  }

  render() {
    return (
      <div className="boxed-container">
        <LoadingBar showFastActions  maxProgress={80} progressIncrease={100} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />

        <Nav user={this.context.store.getState().user} />

        {this.props.children}

        <Footer />
        <SignIn />
        <EmailConfirm />
        <SignUp  />
        <ActiveCode  />
        <MemberShip price={this.context.store.getState().data.price.value}  membershipInfo={this.state.membershipInfo} userInfo={this.context.store.getState().user} redraw={() => this.redraw()}/>
        <Password />

      </div>
    );
  }
}

export default Layout
