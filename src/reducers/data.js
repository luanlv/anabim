import * as type from '../constants';

export default function data(state = {}, action) {
  switch (action.type) {
    case type.SET_DATA:
      const data = action.payload.value
      return {
        ...state,
        information: {
          ...state.information,
          value: data.information || state.information.value
        },
        news: {
          ...state.news,
          value: data.news || state.news.value
        },
        allNews: {
          ...state.allNews,
          value: data.allNews || state.allNews.value
        },
        allNewsByCategory: {
          ...state.allNewsByCategory,
          value: data.allNewsByCategory || state.allNewsByCategory.value
        },
        recentNews: {
          ...state.recentNews,
          value: data.recentNews || state.recentNews.value
        },
        categories: {
          ...state.categories,
          value: data.categories || state.categories.value
        },
        category: {
          ...state.category,
          value: data.category || state.category.value
        },
        categoryPosts: {
          ...state.categoryPosts,
          value: data.categoryPosts || state.categoryPosts.value
        },
        categoryPost: {
          ...state.categoryPost,
          value: data.categoryPost || state.categoryPost.value
        },

        indexcourse: {
          ...state.indexcourse,
          value: data.indexcourse || state.indexcourse.value
        },

        allSoftware: {
          ...state.allSoftware,
          value: data.allSoftware || state.allSoftware.value
        },

        price: {
          ...state.price,
          value: data.price || state.price.value
        },

        categoryInfo: {
          ...state.categoryInfo,
          value: data.categoryInfo || state.categoryInfo.value
        },
        courseInCategory: {
          ...state.courseInCategory,
          value: data.courseInCategory || state.courseInCategory.value
        },
        course: {
          ...state.course,
          value: data.course || state.course.value
        },
        videos: {
          ...state.videos,
          value: data.videos || state.videos.value
        },

        softwareInfo: {
          ...state.softwareInfo,
          value: data.softwareInfo || state.softwareInfo.value
        },

        courseInSoftware: {
          ...state.courseInSoftware,
          value: data.courseInSoftware || state.courseInSoftware.value
        },
      }
    default:
      return state;
  }
}
