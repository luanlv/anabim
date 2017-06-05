/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

const { listImage } = require('./models/image/queries').default;
const { users } = require('./models/user/queries').default;
const { setting } = require('./models/setting/queries').default;
const { seo, allSeo } = require('./models/seo/queries').default;
const { getPosts, getOnePost, getAllPosts, getPostRelative, get5RecentPost, getAllPostsByCategory} = require('./models/post/queries').default;

const { information } = require('./models/information/queries').default;

const { allActiveCode, oneActiveCode } = require('./models/activecode/queries').default;
const { allCategory, oneCategory } = require('./models/category/queries').default;
const { allComment, oneComment } = require('./models/comment/queries').default;
const { allCoupon, oneCoupon } = require('./models/coupon/queries').default;
const { allCourse, oneCourse } = require('./models/course/queries').default;
const { oneIndexCourse } = require('./models/indexcourse/queries').default;
const { onePrice } = require('./models/price/queries').default;
const { oneSession } = require('./models/session/queries').default;
const { oneSoftware, allSoftware } = require('./models/software/queries').default;
const { oneSubscribe, allSubscribe } = require('./models/subscribe/queries').default;
const { oneToken } = require('./models/token/queries').default;
const { oneVideo, allVideo } = require('./models/video/queries').default;


const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      setting,
      listImage,
      seo,
      allSeo,
      getPosts,
      getOnePost,
      getAllPostsByCategory,
      getAllPosts,
      getPostRelative,
      get5RecentPost,
      users,
      information,


      allActiveCode,
      oneActiveCode,

      allCategory,
      oneCategory,

      allComment,
      oneComment,

      allCoupon,
      oneCoupon,

      allCourse,
      oneCourse,

      oneIndexCourse,

      onePrice,

      oneSession,

      oneSoftware,
      allSoftware,

      oneSubscribe,
      allSubscribe,

      oneToken,

      oneVideo,
      allVideo
    },
  }),
});

export default schema;
