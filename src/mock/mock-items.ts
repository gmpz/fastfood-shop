// src/mock/mockItems.ts
export const mockItems = [
  // 🔥 popular
  {
    id: 101,
    name: "ผัดไทยกุ้งสด",
    description: "เมนูยอดฮิต เส้นเหนียวนุ่ม รสกลมกล่อมสุดๆ",
    type: "popular",
    price: 120,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 1, name: "เส้น", type: "radio", required: true, choices: [
        { name: "เส้นเล็ก", price: 0 },
        { name: "เส้นใหญ่", price: 5 },
        { name: "วุ้นเส้น", price: 10 },
      ]},
      { id: 2, name: "เนื้อสัตว์", type: "radio", required: true, choices: [
        { name: "กุ้ง", price: 20 },
        { name: "หมู", price: 10 },
        { name: "ไก่", price: 5 },
      ]},
      { id: 3, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "พริก", price: 2 },
        { name: "น้ำมัน", price: 5 },
        { name: "ไข่", price: 10 },
      ]},
    ],
  },
  {
    id: 2,
    name: "ข้าวผัดปู",
    description: "ข้าวผัดหอมกลิ่นกระทะ พร้อมเนื้อปูแน่นๆ",
    type: "popular",
    price: 90,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 4, name: "เนื้อปู", type: "radio", required: true, choices: [
        { name: "ปูสด", price: 15 },
        { name: "ปูแช่แข็ง", price: 10 },
      ]},
      { id: 5, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ไข่ดาว", price: 10 },
        { name: "กุ้งแห้ง", price: 5 },
      ]},
    ],
  },
  {
    id: 3,
    name: "ก๋วยเตี๋ยวเรือหมูน้ำตก",
    description: "เส้นเล็กน้ำตกหมูเข้มข้น รสจัดจ้านถึงใจ",
    type: "popular",
    price: 65,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 6, name: "เนื้อสัตว์", type: "radio", required: true, choices: [
        { name: "หมู", price: 5 },
        { name: "เนื้อ", price: 10 },
      ]},
      { id: 7, name: "เส้น", type: "radio", required: true, choices: [
        { name: "เส้นเล็ก", price: 0 },
        { name: "เส้นใหญ่", price: 5 },
      ]},
      { id: 8, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "พริก", price: 2 },
        { name: "ผักสด", price: 5 },
      ]},
    ],
  },
  {
    id: 4,
    name: "ข้าวมันไก่ตอน",
    description: "ไก่นุ่ม น้ำจิ้มเต้าเจี้ยวสูตรเด็ด",
    type: "popular",
    price: 75,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 9, name: "เนื้อไก่", type: "radio", required: true, choices: [
        { name: "อกไก่", price: 0 },
        { name: "น่องไก่", price: 5 },
      ]},
      { id: 10, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ไข่ต้ม", price: 5 },
        { name: "ซุป", price: 10 },
      ]},
    ],
  },

  // 🎉 promo
  {
    id: 5,
    name: "ต้มยำกุ้ง",
    description: "ต้มยำกุ้งรสแซ่บ เครื่องแน่นถึงใจ",
    type: "promo",
    price: 150,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 11, name: "เนื้อสัตว์", type: "radio", required: true, choices: [
        { name: "กุ้ง", price: 20 },
        { name: "หมู", price: 10 },
        { name: "ไก่", price: 5 },
      ]},
      { id: 12, name: "เผ็ด", type: "radio", required: true, choices: [
        { name: "ไม่เผ็ด", price: 0 },
        { name: "กลาง", price: 0 },
        { name: "มาก", price: 0 },
      ]},
      { id: 13, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "เห็ด", price: 5 },
        { name: "ข่า", price: 2 },
        { name: "ตะไคร้", price: 2 },
      ]},
    ],
  },
  {
    id: 6,
    name: "ส้มตำไทย",
    description: "ส้มตำรสเด็ด เผ็ดเปรี้ยวเค็มหวานครบรส",
    type: "promo",
    price: 60,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 14, name: "ระดับความเผ็ด", type: "radio", required: true, choices: [
        { name: "ไม่เผ็ด", price: 0 },
        { name: "เผ็ดกลาง", price: 0 },
        { name: "เผ็ดมาก", price: 0 },
      ]},
      { id: 15, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ถั่วลิสง", price: 2 },
        { name: "น้ำตาล", price: 1 },
      ]},
    ],
  },
  {
    id: 7,
    name: "ข้าวหน้าเป็ด",
    description: "เป็ดย่างหนังกรอบ ราดน้ำซอสสูตรลับ",
    type: "promo",
    price: 110,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 16, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ไข่ดาว", price: 10 },
        { name: "น้ำจิ้มพิเศษ", price: 5 },
      ]},
    ],
  },
  {
    id: 8,
    name: "เย็นตาโฟทะเล",
    description: "เครื่องแน่นเต็มชาม รสเข้มข้นหวานนำเล็กน้อย",
    type: "promo",
    price: 95,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 17, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ลูกชิ้นปลา", price: 5 },
        { name: "เต้าหู้ทอด", price: 3 },
      ]},
    ],
  },

  // 🍲 soup
  {
    id: 9,
    name: "แกงเขียวหวานไก่",
    description: "เครื่องแกงเข้มข้น กลิ่นหอมกะทิสด",
    type: "soup",
    price: 100,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 18, name: "เนื้อสัตว์", type: "radio", required: true, choices: [
        { name: "ไก่", price: 5 },
        { name: "หมู", price: 5 },
      ]},
      { id: 19, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "มะเขือ", price: 2 },
        { name: "พริก", price: 2 },
      ]},
    ],
  },
  {
    id: 10,
    name: "แกงจืดเต้าหู้หมูสับ",
    description: "รสละมุน อุ่นใจ เหมาะกับทุกมื้อ",
    type: "soup",
    price: 70,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 20, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ฟองเต้าหู้", price: 2 },
        { name: "ผักกาด", price: 1 },
      ]},
    ],
  },
  {
    id: 11,
    name: "ต้มข่าไก่",
    description: "รสชาติเปรี้ยวมันกำลังดี กลิ่นข่าโดดเด่น",
    type: "soup",
    price: 95,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 21, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ข่า", price: 2 },
        { name: "เห็ดฟาง", price: 5 },
      ]},
    ],
  },
  {
    id: 12,
    name: "แกงเผ็ดหมูกรอบ",
    description: "เผ็ดจัดจ้าน หมูกรอบหนังฟู",
    type: "soup",
    price: 120,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 22, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "พริก", price: 2 },
        { name: "ผักสด", price: 3 },
      ]},
    ],
  },

  // 🍨 dessert
  {
    id: 13,
    name: "ข้าวเหนียวมะม่วง",
    description: "ข้าวเหนียวมูนหอมหวาน มะม่วงสุกฉ่ำๆ",
    type: "dessert",
    price: 85,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 23, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "มะม่วงสุก", price: 5 },
        { name: "กะทิ", price: 2 },
      ]},
    ],
  },
  {
    id: 14,
    name: "ลอดช่องน้ำกะทิ",
    description: "หวานเย็นชื่นใจ กลิ่นกะทิหอมละมุน",
    type: "dessert",
    price: 45,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 24, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "น้ำกะทิ", price: 2 },
        { name: "ถั่วแดง", price: 3 },
      ]},
    ],
  },
  {
    id: 15,
    name: "บัวลอยไข่หวาน",
    description: "แป้งหนึบ หอมกะทิ ไข่ลวกเยิ้มๆ",
    type: "dessert",
    price: 55,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 25, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ไข่ลวก", price: 5 },
        { name: "ถั่วเขียว", price: 2 },
      ]},
    ],
  },
  {
    id: 16,
    name: "ไอศกรีมกะทิทรงเครื่อง",
    description: "กะทิเข้มข้น โรยถั่วและขนุนหวานหอม",
    type: "dessert",
    price: 50,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    options: [
      { id: 26, name: "เพิ่ม", type: "checkbox", required: false, choices: [
        { name: "ขนุน", price: 5 },
        { name: "ถั่ว", price: 2 },
      ]},
    ],
  },
];
