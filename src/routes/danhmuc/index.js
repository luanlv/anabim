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

  path: '/danhmuc/:slug',

  async action({store, fetch, path, params}) {

    store.dispatch(showLoading())

    let seoGraphql = 'seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description}'
    let information = '';
    let getAllNewsInCategory = 'allNewsByCategory:getAllPostsByCategory(slug:"' + params.slug + '"){category, slug, title, description, body, created_at}'
    let get5RecentPost = 'recentNews:get5RecentPost{category, slug, title, description, body, created_at}'
    let categoryPost = 'categoryPost:oneCategoryPost(slug:"'+ params.slug +'"){slug, title}'
    let categoryPosts = 'categoryPosts:allCategoryPost{slug, title}'

    let seo = {};
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{' + seoGraphql + information  + getAllNewsInCategory + get5RecentPost + categoryPost + categoryPosts + '}',
      }),
    });

    const { data } = await resp.json();
    seo = data.seo || {}
    if (!data ) throw new Error('Failed to load data.');
    store.dispatch(setData(data));

    store.dispatch(hideLoading());
    return require.ensure([], require => require('./DanhMuc').default, 'danhmuc')
      .then(DanhMuc => ({
        title: seo.title || store.getState().data.categoryPost.value.title,
        description: seo.description || "Tin tức từ Anabim Education",
        seo: seo,
        chunk: 'danhmuc',
        component: <Layout store={store.getState()} ><DanhMuc data={store.getState().data} /></Layout>,
      }));
  },

};
