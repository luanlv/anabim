let mongoose = require('mongoose')

var schema = new mongoose.Schema({
  
  id: {type: String},
  
  menu: {type: [], default: [{title: 'Blog', url: '/blog'}]},
  //
  footer: {
    cot1: {type: [], default: [
      {title: 'Khoác học offline', url: '/'},
      {title: 'Hướng dẫn thanh toán khóa học', url: '/'},
      {title: 'Về chúng tôi', url: '/'},
      {title: 'Liên hệ', url: '/'},
    ]},
    cot2: {type: String, default: `<div> <span>ANABIM CO,.LTD <br />36B ngõ 554 đường Trường Chinh, Đống Đa, Hà Nội.</span> <div>0975 622 789</div> <div>revithanoi@gmail.com</div> <div> www.anabim.com</div> </div>`},
    cot3: {type: String, default: `<div> <div> Mr. Thùy - Kiến trúc <br /> 01669053063 </div> <div> Mr. Chiến - MEP <br /> 0979 269 448 </div> <div> Mr. Huy - Kết cấu <br /> 0978 542 680 </div> <div> Mr. Vượng - Doanh nghiệp <br /> 0975 622 789 </div> </div>`},
  },
  
  nav: {
    type: {}, default: {
      nav1left: [
        {title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit'},
        {title: 'Revit Arrchitecture Nền Tảng', url: '/course/khoa-hoc-revit-architecture-nen-tang'},
        {title: 'Revit Arrchitecture Nâng Cao', url: '/course/khoa-hoc-revit-architecture-nang-cao'},
        {title: 'Revit Conceptual Mass', url: '/course/khoa-hoc-conceptual-massing'},
        {title: 'Revit Family Cơ Bản', url: '/course/khoa-hoc-revit-family-co-ban'},
        {title: 'Revit Family Nâng Cao', url: '/course/khoa-hoc-revit-family-nang-cao'},
        {title: 'Revit Family Adaptive Cơ Bản', url: '/course/khoa-hoc-revit-family-addaptive-co-ban'},
        {title: 'Revit Family Adaptive Nâng Cao', url: '/course/khoa-hoc-revit-family-adaptive-nang-cao'},
      ],
      nav1right: [
        {title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban'},
        {title: 'Dynamo Nâng Cao', url: '/course/khoa-hoc-dynamo-nang-cao'},
        {title: 'Autodesk Formit', url: '/course/khoa-hoc-formit-360'},
        {title: 'Sketchup Cơ Bản', url: '/course/sketchup-co-ban'},
        {title: 'Sketchup Nâng Cao', url: '/course/khoa-hoc-sketchup-nang-cao'},
        {title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban'},
        {title: 'Thiết Kế Gạch Thông Gió', url: '/course/thiet-ke-gach-thong-gio-revit'},
      ],
      
      nav2left: [
        {title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit'},
        {title: 'Khóa học Revit MEP cơ bản', url: '/course/khoa-hoc-revit-mep-co-ban'},
        {title: 'Khóa Học Revit MEP Nâng Cao', url: '/course/khoa-hoc-revit-mep-nang-cao'},
        {title: 'Family MEP', url: '/course/khoa-hoc-family-mep-phan-1'},
      ],
      
      nav2right: [
        {title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban'},
        {title: 'Khóa học Dynamo nâng cao', url: '/course/khoa-hoc-dynamo-nang-cao'},
        {title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban'},
      ],
      nav3left: [
        {title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban'},
        {title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit'},
        {title: 'Revit Structure Cơ Bản', url: '/course/khoa-hoc-revit-structure-co-ban'},
        {title: 'Robot Structural Cơ Bản', url: '/course/khoa-hoc-robot-structural-co-ban'},
        {title: 'Revit Structure Concrete', url: '/course/Revit-Structure-Concrete'},
      ],
      nav3right: [
        {title: 'Revit Structure Steel', url: '/course/khoa-hoc-revit-structure-steel'},
        {title: 'Family Revit Structure', url: '/course/khoa-hoc-revit-family-structure'},
        {title: 'Autodesk Dynamo 2016', url: 'khoa-hoc-dynamo-co-ban'},
        {title: 'Khóa học Dynamo nâng cao', url: 'khoa-hoc-dynamo-nang-cao'},
      ],
      nav4left: [
        {title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban'},
        {title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit'},
        {title: 'Autodesk Ecotec', url: '/course/khoa-hoc-ecotec-co-ban'},
      ],
      nav4right: [
        {title: 'Autodesk Vasari', url: '/course/khoa-hoc-vasari'},
        {title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban'},
        {title: 'Khóa học Dynamo nâng cao', url: '/course/khoa-hoc-dynamo-nang-cao'},
      ],
      nav5left: [
        {title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban'},
        {title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit'},
      ],
      nav5right: [
        {title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban'},
        {title: 'Dynamo Nâng Cao', url: '/course/khoa-hoc-dynamo-nang-cao'},
      ],
      nav6left: [
        {title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban'},
        {title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit'},
        {title: 'Khóa Học Infrawork 360', url: '/course/khoa-hoc-infrawork-360'},
      ],
      nav6right: [
      ],
      nav7left: [
        {title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban'},
        {title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit'},
        {title: 'Dynamo Nâng Cao', url: '/course/khoa-hoc-dynamo-nang-cao'},
        {title: 'Khóa Học BIM Glue', url: '/course/khoa-hoc-bim-glue'},
        {title: 'Khóa Học Naviswork Phần 2', url: '/course/khoa-hoc-naviswork-phan-2'},
      ],
      nav7right: [
        {title: 'Khóa Học Naviswork 2016', url: '/course/khoa-hoc-naviswork-co-ban'},
      ]
    }
  }
  
  },

  {
    collection : 'information'
  }
);

let model = mongoose.model('Information', schema);

module.exports = model;


module.exports.getInformation = () => {
  console.log(" get information !!!! ");
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
