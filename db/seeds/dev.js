exports.seed = async function (knex) {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "login" CASCADE');
  await knex.raw('TRUNCATE TABLE "users" CASCADE');
  await knex.raw('TRUNCATE TABLE "lists" CASCADE');
  await knex.raw('TRUNCATE TABLE "categories" CASCADE');
  await knex.raw('TRUNCATE TABLE "listitems" CASCADE');
  await knex.raw('TRUNCATE TABLE "subscribed" CASCADE');
  await knex.raw('TRUNCATE TABLE "purchased" CASCADE');

  await knex("login").insert([
    {
      id: 1,
      email: "draxy80@gmail.com",
      hash: "$2a$10$z5F48JkBX3tt2490gSo0rOGEB4UdL6GaJAiuCdbC4aT0pWHQMaYD2",
    },
    {
      id: 2,
      email: "john@gmail.com",
      hash: "$2a$10$vrdJbafMO5owSrTi6baX.uFqJkxUJ/M16QGuK1Gtp55fmR81jUiqy",
    },
    {
      id: 3,
      email: "joe@gmail.com",
      hash: "$2a$10$4n9pCj2BN6zCnC2AG43htOlG0Ha3n/NXH3mI1BX8qcO.dB4LFN2Pi",
    },
  ]);

  await knex("users").insert([
    {
      id: 1,
      email_id: 1,
      first_name: "William",
      last_name: "Hamilton",
    },
    {
      id: 2,
      email_id: 2,
      first_name: "John",
      last_name: "Carroll",
    },
    {
      id: 3,
      email_id: 3,
      first_name: "Joe",
      last_name: "Coady",
    },
  ]);

  await knex("lists").insert([
    {
      id: 1,
      user_id: 1,
      name: "Xmas List",
      type: "xmas",
      created: "24/10/2021",
      closing: "24/12/2021",
    },
    {
      id: 2,
      user_id: 2,
      name: "Bday List",
      type: "bday",
      created: "23/10/2021",
      closing: "01/08/2022",
    },
    {
      id: 3,
      user_id: 3,
      name: "Xmas List",
      type: "xmas",
      created: "21/10/2021",
      closing: "24/12/2021",
    },
  ]);

  await knex("categories").insert([
    {
      id: 1,
      name: "Clothing",
    },
    {
      id: 2,
      name: "Shoes",
    },
    {
      id: 3,
      name: "Electronics",
    },
  ]);

  await knex("listitems").insert([
    {
      id: 1,
      list_id: 1,
      name: "Tommy Hilfiger Men's Core Flag Tee (Grayheather, Size XXL)",
      category_id: 1,
      price: 24.99,
      url: "https://www.kogan.com/au/buy/tommy-hilfiger-mens-core-flag-tee-grayheather-size-xxl/",
      description: "The Tommy Hilfiger Men’s Crew Neck Flag Tee is a must-have in every man’s wardrobe. This versatile tee looks complete with an understated flag detail on the chest.",
      image_path: "1.png",
      status: "",
    },
    {
      id: 2,
      list_id: 1,
      name: "Nowflex - Men's Sports Shorts - Heather Grey",
      category_id: 1,
      price: 49.95,
      url: "https://www.catch.com.au/product/nowflex-mens-sports-shorts-heather-grey-7245894",
      description: "The Nowflex sports shorts are designed for a tapered custom-fit look. They're made from french terry fabrics, providing a casual comfort feel.",
      image_path: "2.png",
      status: "Purcahsed",
    },
    {
      id: 3,
      list_id: 1,
      name: "Tommy Hilfiger Men's Brink Sneakers - Dark Blue",
      category_id: 2,
      price: 119.99,
      url: "https://www.catch.com.au/product/tommy-hilfiger-mens-brink-sneakers-dark-blue-7450023",
      description: "Whether you're heading to a nightclub or out for day drinks, looking your best helps you feel the best. Step into the sleek, extremely comfortable Brink sneakers by Tommy Hilfiger for a look that will have you turning heads from the moment you walk through the door.",
      image_path: "3.png",
      status: "",
    },
    {
      id: 4,
      list_id: 2,
      name: "Nikon D850 DSLR Camera w/ 24-120mm VR Lens Kit - Black",
      category_id: 3,
      price: 4798.00,
      url: "https://www.catch.com.au/product/nikon-d850-dslr-camera-w-24-120mm-vr-lens-kit-black-6438001",
      description: "Take your photography skills to a whole new level with the D850 DSLR Camera. Offering advanced features like a 45.7 megapixel sensor, 153-point autofocus system, and comprehensive 4K UHD and Full HD movie functions, it provides a true connection to your subject and lets you capture each moment with uncompromised detail.",
      image_path: "4.png",
      status: "",
    },
    {
      id: 5,
      list_id: 2,
      name: "Apple iPad 10.2-inch Wi-Fi + Cellular 64GB - Space Grey",
      category_id: 3,
      price: 699.00,
      url: "https://www.catch.com.au/product/apple-ipad-10-2-inch-wi-fi-cellular-64gb-space-grey-8975776",
      description: "Powerful. Easy to use. Versatile. The new iPad has a beautiful 10.2-inch Retina display1, the powerful A13 Bionic chip, an Ultra Wide front camera with Centre Stage, and support for Apple Pencil and the Smart Keyboard.2 iPad lets you do more, more easily. All for an incredible price.",
      image_path: "5.png",
      status: "",
    },
    {
      id: 6,
      list_id: 2,
      name: "Karrimor 3inch Shorts Pants Trousers Bottoms Mens",
      category_id: 1,
      price: 58.28,
      url: "https://www.catch.com.au/product/karrimor-3inch-shorts-pants-trousers-bottoms-mens-4694456",
      description: "Conquer your next run with the 3inch Shorts from Karrimor. Crafted with an elasticated waistband and an internal drawstring tie, these bottoms offer a super-secure and comfortable fit. The lightweight design features reflective details and a single zipped pocket to the rear. > Shorts > Elasticated waistband > Internal drawstring > Single zipped back pocket > X Lite technology > Lightweight > Block colour > Printed logo > Karrimor branding > Reflective details > Mesh details > Shell: 100% polyester > Lining: 100% polyester > Machine washable",
      image_path: "6.png",
      status: "Purchased",
    },
    {
      id: 7,
      list_id: 3,
      name: "Apple MacBook Pro 13-inch with Intel Processor 1TB - Silver",
      category_id: 3,
      price: 2799.00,
      url: "https://www.catch.com.au/product/apple-macbook-pro-13-inch-with-intel-processor-1tb-silver-7186670",
      description: "The 13-inch MacBook Pro has a tenth-generation quad-core Intel processor with Turbo Boost up to 3.8GHz and Intel Iris Plus Graphics. A brilliant and colourful Retina display with True Tone technology for a more true-to-life viewing experience. A backlit Magic Keyboard and Touch ID. And the versatile Touch Bar for more ways to be productive. It’s a whole lot of power packed into a 13-inch notebook.",
      image_path: "7.png",
      status: "",
    },
    {
      id: 8,
      list_id: 3,
      name: "Target Slim Chino Shorts - Green",
      category_id: 1,
      price: 30.00,
      url: "https://www.catch.com.au/product/target-slim-chino-shorts-green-8618805",
      description: "The stormy sea green slim chino shorts offer the comfort of stretch with Lycra® fibres that move with your body. A versatile choice for everyday wear, they feature a structured waist with button closure and belt loops for a great fit.",
      image_path: "8.png",
      status: "",
    },
    {
      id: 9,
      list_id: 3,
      name: "Target European Linen Shirt - White",
      category_id: 1,
      price: 35.00,
      url: "https://www.catch.com.au/product/target-european-linen-shirt-white-8619364",
      description: "The European Linen Shirt is made from flax grown in Europe; a natural fibre with comfort, breathability and soft touch. It's pre-washed to reduce shrinkage and features a collared neck, short sleeves and chest pocket.",
      image_path: "9.png",
      status: "",
    },
  ]);

  await knex("subscribed").insert([
    {
      id: 1,
      user_id: 1,
      list_id: 2,
    },
    {
      id: 2,
      user_id: 1,
      list_id: 3,
    },
    {
      id: 3,
      user_id: 2,
      list_id: 3,
    },
    {
      id: 4,
      user_id: 3,
      list_id: 1,
    },
    {
      id: 5,
      user_id: 3,
      list_id: 2,
    },
  ]);

  await knex("purchased").insert([
    {
      id: 1,
      user_id: 1,
      list_item_id: 6,
    },
    {
      id: 2,
      user_id: 3,
      list_item_id: 2,
    },
  ]);

};
