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

const title = 'Trang giới thiệu'

export default {

  path: '/software/:slug',

  async action({store, fetch, path, params}) {

    store.dispatch(showLoading())

    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    let information = 'information{menu, footer}';
    let indexcourse = 'indexcourse:oneIndexCourse{value}';
    let price = 'price:onePrice{one, three, six, twelve}';
    let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';
    let softwareInfo = 'softwareInfo:oneSoftware(slug: "' + params.slug + '"){name, coverUrl, slug}';
    let courseInSoftware = 'courseInSoftware:courseInSoftware(slug: "' + params.slug + '"){name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, created_at}'

    let seo = {};
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + information + price + softwareInfo + courseInSoftware + '}',
      }),
    });

    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');
    store.dispatch(setData(data));

    store.dispatch(hideLoading());

    return require.ensure([], require => require('./Software').default, 'software')
      .then(Software => ({
        title: seo.title || "Phần mềm" +  store.getState().data.softwareInfo.value.name,
        description: seo.description,
        seo: seo,
        chunk: 'software',
        component: <Layout store={store.getState()}><Software data={store.getState().data} user={store.getState().user} /></Layout>,
      }));
  },

};
