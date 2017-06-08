/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {

  path: '/',

  async action({store, fetch, path}) {

    store.dispatch(showLoading())

    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    let information = '';
    let indexcourse = 'indexcourse:oneIndexCourse{value}';
    let price = 'price:onePrice{one, three, six, twelve}';
    let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';

    let seo = {}
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + information + indexcourse + allSoftware + price + '}',
      }),
    });
    const { data } = await resp.json();

    seo = data.seo || {};
    if (!data ) throw new Error('Failed to load data.');

    store.dispatch(setData(data));

    store.dispatch(hideLoading());

    return {
      title: seo.title || "Trang chủ",
      description: seo.description,
      seo: seo,
      component: <Layout
        store={store.getState()}
      >
        <Home data={store.getState().data} user={store.getState().user} />
      </Layout>,
    };
  },

};
