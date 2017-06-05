/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const title = 'Danh muc';

export default {

  path: '/category',

  async action({query}) {
    if(!query.v){
      return { redirect: '/admin/category?v=list' };
    }
    let component = function (Admin) {

      if (query.v === 'list') {

        return <Admin.App
          name={title}
        >
          <Admin.ListCategories title={title}/>
        </Admin.App>


      } else if (query.v === 'add') {
        return <Admin.App
          name={title}
        >
          <Admin.EditCategory mode="add" isEdit={false}/>
        </Admin.App>
      } else if (query.slug && query.v === 'edit') {
        console.log(query)
        return <Admin.App
          name={title}
        >
          <Admin.EditCategory mode="edit" isEdit={true} slug={query.slug}/>
        </Admin.App>
      }

    }

    return require.ensure([], require => require('../AdminRequire').default, 'admin')
      .then( Admin => ({
        title,
        chunk: 'admin',
        disableSSR: true,
        component: component(Admin),
      }));


  },
};
