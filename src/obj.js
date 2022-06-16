const groupObj = [
  {
    id : 1,
    gId : 1,
    name : "Guruh #1",
    status : "Muzlatilgan",
    subject : "Matematika",
    educationType : "Sanoqli",
    payment : "200,000",
  },
  {
    id : 2,
    gId : 13,
    name : "Guruh #13",
    status : "Aktiv",
    subject : "Ona tili",
    educationType : "Sanoqli",
    payment : "200,000",
  },
  {
    id : 3,
    gId : 14,
    name : "Guruh #14",
    status : "Aktiv",
    subject : "Ona tili",
    educationType : "Sanoqli",
    payment : "180,000",
  },
  {
    id : 4,
    gId : 16,
    name : "Guruh #16",
    status : "Muzlatilgan",
    subject : "Ingliz tili",
    educationType : "Sanoqli",
    payment : "150,000",
  },
  {
    id : 4,
    gId : 17,
    name : "Guruh #17",
    status : "Aktiv",
    subject : "Ingliz tili",
    educationType : "Sanoqli",
    payment : "180,000",
  }
];

const teacherObj = [
  {
    id : 1,
    name : "Alisher Xazratov",
    group : 1,
    number : "(90) 212-22-15",
    groupNum : 1,
    status : "Muzlatilgan",
    payment : "100,000",
    img : "https://freepikpsd.com/file/2019/10/enseignant-png-3-Transparent-Images.png"
  },
  {
    id : 2,
    name : "Valibek Nasimov",
    group : 13,
    number : "(99) 654-45-21",
    groupNum : 3,
    status : "Aktiv",
    payment : "200,000",
    img : "https://cdn-icons-png.flaticon.com/512/183/183753.png"
  },
  {
    id : 3,
    name : "Karimberdi Aliyev",
    group : 17,
    number : "(93) 305-85-59",
    groupNum : 2,
    status : "Aktiv",
    payment : "180,000",
    img : "https://cdn-icons-png.flaticon.com/512/247/247783.png"
  },
  {
    id : 4,
    name : "Elmurod Toshqulov",
    group : 14,
    number : "(90) 231-45-65",
    groupNum : 1,
    status : "Aktiv",
    payment : "180,000",
    img : "https://www.shareicon.net/data/512x512/2016/07/26/801997_user_512x512.png"
  },
  {
    id : 5,
    name : "Aleksandr Ivanov",
    group : 16,
    number : "(91) 319-18-91",
    groupNum : 1,
    status : "Aktiv",
    payment : "13,000",
    img : "https://muast.ac.zw/wp-content/uploads/2019/02/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels-1.png"
  }
];

const studentObj = [
  {
    id : 1,
    name : "Shaxzod Unknown",
    group : [1],
    number : "(95) 151-25-12",
    groupNum : 1,
  },
  {
    id : 2,
    name : "Akbarali Tengelov",
    group : [13, 14, 16],
    number : "(90) 201-90-25",
    groupNum : 3,
  },
  {
    id : 3,
    name : "Muhammadsodiq Koziyev",
    group : [17, 1],
    number : "(99) 119-51-51"
  },
  {
    id : 4,
    name : "Jamoliddin Najmiddinov",
    group : [13],
    number : "(94) 251-21-21"
  },
  {
    id : 5,
    name : "Aziz Rakhim",
    group : [14],
    number : "(95) 011-36-33"
  },
  {
    id : 6,
    name : "Samandar Bohodirov",
    group : [16, 17],
    number : "(91) 171-99-11"
  },
  {
    id : 7,
    name : "Abdulloh G'iyasev",
    group : [1],
    number : "(93) 951-51-49"
  },
  {
    id : 8,
    name : "Ulug'bek Vahidov",
    group : [13],
    number : "(73) 501-13-63"
  },
  {
    id : 9,
    name : "Allan Unknown",
    group : [14],
    number : "(71) 616-17-91"
  },
  {
    id : 10,
    name : "Abdunozi Unknown",
    group : [16],
    number : "(33) 719-39-51"
  }
];

export {groupObj, teacherObj, studentObj};