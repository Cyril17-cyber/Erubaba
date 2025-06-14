// /data/products.ts

interface SubCategoryType {
  name: string;
  image: string;
}

interface CategoryType {
  name: string;
  subCategories: SubCategoryType[];
}
export const categories: CategoryType[] = [
  {
    name: "electronics",
    subCategories: [
      {
        name: "television",
        image:
          "https://images.unsplash.com/photo-1571415060716-baff5f717c37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHR2fGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        name: "bluetooth speaker",
        image:
          "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BlYWtlcnxlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "digital cameras",
        image:
          "https://images.unsplash.com/photo-1693208056517-3827551646e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMGNhbWVyYXN8ZW58MHwwfDB8fHwy",
      },
      {
        name: "security systems",
        image:
          "https://images.unsplash.com/photo-1563920443079-783e5c786b83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNlY3VyaXR5fGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
  {
    name: "fitness",
    subCategories: [
      {
        name: "weights",
        image:
          "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VpZ2h0c3xlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "equipments",
        image:
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZXF1aXBtZW50c3xlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "wear",
        image:
          "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwd2VhcnxlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1676312827534-21947df045ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwYWNjZXNzb3JpZXN8ZW58MHwwfDB8fHwy",
      },
    ],
  },
  {
    name: "kitchen",
    subCategories: [
      {
        name: "cookware",
        image:
          "https://images.unsplash.com/photo-1584990347163-2b86b71390d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va3dhcmV8ZW58MHwwfDB8fHwy",
      },
      {
        name: "appliances",
        image:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2l0Y2hlbiUyMGFwcGxpYW5jZXN8ZW58MHwwfDB8fHwy",
      },
      {
        name: "utensils",
        image:
          "https://images.unsplash.com/photo-1586969593928-1c87c1f9c2ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2l0Y2hlbiUyMHV0ZW5zaWxzfGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
  {
    name: "fashion",
    subCategories: [
      {
        name: "men",
        image:
          "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFzaGlvbnxlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "women",
        image:
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYXNoaW9ufGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        name: "unisex",
        image:
          "https://images.unsplash.com/photo-1658333484743-2c6d89a6819e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pc2V4JTIwZmFzaGlvbnxlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFjY2Vzc29yaWVzJTIwZmFzaGlvbnxlbnwwfDB8MHx8fDI%3D",
      },
    ],
  },
  {
    name: "phone & tablets",
    subCategories: [
      {
        name: "smartphones",
        image:
          "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZXxlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "tablets",
        image:
          "https://images.unsplash.com/photo-1622531636820-5d727319e45d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0c3xlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "wearables",
        image:
          "https://images.unsplash.com/photo-1596236100223-f3c656de3038?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhcmFibGVzfGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
  {
    name: "automobiles",
    subCategories: [
      {
        name: "cars",
        image:
          "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "motorcycles",
        image:
          "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JjeWNsZXxlbnwwfDB8MHx8fDI%3D",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1627913434632-b4717be3485a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwYWNjZXNzb3JpZXN8ZW58MHwwfDB8fHwy",
      },
      {
        name: "parts",
        image:
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcGFydHN8ZW58MHwwfDB8fHwy",
      },
      {
        name: "supplies",
        image:
          "https://images.unsplash.com/photo-1590227763209-821c686b932f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwb2lsfGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
  {
    name: "gaming",
    subCategories: [
      {
        name: "consoles",
        image:
          "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZSUyMGNvbnNvbGV8ZW58MHwwfDB8fHwy",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1567094764148-bb14c3e6f14c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZSUyMGFjY2Vzc29yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
  {
    name: "baby products",
    subCategories: [
      {
        name: "clothing",
        image:
          "https://images.unsplash.com/photo-1622290291165-d341f1938b8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNsb3RoZXN8ZW58MHwwfDB8fHwy",
      },
      {
        name: "accessories",
        image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGFjY2Vzc29yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        name: "supplies",
        image:
          "https://images.unsplash.com/photo-1593793373220-2e51e1c31385?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieSUyMHN1cHBsaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
  },
];


// This is a TypeScript interface for a product object
export interface Product {
  id: string;
  name: string;
  price: number;
  seller: string;
  rated: number;
  img: string;
  category?: string; // Optional category field
  subCategory?: string; // Optional sub-category field
  description?: string; // Optional description field
  stock?: number; // Optional stock field
  discount?: number; // Optional discount field
  gallery?: string[]; // Optional gallery field for multiple images
  createdAt?: string; // Optional field for creation date
}

export const products: Product[] = [
  {
    id: "1",
    name: "Onyx Studio 9 Speaker",
    price: 94000,
    seller: "Uzen Gadgets",
    rated: 4.5,
    img: "https://images.unsplash.com/photo-1692246427974-c28629e3617e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "electronics",
    subCategory: "bluetooth speaker",
  },
  {
    id: "2",
    name: "LG Smart Tv",
    price: 120000,
    seller: "TechWorld",
    rated: 4.8,
    img: "https://images.unsplash.com/photo-1712903911104-cf22c142c04f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGclMjBzbWFydCUyMHR2fGVufDB8MHwwfHx8Mg%3D%3D",
    category: "electronics",
    subCategory: "television",
  },
  {
    id: "3",
    name: "Nikon D3500 Camera",
    price: 150000,
    seller: "Camera World",
    rated: 4.9,
    img: "https://images.unsplash.com/photo-1607204464560-a5909c4c2fae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Tml4b24lMjBEMzUwMCUyMENhbWVyYXxlbnwwfDB8MHx8fDI%3D",
    category: "electronics",
    subCategory: "digital cameras",
  },
  {
    id: "4",
    name: "Security Camera Pro",
    price: 15000,
    seller: "SoundWave",
    rated: 4.3,
    img: "https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2N0diUyMGNhbWVyYXxlbnwwfDB8MHx8fDI%3D",
    category: "electronics",
    subCategory: "security systems",
  },
  {
    id: "5",
    name: "Canon EOS M50",
    price: 300000,
    seller: "Wearable Tech",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1536632087471-3cf3f2986328?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtZXJhfGVufDB8MHwwfHx8Mg%3D%3D",
    category: "electronics",
    subCategory: "digital cameras",
  },
  {
    id: "6",
    name: "4K Ultra HD TV",
    price: 80000,
    seller: "Visionary Electronics",
    rated: 4.7,
    img: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHZ8ZW58MHwwfDB8fHwy",
    category: "electronics",
    subCategory: "television",
  },
  {
    id: "7",
    name: "Bluetooth Headphones",
    price: 20000,
    seller: "Audio Bliss",
    rated: 4.4,
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfDB8MHx8fDI%3D",
    category: "electronics",
    subCategory: "bluetooth speaker",
  },
  {
    id: "8",
    name: "CCTV Security System",
    price: 50000,
    seller: "SecureTech",
    rated: 4.8,
    img: "https://images.unsplash.com/photo-1653039923048-aa285ded90ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJpdHklMjBzeXN0ZW1zfGVufDB8MHwwfHx8Mg%3D%3D",
    category: "electronics",
    subCategory: "security systems",
  },
  {
    id: "9",
    name: "30KG Dumbbells",
    price: 94000,
    seller: "KayFitness",
    rated: 4.2,
    img: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVtYmJlbGx8ZW58MHwwfDB8fHwy",
    category: "fitness",
    subCategory: "weights",
  },
  {
    id: "10",
    name: "Yoga Mat Pro",
    price: 2500,
    seller: "FitLife",
    rated: 4.5,
    img: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMG1hdHxlbnwwfDB8MHx8fDI%3D",
    category: "fitness",
    subCategory: "equipments",
  },
  {
    id: "11",
    name: "Running Shoes",
    price: 8000,
    seller: "RunFast",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8MHwwfHx8Mg%3D%3D",
    category: "fitness",
    subCategory: "wear",
  },
  {
    id: "12",
    name: "Fitness Tracker Band",
    price: 5000,
    seller: "HealthTrack",
    rated: 4.3,
    img: "https://images.unsplash.com/photo-1622805199349-ada0338f7c0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rml0bmVzcyUyMEJhbmR8ZW58MHwwfDB8fHwy",
    category: "fitness",
    subCategory: "accessories",
  },
  {
    id: "13",
    name: "Resistance Bands Set",
    price: 1500,
    seller: "FlexFit",
    rated: 4.1,
    img: "https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzaXN0YW5jZSUyMEJhbmR8ZW58MHwwfDB8fHwy",
    category: "fitness",
    subCategory: "equipments",
  },
  {
    id: "14",
    name: "Adjustable Weight Bench",
    price: 12000,
    seller: "GymPro",
    rated: 4.4,
    img: "https://images.unsplash.com/photo-1685633224767-361354e84e2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwYmVuY2h8ZW58MHwwfDB8fHwy",
    category: "fitness",
    subCategory: "equipments",
  },
  {
    id: "15",
    name: "Jump Rope Pro",
    price: 800,
    seller: "CardioKing",
    rated: 4.0,
    img: "https://images.unsplash.com/photo-1514994667787-b48ca37155f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anVtcCUyMHJvcGV8ZW58MHwwfDB8fHwy",
    category: "fitness",
    subCategory: "accessories",
  },
  {
    id: "16",
    name: "Foam Roller Set",
    price: 2000,
    seller: "RecoveryZone",
    rated: 4.3,
    img: "https://images.unsplash.com/photo-1651718409393-ab3c3dbae4a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHJvbGxlciUyMHNldHxlbnwwfDB8MHx8fDI%3D",
    category: "fitness",
    subCategory: "accessories",
  },
  {
    id: "17",
    name: "Electric Kettle",
    price: 2500,
    seller: "Home Essentials",
    rated: 4.0,
    img: "https://images.unsplash.com/photo-1643114786355-ff9e52736eab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHwwfDB8fHwy",
    category: "kitchen",
    subCategory: "appliances",
  },
  {
    id: "18",
    name: "Non-Stick Cookware Set",
    price: 8000,
    seller: "KitchenPro",
    rated: 4.5,
    img: "https://images.unsplash.com/photo-1599182345361-9542815e73f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9uc3RpY2slMjBjb29rZXJ8ZW58MHwwfDB8fHwy",
    category: "kitchen",
    subCategory: "cookware",
  },
  {
    id: "19",
    name: "Blender Pro 5000",
    price: 6000,
    seller: "BlendMaster",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxlbmRlcnxlbnwwfDB8MHx8fDI%3D",
    category: "kitchen",
    subCategory: "appliances",
  },
  {
    id: "20",
    name: "Stainless Steel Knife Set",
    price: 3500,
    seller: "Chef's Choice",
    rated: 4.4,
    img: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a25pZmUlMjBzZXR8ZW58MHwwfDB8fHwy",
    category: "kitchen",
    subCategory: "utensils",
  },
  {
    id: "21",
    name: "Coffee Maker Deluxe",
    price: 7000,
    seller: "BrewMasters",
    rated: 4.8,
    img: "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwbWFrZXJ8ZW58MHwwfDB8fHwy",
    category: "kitchen",
    subCategory: "appliances",
  },
  {
    id: "22",
    name: "Food Processor Pro",
    price: 9000,
    seller: "ChopItUp",
    rated: 4.7,
    img: "https://images.unsplash.com/photo-1640270287737-42c9a15db98f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHByb2Nlc3NvciUyMG1hY2hpbmV8ZW58MHwwfDB8fHwy",
    category: "kitchen",
    subCategory: "appliances",
  },
  {
    id: "23",
    name: "Cast Iron Skillet",
    price: 4000,
    seller: "Cookware Co.",
    rated: 4.3,
    img: "https://images.unsplash.com/photo-1633981823231-2a2a7c9b014c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXJvbiUyMHNraWxsZXR8ZW58MHwwfDB8fHwy",
    category: "kitchen",
    subCategory: "cookware",
  },
  {
    id: "24",
    name: "Rice Cooker Plus",
    price: 3000,
    seller: "RiceMasters",
    rated: 4.2,
    img: "https://images.unsplash.com/photo-1556910633-5099dc3971e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGNvb2tlcnxlbnwwfDB8MHx8fDI%3D",
    category: "kitchen",
    subCategory: "appliances",
  },
  {
    id: "25",
    name: "Leather Jacket",
    price: 15000,
    seller: "StyleHub",
    rated: 4.7,
    img: "https://images.unsplash.com/photo-1520501388013-f738300d63ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhdGhlciUyMGphY2tldHxlbnwwfDB8MHx8fDI%3D",
    category: "fashion",
    subCategory: "men",
  },
  {
    id: "26",
    name: "Designer Handbag",
    price: 25000,
    seller: "Chic Boutique",
    rated: 4.8,
    img: "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZGJhZ3xlbnwwfDB8MHx8fDI%3D",
    category: "fashion",
    subCategory: "women",
  },
  {
    id: "27",
    name: "Red Nikes",
    price: 8000,
    seller: "Sneaker World",
    rated: 4.5,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHwwfDB8fHwy",
    category: "fashion",
    subCategory: "unisex",
  },
  {
    id: "28",
    name: "Sunglasses Classic",
    price: 3000,
    seller: "Visionary Styles",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfDB8MHx8fDI%3D",
    category: "fashion",
    subCategory: "accessories",
  },
  {
    id: "29",
    name: "Wristwatch Elegance",
    price: 12000,
    seller: "Timekeepers",
    rated: 4.9,
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3Jpc3R3YXRjaHxlbnwwfDB8MHx8fDI%3D",
    category: "fashion",
    subCategory: "accessories",
  },
  {
    id: "30",
    name: "Perfume Luxury",
    price: 5000,
    seller: "Fragrance House",
    rated: 4.4,
    img: "https://images.unsplash.com/photo-1458538977777-0549b2370168?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZnVtZXxlbnwwfDB8MHx8fDI%3D",
    category: "fashion",
    subCategory: "unisex",
  },
  {
    id: "31",
    name: "Stylish Phone Case",
    price: 5000,
    seller: "Phone Accessories",
    rated: 4.1,
    img: "https://images.unsplash.com/photo-1542219550-76864b1bc385?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBjYXNlfGVufDB8MHwwfHx8Mg%3D%3D",
    category: "phone & tablets",
    subCategory: "accessories",
  },
  {
    id: "32",
    name: "Tablet Pro 10",
    price: 60000,
    seller: "Tech Gadgets",
    rated: 4.7,
    img: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV0fGVufDB8MHwwfHx8Mg%3D%3D",
    category: "phone & tablets",
    subCategory: "tablets",
  },
  {
    id: "33",
    name: "Wireless Charger Pad",
    price: 2000,
    seller: "ChargeTech",
    rated: 4.3,
    img: "https://images.unsplash.com/photo-1617975426095-f073792aef15?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8MHwwfHx8Mg%3D%3D",
    category: "phone & tablets",
    subCategory: "accessories",
  },
  {
    id: "34",
    name: "Samsung Galaxy S21",
    price: 150000,
    seller: "Olusesi Tech",
    rated: 4.5,
    img: "https://images.unsplash.com/photo-1610945263963-47c586d7abbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyMXxlbnwwfDB8MHx8fDI%3D",
    category: "phone & tablets",
    subCategory: "smartphones",
  },
  {
    id: "35",
    name: "Airpods Pro",
    price: 30000,
    seller: "V-Tech",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMHByb3xlbnwwfDB8MHx8fDI%3D",
    category: "phone & tablets",
    subCategory: "wearables",
  },
  // {
  //   id: "36",
  //   name: "Rolex Watch",
  //   price: 500000,
  //   seller: "Luxury Timepieces",
  //   rated: 4.9,
  //   img: "https://images.unsplash.com/photo-1640416822842-1d1cd0c6b9f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9sZXglMjB3YXRjaHxlbnwwfDB8MHx8fDI%3D",
  //   category: "accessories",

  // },
  // {
  //   id: "37",
  //   name: "Ray-Ban Sunglasses",
  //   price: 20000,
  //   seller: "Visionary Styles",
  //   rated: 4.8,
  //   img: "https://images.unsplash.com/photo-1594495024437-db507fd23fcc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmF5JTIwYmFuc3xlbnwwfDB8MHx8fDI%3D",
  //   category: "accessories",
  // },
  // {
  //   id: "38",
  //   name: "Leather Wallet",
  //   price: 5000,
  //   seller: "StyleHub",
  //   rated: 4.5,
  //   img: "https://images.unsplash.com/photo-1651735060244-781017915251?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlciUyMHdhdGNofGVufDB8MHwwfHx8Mg%3D%3D",
  //   category: "accessories",
  // },
  // {
  //   id: "39",
  //   name: "Smart Ring",
  //   price: 15000,
  //   seller: "TechWearables",
  //   rated: 4.6,
  //   img: "https://images.unsplash.com/photo-1550368566-f9cc32d7392d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjByaW5nfGVufDB8MHwwfHx8Mg%3D%3D",
  //   category: "accessories",
  // },
  // {
  //   id: "40",
  //   name: "Fitness Tracker Watch",
  //   price: 25000,
  //   seller: "HealthTrack",
  //   rated: 4.7,
  //   img: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwdHJhY2tlciUyMHdhdGNofGVufDB8MHwwfHx8Mg%3D%3D",
  //   category: "accessories",
  // },
  {
    id: "36",
    name: "Toyota Camry 2023",
    price: 3000000,
    seller: "AutoWorld",
    rated: 4.9,
    img: "https://images.unsplash.com/photo-1657872737697-737a2d123ef2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG95b3RhJTIwQ2Ftcnl8ZW58MHwwfDB8fHwy",
    category: "automobiles",
    subCategory: "cars",
  },
  {
    id: "37",
    name: "Honda CBR 650R",
    price: 1500000,
    seller: "BikeZone",
    rated: 4.8,
    img: "https://images.unsplash.com/photo-1653064098555-ae5a6e81ec05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9uZGElMjBDQlJ8ZW58MHwwfDB8fHwy",
    category: "automobiles",
    subCategory: "motorcycles",
  },
  {
    id: "38",
    name: "Steering wheel cover",
    price: 20000,
    seller: "Auto Essentials",
    rated: 4.5,
    img: "https://images.unsplash.com/photo-1485987648947-5782a5943a82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0ZWVyaW5nJTIwd2hlZWwlMjBjb3ZlcnxlbnwwfDB8MHx8fDI%3D",
    category: "automobiles",
    subCategory: "accessories",
  },
  {
    id: "39",
    name: "Car Tires Set",
    price: 80000,
    seller: "Tire World",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwdHlyZXxlbnwwfDB8MHx8fDI%3D",
    category: "automobiles",
    subCategory: "parts",
  },
  {
    id: "40",
    name: "Brake Fluid",
    price: 80000,
    seller: "CarCare",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1635437536607-b8572f443763?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMG9pbHxlbnwwfDB8MHx8fDI%3D",
    category: "automobiles",
    subCategory: "supplies",
  },
  {
    id: "41",
    name: "PlayStation 5",
    price: 450000,
    seller: "GameZone",
    rated: 4.9,
    img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheXN0YXRpb24lMjA1fGVufDB8MHwwfHx8Mg%3D%3D",
    category: "gaming",
    subCategory: "consoles",
  },
  {
    id: "42",
    name: "Xbox Series X",
    price: 400000,
    seller: "Gamer's Paradise",
    rated: 4.8,
    img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WGJveCUyMFNlcmllcyUyMFh8ZW58MHwwfDB8fHwy",
    category: "gaming",
    subCategory: "consoles",
  },
  {
    id: "43",
    name: "Gaming Mouse Pro",
    price: 15000,
    seller: "TechWorld",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHwwfDB8fHwy",
    category: "gaming",
    subCategory: "accessories",
  },
  {
    id: "44",
    name: "Gaming Keyboard RGB",
    price: 20000,
    seller: "Gamer's Paradise",
    rated: 4.7,
    img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHwwfDB8fHwy",
    category: "gaming",
    subCategory: "accessories",
  },
  {
    id: "45",
    name: "Gaming Chair Ergonomic",
    price: 80000,
    seller: "GameZone",
    rated: 4.9,
    img: "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHwwfDB8fHwy",
    category: "gaming",
    subCategory: "accessories",
  },
  {
    id: "46",
    name: "Diapers",
    price: 5000,
    seller: "BabyCare",
    rated: 4.5,
    img: "https://images.unsplash.com/photo-1695998575483-b215c8b2f619?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlhcGVyc3xlbnwwfDB8MHx8fDI%3D",
    category: "baby products",
    subCategory: "accessories",
  },
  {
    id: "47",
    name: "Baby Stroller",
    price: 30000,
    seller: "Parenting Essentials",
    rated: 4.8,
    img: "https://images.unsplash.com/photo-1636384919179-d936e55c5cca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFieSUyMFN0cm9sbGVyfGVufDB8MHwwfHx8Mg%3D%3D",
    category: "baby products",
    subCategory: "accessories",
  },
  {
    id: "48",
    name: "Baby Wipes",
    price: 15000,
    seller: "BabyTech",
    rated: 4.6,
    img: "https://images.unsplash.com/photo-1734599406023-80b2212b713b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFieSUyMHdpcGVzfGVufDB8MHwwfHx8Mg%3D%3D",
    category: "baby products",
    subCategory: "supplies",
  },
  {
    id: "49",
    name: "Baby Clothes Set",
    price: 8000,
    seller: "Tiny Tots Boutique",
    rated: 4.7,
    img: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFieSUyMGNsb3RoZXN8ZW58MHwwfDB8fHwy",
    category: "baby products",
    subCategory: "clothing",
  },
  {
    id: "50",
    name: "Baby Bath Tub",
    price: 4000,
    seller: "BabyCare Essentials",
    rated: 4.4,
    img: "https://images.unsplash.com/flagged/photo-1564228539519-4dfe919785a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFieSUyMGJhdGglMjB0dWJ8ZW58MHwwfDB8fHwy",
    category: "baby products",
    subCategory: "supplies",
  },
];




