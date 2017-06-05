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
        }
      }
    default:
      return state;
  }
}
