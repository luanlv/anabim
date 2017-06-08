const Admin = {
  App: require('./Components/App').default,
  Dashboard: require('./dashboard/Admin').default,
  Library: require('./library/Library').default,
  Setting: require('./setting/Setting').default,

  DanhMuc: require('./danhmuc/DanhMuc').default,
  SuaDanhMuc: require('./danhmuc/SuaDanhMuc').default,

  PhanMem: require('./phanmem/PhanMem').default,
  SuaPhanMem: require('./phanmem/SuaPhanMem').default,

  KhoaHoc: require('./khoahoc/KhoaHoc').default,
  SuaKhoaHoc: require('./khoahoc/SuaKhoaHoc').default,

  Video: require('./video/Video').default,
  SuaVideo: require('./video/SuaVideo').default,

  Price: require('./price/Price').default,

  DonHang: require('./donhang/DonHang').default,

  DaDuyet: require('./daduyet/DaDuyet').default,

  Membership: require('./membership/Membership').default,

  ActiveCode: require('./activeCode/ActiveCode').default,

  Coupon: require('./coupon/Coupon').default,

  Trial: require('./trialMember/Trial').default,

  // Contact: require('./lienhe/Contact').default,
  // About: require('./gioithieu/About').default,
  // Tracking: require('./tracking/Tracking').default,
  // Common: require('./thongtinchung/Common').default,
  // AllService: require('./cacdichvu/AllService').default,
  // Editor: require('./editor/Editor').default,
  Login: require('./login/Login').default,

  ListNews: require('./news/ListNews').default,
  EditNews: require('./news/EditNews').default,

  EditCategory: require('./category/EditCategory').default,
  ListCategories: require('./category/ListCategories').default,

  Seo: require('./seo/View.js').default
}

export default Admin
