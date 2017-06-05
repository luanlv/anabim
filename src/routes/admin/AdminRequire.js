const Admin = {
  App: require('./Components/App').default,
  Dashboard: require('./dashboard/Admin').default,
  Library: require('./library/Library').default,
  Setting: require('./setting/Setting').default,
  Home: require('./trangchu/Home').default,
  Contact: require('./lienhe/Contact').default,
  About: require('./gioithieu/About').default,
  Tracking: require('./tracking/Tracking').default,
  Common: require('./thongtinchung/Common').default,
  AllService: require('./cacdichvu/AllService').default,
  Editor: require('./editor/Editor').default,
  Login: require('./login/Login').default,

  ListNews: require('./news/ListNews').default,
  EditNews: require('./news/EditNews').default,

  EditCategory: require('./category/EditCategory').default,
  ListCategories: require('./category/ListCategories').default,

  Seo: require('./seo/View.js').default
}

export default Admin
