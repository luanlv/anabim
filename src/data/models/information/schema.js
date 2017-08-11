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
