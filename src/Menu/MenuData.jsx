const MenuData = [
  // Breakfast
  {
    id: 1,
    title: "Pancake Stack",
    category: "breakfast",
    price: 6.99,
    image:
      "https://www.australianeggs.org.au/assets/Pink_Ombre_Pancakes_Ha_0565.jpg",
    dec: "Soft and fluffy pancakes served with maple syrup.",
  },
  {
    id: 2,
    title: "Classic Omelette",
    category: "breakfast",
    price: 7.49,
    image:
      "https://delishglobe.com/wp-content/uploads/2025/09/Full-English-Breakfast-Hearty-Morning-Platter.png",
    dec: "Egg omelette with cheese and fresh vegetables.",
  },
  {
    id: 3,
    title: "French Toast",
    category: "breakfast",
    price: 6.25,
    image:
      "https://www.australianeggs.org.au/assets/recipes/Egg-trout-croissant-0192-prv__ScaleWidthWzEyMDBd.jpg",
    dec: "Golden toast topped with honey and powdered sugar.",
  },
  {
    id: 4,
    title: "Breakfast Burrito",
    category: "breakfast",
    price: 8.25,
    image:
      "https://assets.epicurious.com/photos/5c4b7ab537d8ef4605419f1d/1:1/w_2560%2Cc_limit/St.-Patrick's-Day-Breakfast-Hash-012319.jpg",
    dec: "Eggs, sausage, and cheese wrapped in a tortilla.",
  },

  // Lunch
  {
    id: 5,
    title: "Chicken Burger",
    category: "lunch",
    price: 9.99,
    image:
      "https://friendlysrestaurants.com/assets/live/img/production/detail/menu/breakfast_breakfast-classics_big-two-do-breakfast.jpg",
    dec: "Grilled chicken burger with lettuce and sauce.",
  },
  {
    id: 6,
    title: "Veggie Wrap",
    category: "lunch",
    price: 8.49,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Sumac-turkey-stuffed-pittas-73482d5.jpg?quality=90&resize=708,643",
    dec: "Fresh vegetables wrapped in a soft tortilla.",
  },
  {
    id: 7,
    title: "Caesar Salad",
    category: "lunch",
    price: 7.99,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2024/04/Falafel-burgers-276ca8b.jpg",
    dec: "Crispy lettuce with parmesan and Caesar dressing.",
  },
  {
    id: 8,
    title: "Steak Sandwich",
    category: "lunch",
    price: 10.49,
    image:
      "https://www.savoryspiceshop.com/cdn/shop/articles/SweetGreenPeaFalafel.jpg?v=1760566620&width=1200",
    dec: "Juicy beef steak with caramelized onions.",
  },

  // Dinner
  {
    id: 9,
    title: "Grilled Salmon",
    category: "dinner",
    price: 14.99,
    image:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/196550/Mamouns-Falafel-Kit-3.jpg?ixlib=react-9.10.0&ar=1%3A1&fit=crop&w=3840&auto=format",
    dec: "Fresh salmon grilled with herbs and lemon.",
  },
  {
    id: 10,
    title: "Chicken Alfredo",
    category: "dinner",
    price: 12.99,
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2024/12/51-Date-Night-Dinner-Ideas-Made-to-Impress_TOHcom23_274697_DR_09_14_7b_FT.jpg",
    dec: "Creamy Alfredo pasta with grilled chicken.",
  },
  {
    id: 11,
    title: "Beef Biryani",
    category: "dinner",
    price: 11.49,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFpi8Ws2w7gWxt01KBWVj1VPSg6BDCXfJaA&s",
    dec: "Traditional spiced rice cooked with beef.",
  },
  {
    id: 12,
    title: "Vegetable Stir Fry",
    category: "dinner",
    price: 10.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtg4h-3Lt05lRRXpwVkc9MK_BwmBYeP03sA&s",
    dec: "Fresh vegetables sautéed in savory sauce.",
  },

  // Dessert
  {
    id: 13,
    title: "Chocolate Cake",
    category: "dessert",
    price: 5.99,
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
    dec: "Rich chocolate cake with creamy frosting.",
  },
  {
    id: 14,
    title: "Ice Cream Sundae",
    category: "dessert",
    price: 4.99,
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-01-triple-chocolate-mousse-cake%2Ftriple-chocolate-mousse-cake-0739",
    dec: "Vanilla ice cream topped with chocolate syrup.",
  },
  {
    id: 15,
    title: "Cheesecake",
    category: "dessert",
    price: 6.25,
    image:
      "https://www.southernliving.com/thmb/l7INZHNOP2-MzwCCq6gt7z3y_fE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Peanut_Butter_Pretzel_Pie_012-09c44a5d8f164dbeb149035b5eae14fe.jpg",
    dec: "Classic cheesecake with biscuit base.",
  },
  {
    id: 16,
    title: "Fruit Tart",
    category: "dessert",
    price: 5.49,
    image:
      "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/02/Classic-French-Macarons-2.jpg",
    dec: "Custard-filled tart topped with fresh fruits.",
  },

  // Drinks
  {
    id: 17,
    title: "Cappuccino",
    category: "drinks",
    price: 3.99,
    image:
      "https://www.beanilla.com/wp/wp-content/uploads/2022/06/RefreshingDrinks.jpg",
    dec: "Hot coffee with rich espresso and milk foam.",
  },
  {
    id: 18,
    title: "Fresh Orange Juice",
    category: "drinks",
    price: 3.49,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINgZYcgmqVDR9fmchT2shXB9NlMNXCY_plQ&s",
    dec: "Freshly squeezed orange juice.",
  },
  {
    id: 19,
    title: "Iced Tea",
    category: "drinks",
    price: 2.99,
    image:
      "https://www.slimmingworld.co.uk/wp-content/uploads/2024/05/summer-spritzes-sw-600px.jpg",
    dec: "Cold brewed tea with lemon.",
  },
  {
    id: 20,
    title: "Mint Lemonade",
    category: "drinks",
    price: 3.25,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/040/174/391/small/ai-generated-pictures-of-delicious-and-beautiful-drinks-photo.jpg",
    dec: "Refreshing lemonade with fresh mint.",
  },
];

export default MenuData;
