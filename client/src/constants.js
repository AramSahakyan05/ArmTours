import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
// Banner Images
import banner1 from './assets/banner/banner1.jpg';
import banner2 from './assets/banner/banner2.jpg';
import banner3 from './assets/banner/banner3.jpg';
import banner4 from './assets/banner/banner4.jpg';


export const ROUTES = {
  overview : "/armtours",
  home: '/armtours/home',
  signup: "/armtours/signup",
  login: '/armtours/login',
  profile: '/armtours/profile'
}
export const bannerImages = [
  banner1, banner2, banner3, banner4
]
export const langs = [
  { id: 1, title: "English", type: "en" },
  { id: 2, title: "Հայերեն", type: "am" },
  { id: 3, title: "Русский", type: "ru" },
];

export const config = {
  navbar: [
    {
      id: 1,
      title: {
        am: 'Տուն',
        en: 'Home',
        ru: 'Дом'
      },
    },
    {
      id: 2,
      title: {
        am: 'Տուրեր',
        en: 'Tours',
        ru: 'Туры'
      },
    },
    {
      id: 3,
      title: {
        am: 'Ուղղություն',
        en: 'Destinations',
        ru: 'Направления'
      },
    },
    {
      id: 4,
      title: {
        am: 'Մեր մասին',
        en: 'About us',
        ru: 'О нас'
      },
    },
  ],
  auth_buttons: [
    {
        id: 1,
        name: {
            am: 'Մուտք',
            en: 'Login',
            ru: 'Вход'
        },
        route: 'login'
    },
    {
        id: 2,
        name: {
            am: 'Գրանցում',
            en: 'Register',
            ru: 'Регистрация'
        },
        route: 'signup'
    }
  ],
  overview_first_section: {
    title : {
      am: "Բացահայտեք Հայաստանը",
      en: "Discover Armenia",
      ru: "Откройте для себя Армению"
    },
    fbutton : {
      am: "Գտեք ձեր արկածը",
      en: "Find Your Adventure",
      ru: "Найдите свое приключение"
    },
    sbutton : {
      am: "Իմացեք ավելին",
      en: "Learn More",
      ru: "Узнать больше"
    },
  },
  feature : {
    title : {
      am: "Հատկություններ",
      en: "Features",
      ru: "Функции"
    },
    heading : {
      am: "Բացահայտեք Հայաստանի զբոսաշրջային գործունեությունը",
      en: "Discover Armenia's Touring Activities",
      ru: "Откройте для себя туристическую деятельность Армении"
    },
    features : [
      {
        title : {
          am: "Զբոսաշրջության համապարփակ տեղեկատվություն",
          en: "Comprehensive Tour Information",
          ru: "Полная информация о туре"
        },
        description : {
          am: "Ստացեք մանրամասն տեղեկատվություն Հայաստանի բոլոր տուրիստական ​​գործունեության մասին",
          en: "Get detailed information about all touring activities in Armenia",
          ru: "Получите подробную информацию обо всех гастрольных мероприятиях в Армении."
        }
      },
      {
        title : {
          am: "Ինտերակտիվ քարտեզներ",
          en: "Interactive Maps",
          ru: "Интерактивные карты"
        },
        description : {
          am: "Բացահայտեք տեսարժան վայրերը և պլանավորեք ձեր երթուղին ինտերակտիվ քարտեզներով",
          en: "Explore the attractions and plan your itinerary with interactive maps",
          ru: "Исследуйте достопримечательности и спланируйте свой маршрут с помощью интерактивных карт."
        }
      },
      {
        title : {
          am: "Օգտագործողների ակնարկներ և գնահատականներ",
          en: "User Reviews and Ratings",
          ru: "Отзывы и рейтинги пользователей"
        },
        description : {
          am: "Կարդացեք օգտատերերի վավերական ակնարկներն ու վարկանիշները՝ տեղեկացված որոշումներ կայացնելու համար",
          en: "Read authentic user reviews and ratings to make informed decisions",
          ru: "Читайте достоверные отзывы и рейтинги пользователей, чтобы принимать обоснованные решения."
        }
      },
      {
        title : {
          am: "Ամրագրման հարմարավետություն",
          en: "Booking Convenience",
          ru: "Удобство бронирования"
        },
        description : {
          am: "Հեշտությամբ ամրագրեք ձեր նախընտրած շրջագայությունները և գործունեությունը առցանց",
          en: "Easily book your preferred tours and activities online",
          ru: "Легко бронируйте предпочитаемые туры и мероприятия онлайн"
        }
      }
    ]
  },
  "plan" : {
    "title" : {
      am: "ԳԻՆ",
      en: "PRICING",
      ru: "ЦЕНА"
    },
    "heading" : {
      am: "Ընտրեք ձեր պլանը",
      en: "Choose Your Plan",
      ru: "Выберите свой план"
    },
    "plans" : [
      { 
        id: 1,
        "type" : "FREE",
        "subtitle" : {
          am: "Բացահայտեք հիմնական տուրիստական ​​գործունեությունը Հայաստանում",
          en: "Explore basic touring activities in Armenia",
          ru: "Изучите основные туристические мероприятия в Армении."
        },
        "currency" : "$",
        "price" : "0",
        "term" : {
          am: "ամիս",
          en: "month",
          ru: "месяц"
        },
        "description" : [
            {
              id: 1,
              "title" : {
                am: "Սահմանափակ քանակությամբ զբոսաշրջային գործունեության հասանելիություն",
                en: "Access to a limited number of touring activities",
                ru: "Доступ к ограниченному количеству туристических мероприятий"
              }
            },
            {
              id: 2,
              "title" : {
                am: "Հիմնական տեղեկություններ յուրաքանչյուր գործունեության մասին",
                en: "Basic information about each activity",
                ru: "Основная информация о каждом виде деятельности"
              }
            },
            {
              id: 3,
              "title" : {
                am: "Ընդլայնված գործառույթներ չկան",
                en: "No advanced features",
                ru: "Нет расширенных функций"
              }
            }
        ],
        "button" : {
          am: "Շարունակեք անվճար",
          en: "Continue with Free",
          ru: "Продолжить с бесплатным"
        }
      },
      {
        id: 2,
        "type" : "BASIC",
        "subtitle" : {
          am: "Բացեք ավելի շատ զբոսաշրջային գործողություններ և առանձնահատկություններ",
          en: "Unlock more touring activities and features",
          ru: "Разблокируйте больше туристических мероприятий и функций"
        },
        "currency" : "$",
        "price" : "15",
        "term" : {
          am: "ամիս",
          en: "month",
          ru: "месяц"
        },
        "description" : [
          {
            id: 1,
            "title" : {
              am: "FREE պլանի բոլոր հատկանիշները",
              en: "All features of FREE plan",
              ru: "Все возможности БЕСПЛАТНОГО плана"
            }
          },
          {
            id: 2,
            "title" : {
              am: "Զբոսաշրջային գործունեության ավելի լայն շրջանակի հասանելիություն",
              en: "Access to a wider range of touring activities",
              ru: "Доступ к более широкому спектру туристических мероприятий"
            }
          },
          {
            id: 3,
            "title" : {
              am: "Մանրամասն տեղեկություններ յուրաքանչյուր գործունեության մասին",
              en: "Detailed information about each activity",
              ru: "Подробная информация о каждом мероприятии"
            }
          },
          {
            id: 4,
            "title" : {
              am: "Սիրված գործունեությունը պահպանելու ունակություն",
              en: "Ability to save favorite activities",
              ru: "Возможность сохранять любимые занятия"
            }
          },
          {
            id: 5,
            "title" : {
              am: "Հիմնական հաճախորդների աջակցություն",
              en: "Basic customer support",
              ru: "Базовая поддержка клиентов"
            }
          }
        ],
        "button" : {
          am: "Փորձեք BASIC պլանը",
          en: "Try the Basic plan",
          ru: "Попробуйте план BASIC"
        }
      },
      {
        id: 3,
        "type" : "PRO",
        "subtitle" : {
          am: "Ստացեք շրջագայության լավագույն փորձը Հայաստանում",
          en: "Get the ultimate touring experience in Armenia",
          ru: "Получите незабываемые впечатления от тура по Армении"
        },
        "currency" : "$",
        "price" : "30",
        "term" : {
          am: "ամիս",
          en: "month",
          ru: "месяц"
        },
        "description" : [
          {
            id: 1,
            "title" : {
              am: "BASIC պլանի բոլոր հատկանիշները",
              en: "All features of BASIC plan",
              ru: "Все возможности плана BASIC"
            }
          },
          {
            id: 2,
            "title" : {
              am: "Մատչելիություն բոլոր զբոսաշրջային գործունեությանը",
              en: "Access to all touring activities available",
              ru: "Доступ ко всем доступным туристическим мероприятиям"
            }
          },
          {
            id: 3,
            "title" : {
              am: "Մանրամասն տեղեկություններ լուսանկարներով և ակնարկներով յուրաքանչյուր գործունեության համար",
              en: "Detailed information with photos and reviews for each activity",
              ru: "Подробная информация с фотографиями и отзывами по каждому занятию"
            }
          },
          {
            id: 4,
            "title" : {
              am: "Հատուկ երթուղիներ ստեղծելու ունակություն",
              en: "Ability to create custom itineraries",
              ru: "Возможность создания индивидуальных маршрутов"
            }
          },
          {
            id: 5,
            "title" : {
              am: "Հաճախորդների առաջնահերթ աջակցություն",
              en: "Priority customer support",
              ru: "Приоритетная поддержка клиентов"
            }
          }
        ],
        "button" : {
          am: "Փորձեք PRO պլանը",
          en: "Try the PRO plan",
          ru: "Попробуйте план PRO"
        }
      }
    ],
  },
  experiences: {
    heading: {
      am: "Անմոռանալի փորձառություններ Հայաստանում",
      en: "Unforgettable Experiences in Armenia",
      ru: "Незабываемые впечатления в Армении"
    },
    read_more_button: {
      am: "Կարդալ ավելին",
      en: "Read More",
      ru: "Читать далее"
    }
  },
  faq: {
    aside:  {
      title: {
        am: "Տարածված հարցեր",
        en: "Common questions",
        ru: "Общие вопросы"
      },
      subtitle: {
        am: "Ահա մի քանի ամենատարածված հարցերը, որոնք մենք ստանում ենք",
        en: "Here are some of the most common questions whatwe get.",
        ru: "Вот некоторые из наиболее распространенных вопросов, которые мы получаем."
      }
    },
    article: [
      {
        id: 1,
        question: {
          am: "Զբոսաշրջային գործունեության ի՞նչ տեսակներ կան Հայաստանում:",
          en: "What types of touring activities are available in Armenia?",
          ru: "Какие виды туристической деятельности доступны в Армении?"
        },
        answer: {
          am: "Հայաստանն առաջարկում է զբոսաշրջային գործունեության լայն շրջանակ՝ ներառյալ մշակութային շրջագայություններ, արշավներ և արշավներ, գինու համտես, պատմական տեսարժան վայրեր, արկածային շրջագայություններ և այլն:",
          en: "Armenia offers a wide range of touring activities including cultural tours, hiking and trekking, wine tasting tours, historical sightseeing, adventure tours, and more.",
          ru: "Армения предлагает широкий спектр туристических мероприятий, включая культурные туры, пешие походы и треккинги, туры с дегустацией вин, осмотр исторических достопримечательностей, приключенческие туры и многое другое."
        }
      },
      {
        id: 2,
        question: {
          am: "Ինչպե՞ս կարող եմ պատվիրել տուրիստական ​​գործունեություն Հայաստանում:",
          en: "How can I book a touring activity in Armenia?",
          ru: "Как я могу забронировать гастрольную деятельность в Армении?"
        },
        answer: {
          am: "Հայաստանում տուրիստական ​​գործունեության ամրագրումը հեշտ է: Պարզապես զննեք մեր կայքը, ընտրեք ձեզ հետաքրքրող գործունեությունը և հետևեք տրամադրված ամրագրման հրահանգներին:",
          en: "Booking a touring activity in Armenia is easy. Simply browse through our website, select the activity you are interested in, and follow the booking instructions provided.",
          ru: "Забронировать тур в Армению легко. Просто просмотрите наш веб-сайт, выберите интересующее вас мероприятие и следуйте инструкциям по бронированию."
        }
      },
      {
        id: 3,
        question: {
          am: "Արդյո՞ք էքսկուրսիոն գործունեությունը ղեկավարում է էքսկուրսավարը:",
          en: "Are the touring activities guided?",
          ru: "Экскурсионная деятельность осуществляется под руководством гида?"
        },
        answer: {
          am: "Այո, Հայաստանում զբոսաշրջային գործունեության մեծ մասն իրականացվում է էքսկուրսավարի ղեկավարությամբ։ Մեր փորձառու և բանիմաց զբոսավարները կուղեկցեն ձեզ ողջ շրջագայության ընթացքում՝ արժեքավոր տեղեկատվություն տրամադրելու և անմոռանալի փորձ ապահովելու համար:",
          en: "Yes, most of the touring activities in Armenia are guided. Our experienced and knowledgeable guides will accompany you throughout the tour to provide valuable insights and ensure a memorable experience.",
          ru: "Да, большая часть гастрольной деятельности в Армении проводится под руководством гида. Наши опытные и знающие гиды будут сопровождать вас на протяжении всего тура, чтобы предоставить ценную информацию и обеспечить незабываемые впечатления."
        }
      },
      {
        id: 4,
        question: {
          am: "Ո՞րն է Հայաստան այցելելու լավագույն ժամանակը տուրիստական ​​գործունեության համար:",
          en: "What is the best time to visit Armenia for touring activities?",
          ru: "В какое время лучше всего приезжать в Армению с гастрольной деятельностью?"
        },
        answer: {
          am: "Շրջագայության համար Հայաստան այցելելու լավագույն ժամանակը գարնան (ապրիլ-հունիս) և աշուն (սեպտեմբեր-նոյեմբեր) սեզոններն են, երբ եղանակը հաճելի է, իսկ բնապատկերները՝ ամենագեղեցիկը:",
          en: "The best time to visit Armenia for touring activities is during the spring (April to June) and autumn (September to November) seasons when the weather is pleasant and the landscapes are at their most beautiful.",
          ru: "Лучшее время для посещения Армении с целью гастролей — весенний (апрель-июнь) и осенний (сентябрь-ноябрь) сезоны, когда погода приятная, а пейзажи самые красивые."
        }
      },
      {
        id: 5,
        question: {
          am: "Կա՞ն տարիքային սահմանափակումներ շրջագայություններին մասնակցելու համար:",
          en: "Are there any age restrictions for participating in touring activities?",
          ru: "Есть ли возрастные ограничения для участия в гастрольной деятельности?"
        },
        answer: {
          am: "Հայաստանում զբոսաշրջային գործունեության տարիքային սահմանափակումները կարող են տարբեր լինել՝ կախված կոնկրետ գործունեությունից: Որոշ գործողություններ կարող են ունենալ նվազագույն տարիքային պահանջներ՝ անվտանգության նկատառումներից ելնելով: Խնդրում ենք ստուգել գործունեության մանրամասները ցանկացած տարիքային սահմանափակման համար նախքան ամրագրելը:",
          en: "The age restrictions for touring activities in Armenia may vary depending on the specific activity. Some activities may have minimum age requirements for safety reasons. Please check the activity details for any age restrictions before booking.",
          ru: "Возрастные ограничения для гастрольной деятельности в Армении могут различаться в зависимости от конкретного вида деятельности. Некоторые виды деятельности могут иметь минимальные возрастные ограничения по соображениям безопасности. Пожалуйста, проверьте информацию о мероприятиях на наличие возрастных ограничений перед бронированием."
        }
      }
    ],
    
  },
  "footer" : {
    license: {
      am: "© 2023 ARMTOURS, Բոլոր իրավունքները պաշտպանված են",
      en: "© 2023 ARMTOURS, All Rights Reserved.",
      ru: "© 2023 ARMTOURS, Все права защищены."
    },
    social_icons: [
      {
        id: 1,
        icon: <FaTwitter />
      },
      {
        id: 2,
        icon: <FaInstagram />
      },
      {
        id: 3,
        icon: <FaFacebookF />
      }
    ]
  },
  home: {
    home_intro: {
      subheading: {
        am: "Բնական գեղեցկություն",
        en: "Natural beauty",
        ru: "Натуральная красота"
      },
      heading: {
        am: "Բացահայտեք առավել գրավիչ վայրերը",
        en: "Discover the most engaging places",
        ru: "Откройте для себя самые привлекательные места"
      },
      explore_button: {
        am: "Ուսումնասիրեք հիմա",
        en: "Explore Now",
        ru: "Исследуйте сейчас"
      }
    },
    home_order_form: {
      form_destination: {
        title: {
          am: "Ուղղություններ",
          en: "Destinations",
          ru: "Направления"
        },
        subtitle: {
          am: "Ու՞ր եք որոշել գնալ",
          en: "Destinations",
          ru: "Куда ты идешь?"
        }
      },
      form_date: {
        title: {
          am: "Երբ",
          en: "When",
          ru: "Когда"
        },
        subtitle: {
          am: "Ամսաթիվը",
          en: "Date from",
          ru: "Дата, с"
        }
      },
      form_guests: {
        title: {
          am: "Հյուրեր",
          en: "Guests",
          ru: "Гости"
        }
      }
    }
  }
}
export const  generateUniqueId = () => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 5);
  return timestamp + randomStr;
}