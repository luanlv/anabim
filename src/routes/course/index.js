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

  path: '/course/:slug',

  async action({store, fetch, path, params}) {

    store.dispatch(showLoading())

    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    let information = 'information{menu, footer, nav}';
    let indexcourse = 'indexcourse:oneIndexCourse{value}';
    let price = 'price:onePrice{one, three, six, twelve}';
    let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';
    let course = 'course:oneCourse(slug: "' + params.slug + '"){name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
    let videos = 'videos:videoInCourse(slug: "' + params.slug + '"){courseId, section, name, link, url, kind, source, time}';
    let seo = {};
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + information + indexcourse + allSoftware + price + course + videos + '}',
      }),
    });

    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');

    store.dispatch(setData(data));

    store.dispatch(hideLoading());
    return require.ensure([], require => require('./Course').default, 'course')
      .then(Course => ({
        title: seo.title || store.getState().data.course.value.name,
        description: seo.description ,
        seo: seo,
        chunk: 'course',
        component: <Layout store={store.getState()} ><Course data={store.getState().data} user={store.getState().user} params={params} /></Layout>,
      }));
  },

};
