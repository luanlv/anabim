/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import Layout from '../../components/Layout';

const title = 'Admin Page';
const isAdmin = false;

export default {

  path: '/admin',
  children : [
    require('./dashboard').default,
    require('./library').default,

    require('./thongtinchung').default,
    require('./menuchinh').default,
    
    require('./danhmuc').default,
    require('./phanmem').default,
    require('./khoahoc').default,
    require('./video').default,
    require('./price').default,
    require('./donhang').default,
    require('./daduyet').default,
    require('./membership').default,
    require('./trialMember').default,
    require('./activeCode').default,
    require('./coupon').default,
    require('./trangchu').default,

    require('./category').default,

    require('./setting').default,
    require('./login').default,
    require('./news').default,
    require('./seo').default,
  ],
  async action({store, next, url}) {
    let user = store.getState().user
    if (user.username && url === '/admin/login') {
      return { redirect: '/admin' };
    }
    if (!(user.username === 'admin@anabim.com')) {
      return { redirect: '/' };
    }
    if (!user.username && url !== '/admin/login') {
      return { redirect: '/admin/login' };
    }
    const route = await next();
    // Provide default values for title, description etc.
    route.title = `Amdmin Page`;
    return route;
  },

};
