import tourImg01 from "../images/t2.jpg";
import tourImg02 from "../images/t1.jpg";
import tourImg03 from "../images/t3.jpg";
import tourImg04 from "../images/t5.jpg";
import tourImg05 from "../images/t6.jpg";
import tourImg06 from "../images/t14.jpg";
import tourImg07 from "../images/t11.jpg";
import tourImg08 from "../images/t15.jpg";

const tours = [
  {
    id: "01",
    title: "Temple of Tooth",
    city: "Kandy",
    distance: 300,
    address: "Sri Dalada Veediya, Kandy, Sri Lanka",
    price: 1000,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.53514320401!2d80.63875007483911!3d7.293608992713911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662db149fbf5%3A0x8165d70ac115e887!2sSri%20Dalada%20Maligawa!5e0!3m2!1sen!2slk!4v1717756629892!5m2!1sen!2slk",
    desc: "The temple of the tooth relic is one of the most sacred places in the Buddhist world. The temple is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. The relic is believed to have been brought to Sri Lanka in the 4th century AD.",
    reviews: [
      {
        name: "Dasanya Maithree",
        rating: 4.8,
      },
      {
        name: "Imani Maithree",
        rating: 4.2,
      },
      {
        name: "Dasanya Maithree",
        rating: 4.1,
      },
      {
        name: "Imani Maithree",
        rating: 3.9,
      }
    ],
    avgRating: 4.8,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Sigiriya",
    city: "Dambulla",
    distance: 400,
    address: "Sigiriya, Sri Lanka",
    price: 1800,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4049843661423!2d80.75768207484609!3d7.957032692067574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca15b724c9ab3%3A0xab1771275b370d52!2sSigiriya!5e0!3m2!1sen!2slk!4v1717756833893!5m2!1sen!2slk",
    desc: "Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 meters high. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Nine Arch Bridge",
    city: "Ella",
    distance: 300,
    address: "Ella, Sri Lanka",
    price: 0,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.925139857445!2d81.05241031430013!3d6.874435594046759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45db1035c9d35%3A0xe3a33a91d79c0e4a!2sNine%20Arches%20Bridge!5e0!3m2!1sen!2slk!4v1623040694761!5m2!1sen!2slk",
    desc: "The Nine Arch Bridge is one of the most iconic bridges in Sri Lanka and is a must-visit place for all the tourists. The bridge is located in the Demodara area between Ella and Demodara railway stations.",
    reviews: [
      {
        name: "Dasanya Maithree",
        rating: 4.8,
      },
      {
        name: "Malsha Maithree",
        rating: 4.9,
      },
      {
        name: "Anuththara Maithree",
        rating: 4.8,
      },
      {
        name: "Maithree",
        rating: 4.9,
      },
    ],
    avgRating: 5.0,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Galle Fort",
    city: "Galle",
    distance: 10,
    address: "Galle, Sri Lanka",
    price: 0,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4884.883138152919!2d80.21359705170926!3d6.0278834151601375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a4115316af%3A0x6e9078b6e3e0a7f!2sGalle%20Dutch%20Fort%2C%20Galle%2080000!5e0!3m2!1sen!2slk!4v1717756930457!5m2!1sen!2slk",
    desc: "Galle Fort is a historical, archaeological and architectural heritage monument, which even after more than 423 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Micheal doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.9,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nilaveli Beach",
    city: "Trincomalee",
    distance: 600,
    address: "Nilaveli, Trincomalee, Sri Lanka",
    price: 0,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7912.853542108086!2d81.20356417473635!3d8.73519630774216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6d828c333ff13%3A0x563a228cbffac894!2sNilaveli%20Beach!5e0!3m2!1sen!2slk!4v1623040780766!5m2!1sen!2slk",
    desc: "Nilaveli is a coastal resort town located about 16 km North-West of Trincomalee, Trincomalee District, Sri Lanka. It used to be a popular tourist destination, however due to 2004 Indian Ocean Tsunami and Sri Lankan Civil War tourist numbers have declined. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
      {
        name: "Dasanya Maithree",
        rating: 4.7,
      },
      {
        name: "Malsha Maithree",
        rating: 4.8,
      },
      {
        name: "Anuththara Maithree",
        rating: 4.8,
      },
      {
        name: "Maithree",
        rating: 4.8,
      },
    ],
    avgRating: 4.7,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Adam's Peak",
    city: "Kithulgala",
    distance: 360,
    address: "Sri Pada, Sri Lanka",
    price: 0,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.68979838611!2d80.48908794516127!3d6.809638441005371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae397758aa80709%3A0x4f5b990ab8aaf71d!2sSri%20Padaya!5e0!3m2!1sen!2slk!4v1717758239971!5m2!1sen!2slk",
    desc: "Adam's Peak is a 2,243 m (7,359 ft) tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, i.e., sacred footprint, a 1.8 m (5 ft 11 in) rock formation near the summit, which in Buddhist tradition is held to be the footprint of the Buddha, in Hindu tradition that of Shiva and in Islamic and Christian tradition that of Adam, or that of St. Thomas. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
      {
        name: "Dasanya Maithree",
        rating: 4.7,
      },
      {
        name: "Malsha Maithree",
        rating: 4.8,
      },
    ],
    avgRating: 4.6,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Arugam Bay",
    city: "Arugam Bay",
    distance: 400,
    address: "Arugam Bay, Sri Lanka",
    price: 0,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16953.661535278145!2d81.81509050352042!3d6.837691406507761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5bd26f6a1ccd7%3A0xb934be79f3ce3515!2sArugam%20Bay!5e0!3m2!1sen!2slk!4v1717754537164!5m2!1sen!2slk",
    desc: "Arugam Bay is a bay situated on the Indian Ocean in the dry zone of Sri Lanka's southeast coast. The bay is located 320 km due east of Colombo. It is a popular surfing and tourist destination. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Yala National Park",
    city: "Hambantota",
    distance: 300,
    address: "Yala National Park, Sri Lanka",
    price: 0,
    maxGroupSize: 8,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.239101795255!2d81.42359647483147!3d6.491379593500689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae683b969aec5c7%3A0x7e3aa2da875d927e!2sYala%20National%20Park%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1717756545200!5m2!1sen!2slk",
    desc: "Yala National Park is the most visited and second largest national park in Sri Lanka, bordering the Indian Ocean. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The blocks have individual names such as, Ruhuna National Park (block 1) and Kumana National Park or 'Yala East' for the adjoining area. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Dasanya Maithree",
        rating: 4.7,
      },
      {
        name: "Malsha Maithree",
        rating: 4.9,
      }
    ],
    avgRating: 4.9,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Ambuluwawa Tower",
    city: "Ambuluwawa",
    address: "Ambuluwawa, Gampola",
    distance: 120,
    price: 0,
    maxGroupSize: 10,
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.239101795255!2d80.56159647483147!3d7.142389593500689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae303b969aec5c7%3A0x6e3aa2da875d927e!2sAmbuluwawa%20Tower%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1717756545200!5m2!1sen!2slk",
    desc: "The Ambuluwawa Tower is a unique multi-religious center that stands atop the Ambuluwawa mountain in Gampola. It features a spiraling tower that offers panoramic views of the surrounding landscape. Visitors can climb the tower to experience these breathtaking views and the tranquility of the site.",
    reviews: [],
    photo: "/tour-images/tour-img09.jpg",
    featured: false,
  },
];

export default tours;
