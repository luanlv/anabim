let mongoose = require('mongoose')

var schema = new mongoose.Schema({
    id: {type: String},
    common: {
      logo1: {type: String, default: '/assets/images/logo.png'},
      logo2: {type: String, default: '/assets/images/logo-footer.png'},

      facebook: {type: String, default: 'https://www.facebook.com/ProteusThemes'},
      google: {type: String, default: 'https://www.youtube.com/user/ProteusNetCompany'},

      footer1: {type: String, default: 'But i must explain to you how all this mistaken idea pleasure and praising pain was born and i will give you. But i explain to you how all this mistaken idea.'},
      footer2: {type: String, default: 'But i must explain to you how all this mistaken idea pleasure and praising pain was born and i will give you. But i explain to you how all this mistaken idea.'},

      title1: {type: String, default: 'Call Us Anytime'},
      body1: {type: String, default: '1-888-123-4567'},
      title2: {type: String, default: 'Opening Time'},
      body2: {type: String, default: '08:00 - 18:00'},
      title3: {type: String, default: 'Email Us'},
      body3: {type: String, default: 'info@cargopress.io'},

      menu: {
        type: Object,
        default: {
          menu1: 'Home',
          path1: '/',
          menu2: 'Services',
          path2: '/service',
          menu3: 'About',
          path3: '/about',
          menu4: 'Track & Trace',
          path4: '/tracking',
          menu5: 'News',
          path5: '/news',
          menu6: 'Contact',
          path6: '/contact'
        }
      }

    },

    contact: {
      title: {type: String, default: 'CONTACT US'},
      description: {type: String, default: 'We are waiting you to get in touch with us'},
      header: {type: String, default: 'SEND US AN EMAIL, OR THREE'},
      body: {type: String, default: 'Nội Dung'},
      widget: {type: String, default: `<div> <div class="widget_black-studio-tinymce"> <div class="featured-widget"> <h3 class="widget-title"> <span class="widget-title__inline">OLD FASHIONED CONTACT</span> </h3> <p> <strong>CargoPress, Itd.</strong><br /> 227 Marion Street<br /> Columbia, SC 29201 </p> <p> 1-888-123-4567<br /> 1-888-123-4568<br /> <a href="mailto:info@cargopress.com">info@cargopress.com</a> </p> </div> </div> <div class="widget_pw_opening_time"> <div class="featured-widget"> <h3> <span class="icon icons-ornament-left" /> OPENING TIME <span class="icon icons-ornament-right" /> </h3> <dl class="week-day "> <dt>Monday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day light-bg"> <dt>Tuesday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day "> <dt>Wednesday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day light-bg"> <dt>Thursday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day "> <dt>Friday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day light-bg"> <dt>Saturday</dt> <dd>8:00 - 16:00</dd> </dl> <dl class="week-day closed today"> <dt>Sunday</dt> <dd>CLOSED</dd> </dl> </div> </div> </div>`}
    },
  
    about: {
      title: {type: String, default: 'About Us'},
      description: {type: String, default: 'Something about us from a little bit of different perspective'},
      img1: {type: String, default: '/assets/images/placeholders/848x480.png'},
      img2: {type: String, default: '/assets/images/placeholders/848x480.png'},
      body: {type: String, default: 'Nội Dung'},
    },
    tracking: {
      title: {type: String, default: 'TRACKER'},
      description: {type: String, default: 'Know exactly where your cargo/freight is at all times'},
      body: {type: String, default: 'Nội Dung'},
    },

    allService: {
      title: {type: String, default: 'SERVICES'},
      description: {type: String, default: 'What we do and what can you expect from us'},
    },

    services: {
      groundtransport: {
        type: Object,
        default: {
          title: 'Ground Transport',
          slug: 'ground-transport',
          img1: '/assets/images/placeholders/848x480.png',
          img2: '/assets/images/placeholders/848x480.png',
          body: 'Nội Dung Ground Transport',
          description: 'Ground transport and freight forwarding services, along with other ancillary services, helps us to provide tailor made logistic solutions to our clients, which we design as per their requirements and business ecosystem to help cut their cost, '
        }
      },
      cargo: {
        type: Object,
        default: {
          title: 'Cargo',
          slug: 'cargo',
          img1: '/assets/images/placeholders/848x480.png',
          img2: '/assets/images/placeholders/848x480.png',
          body: 'Nội Dung cargo',
          description: 'Team of cargo experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your'
        }
      },
      logisticservice: {
        type: Object,
        default: {
          title: 'Logistic Service',
          slug: 'logistic-service',
          img1: '/assets/images/placeholders/848x480.png',
          img2: '/assets/images/placeholders/848x480.png',
          body: 'Nội Dung Logistic Service',
          description: 'We provide logistic services in the nation, whether it is freight transportation, supply chain solutions, warehousing and distribution, customer resource area services, customs, security and insurance, temperature controlled logistics, industry '
        }
      },
      trackingservice: {
        type: Object,
        default: {
          title: 'Tracking Service',
          slug: 'tracking-service',
          img1: '/assets/images/placeholders/848x480.png',
          img2: '/assets/images/placeholders/848x480.png',
          body: 'Nội Dung Tracking Service',
          description: 'Our trucking service is based on the principle of providing our clients with the flexibility and reliability, to move legal load across town, or across the country, whenever they want. Our in-house team of experienced'
        }
      },
      warehousing: {
        type: Object,
        default: {
          title: 'Warehousing',
          slug: 'warehousing',
          img1: '/assets/images/placeholders/848x480.png',
          img2: '/assets/images/placeholders/848x480.png',
          body: 'Nội Dung Warehousing',
          description: 'Our warehousing and distribution services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic'
        }
      },
      storage: {
        type: Object,
        default: {
          title: 'Storage',
          slug: 'storage',
          img1: '/assets/images/placeholders/848x480.png',
          img2: '/assets/images/placeholders/848x480.png',
          body: 'Nội Dung Storage',
          description: 'We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts'
        }
      },
    },

    home: {
      slideTitle1: {type: String, default: 'GROUND OR AIR, THERE IS NO STOPPING FOR US'},
      slideBody1: {type: String, default: 'Starting from loading to unloading and maintaining the highest standards in terms of safety while in transit, we take nothing to chance'},
      slideImg1: {type: String, default: '/assets/images/placeholders/1920x600.png'},
      slideTitle2: {type: String, default: 'UNBEATABLE TRUCKING AND TRANSPORT SERVICES'},
      slideBody2: {type: String, default: 'Starting from loading to unloading and maintaining the highest standards in terms of safety while in transit, we take nothing to chance'},
      slideImg2: {type: String, default: '/assets/images/placeholders/1920x600.png'},
      aboutTitle: {type: String, default: 'GIỚI THIỆU'},
      aboutBody: {type: String, default: 'Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Our own warehouses, as well as our partner’s warehouses are located at strategic locations to ensure that there is no additional cost.'},
      about1: {
        type: Object,
        default: {
          title: 'Cargo',
          path: '/service/cargo',
          img: '/assets/images/placeholders/848x480.png',
          body: 'Team of cargo experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your'
        }
      },
      about2: {
        type: Object,
        default: {
          title: 'LOGISTIC SERVICE',
          path: '/service/logistic-service',
          img: '/assets/images/placeholders/848x480.png',
          body: 'We provide logistic services in the nation, whether it is freight transportation, supply chain solutions, warehousing and distribution, customer resource area services, customs, security and insurance, temperature controlled logistics, industry . We would study your requirements and provide you with a quote that would not only suit your'
        }
      },
      about3: {
        type: Object,
        default: {
          title: 'STORAGE',
          path: '/service/storage',
          img: '/assets/images/placeholders/848x480.png',
          body: 'We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts'
        }
      },
      service1: {
        type: Object,
        default: {
          title: 'STORAGE',
          path: '/service/storage',
          description: 'We can package and store your things.',
        }
      },
      service2: {
        type: Object,
        default: {
          title: 'Cargo',
          path: '/service/cargo',
          description: 'Let us transport your things from point A to point B fast and securely. .',
        }
      },
      service3: {
        type: Object,
        default: {
          title: 'WORLDWIDE TRANSPORT',
          path: '/service/ground-transport',
          description: 'We can transport your things anywhere in the world. .',
        }
      },
      service4: {
        type: Object,
        default: {
          title: 'WAREHOUSING',
          path: '/service/warehousing',
          description: 'We have top notch security and loads of space. Store your stuff at our warehouse..',
        }
      },
      service5: {
        type: Object,
        default: {
          title: 'DOOR-TO-DOOR DELIVERY',
          path: '/service/storage',
          description: 'Do you need something delivered? We are what you are looking for! .',
        }
      },
      service6: {
        type: Object,
        default: {
          title: 'GROUND TRANSPORT',
          path: '/service/storage',
          description: 'Transport your things with our super moving vans..',
        }
      },

      coreValue: {
        type: Object,
        default: {
          title: 'OUR CORE VALUES',
          author: 'WRITTEN BY CARGOPRESS CEO',
          body: 'Core values are the fundamental beliefs of a person or organization. The core values are the guiding principles that t dictate behavior and action. Core values can help people to know what is right from wrong, they can help companies to determine if they are on the right path and fulfilling their business goals; and they create an unwavering and unchanging guide. There are many different types of core values and many different examples of core values depending upon the context.',
        }
      },
      aboutUs: {
        type: Object,
        default: {
          title: 'ABOUT US',
          body: `<p> But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. </p> <p> But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. </p>`,
        }
      },
      form: {
        type: Object,
        default: {
          header: 'REQUEST A QUICK QUOTE',
          body: 'But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count.'
        }
      },
      testimonials: {
        type: Object,
        default: {
          name1: 'Frank Martin',
          job1: 'Transporter',
          testimonial1: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.',
          name2: 'Martin Frank',
          job2: 'Transporter',
          testimonial2: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.',
          name3: 'Martin Frank',
          job3: 'Transporter',
          testimonial3: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.',
          name4: 'Martin Frank',
          job4: 'Transporter',
          testimonial4: 'But I must explain to you how all this mistakn idea of denouncing pleasure and praising pain was born and I will give you a complete of the system, and expound the actual teaings of the great explorer idea.',
        }
      },
      partners: {
        type: Object,
        default: {
          img1: '/assets/images/placeholders/208x98.png',
          url1: '/',
          img2: '/assets/images/placeholders/208x98.png',
          url2: '/',
          img3: '/assets/images/placeholders/208x98.png',
          url3: '/',
          img4: '/assets/images/placeholders/208x98.png',
          url4: '/',
          img5: '/assets/images/placeholders/208x98.png',
          url5: '/',
          img6: '/assets/images/placeholders/208x98.png',
          url6: '/'
        }
      }
    },
  },
  {
    collection : 'information'
  }
);

let model = mongoose.model('Information', schema);

module.exports = model;


module.exports.getInformation = () => {
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
