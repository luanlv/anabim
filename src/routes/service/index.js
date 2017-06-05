/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const title = 'Trang dịch vụ'

export default {

  path: '/service/:slug',

  async action({store, fetch, path, params}) {
    store.dispatch(showLoading())
    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    let information = 'information{id, services, allService, common}'

    let seo = {}
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + ','+ information +'}',
      }),
    });
    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');
    store.dispatch(setData(data))
    store.dispatch(hideLoading())
    return require.ensure([], require => require('./Service').default, 'service')
      .then(Service => ({
        title,
        chunk: 'service',
        component: <Layout data={store.getState().data} ><Service data={store.getState().data} slug={params.slug} /></Layout>,
      }));
  },

};
