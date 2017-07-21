var api_key = 'key-b27916a12645e658b1de91b9620f85fd';
var domain = 'mg.vnguy.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


const from = 'Anabim Education <admin@anabim.com>'

const RegisterMail = function(email, name) {
  return {
    from: from,
    to: email,
    subject: `Chào mừng ${name} đến với ANABIM EDUCATION!`,
    text: `Chúc mừng bạn đã là thành viên của http://edu.anabim.com.
Chúng tôi hứa sẽ không ngừng nâng cao chất lượng dịch vụ của mình để giúp đỡ bạn nhiều nhất có thể.`
  }
}

const ActiveMail = function(email, name, activeUrl) {
  return {
    from: from,
    to: email,
    subject: `Kích hoạt tài khoản ${email} trên ANABIM EDUCATION!`,
    text: `Cám ơn ${name} đã đăng ký tài khoản trên http://edu.anabim.com.
Để kích hoạt tài khoản bạn hay click vào link sau: ${activeUrl} `
  }
}

const NewOrderMail = function(email, name, phone) {
  return {
    from: from,
    to: email,
    subject: `Có đơn hàng từ ${name}, SĐT: ${phone}`,
    text: `Có đơn hàng từ ${name}, SĐT: ${phone}`
  }
}

const TuVan = function(email, data) {
  return {
    from: from,
    to: email,
    subject: `Đăng ký tư vấn từ ${data.name}, SĐT: ${data.sdt}, Email: ${data.email}`,
    text: `Nội dung: ${data.noidung}`
  }
}


let Mailer = {}

Mailer.sendRegister = function (email, name) {
  mailgun.messages().send(RegisterMail(email, name), function (error, body) {
    console.log(body);
  });
}

Mailer.sendActiveMail = function (email, name, activeUrl) {
  mailgun.messages().send(ActiveMail(email, name, activeUrl), function (error, body) {
    console.log(body);
  });
}

Mailer.sendNewOrderMail = function (email, name, phone) {
  mailgun.messages().send(NewOrderMail(email, name, phone), function (error, body) {
    console.log(body);
  });
}

Mailer.sendToAdmin = function(email, data) {
  mailgun.messages().send(TuVan(email, data), function (error, body) {
    // console.log(body);
  });
}

export default Mailer
