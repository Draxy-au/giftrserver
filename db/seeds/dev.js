const tableNames = require('../../src/constants/tableNames');
const bcrypt = require('bcrypt');



exports.seed = async (knex) => {

  await knex(tableNames.purchase).del();
  await knex(tableNames.subscribe).del();
  await knex(tableNames.listitem).del();
  await knex(tableNames.list).del();
  await knex(tableNames.user).del();

  await knex(tableNames.user).insert([
    {
      email: "draxy80@gmail.com",
      password: await bcrypt.hash("Test123!", 12),
      first_name: "William",
      last_name: "Hamilton",
    },
    {
      email: "john@gmail.com",
      password: await bcrypt.hash("Test123!", 12),
      first_name: "John",
      last_name: "Carroll",
    },
    {
      email: "joe@gmail.com",
      password: await bcrypt.hash("Test123!", 12),
      first_name: "Joe",
      last_name: "Coady",
    },
  ]);

  
  await knex(tableNames.list).insert([
    {
      user_id: 1,
      name: "Xmas List",
      type: "xmas",
      description: "A Christmas List of gift ideas.",
      closing: "2021-12-24",
    },
    {
      user_id: 2,
      name: "Bday List",
      type: "bday",
      description: "A Birthday Wish List of gift ideas.",
      closing: "2022-08-01",
    },
    {
      user_id: 3,
      name: "Xmas List",
      type: "xmas",
      description: "A Christmas List of gift ideas.",
      closing: "2021-12-24",
    },
  ]);


  await knex(tableNames.listitem).insert([
    {
      list_id: 1,
      name: "Tommy Hilfiger Men's Core Flag Tee (Grayheather, Size XXL)",
      price: 24.99,
      url: "https://www.kogan.com/au/buy/tommy-hilfiger-mens-core-flag-tee-grayheather-size-xxl/",
      description: "The Tommy Hilfiger Men’s Crew Neck Flag Tee is a must-have in every man’s wardrobe. This versatile tee looks complete with an understated flag detail on the chest.",
      image_path: "1.png",
      status: "",
    },
    {
      list_id: 1,
      name: "Nowflex - Men's Sports Shorts - Heather Grey",
      price: 49.95,
      url: "https://www.catch.com.au/product/nowflex-mens-sports-shorts-heather-grey-7245894",
      description: "The Nowflex sports shorts are designed for a tapered custom-fit look. They're made from french terry fabrics, providing a casual comfort feel.",
      image_path: "2.png",
      status: "Purcahsed",
    },
    {
      list_id: 1,
      name: "Tommy Hilfiger Men's Brink Sneakers - Dark Blue",
      price: 119.99,
      url: "https://www.catch.com.au/product/tommy-hilfiger-mens-brink-sneakers-dark-blue-7450023",
      description: "Whether you're heading to a nightclub or out for day drinks, looking your best helps you feel the best. Step into the sleek, extremely comfortable Brink sneakers by Tommy Hilfiger for a look that will have you turning heads from the moment you walk through the door.",
      image_path: "3.png",
      status: "",
    },
    {
      list_id: 2,
      name: "Nikon D850 DSLR Camera w/ 24-120mm VR Lens Kit - Black",
      price: 4798.00,
      url: "https://www.catch.com.au/product/nikon-d850-dslr-camera-w-24-120mm-vr-lens-kit-black-6438001",
      description: "Take your photography skills to a whole new level with the D850 DSLR Camera. Offering advanced features like a 45.7 megapixel sensor, 153-point autofocus system, and comprehensive 4K UHD and Full HD movie functions, it provides a true connection to your subject and lets you capture each moment with uncompromised detail.",
      image_path: "4.png",
      status: "",
    },
    {
      list_id: 2,
      name: "Apple iPad 10.2-inch Wi-Fi + Cellular 64GB - Space Grey",
      price: 699.00,
      url: "https://www.catch.com.au/product/apple-ipad-10-2-inch-wi-fi-cellular-64gb-space-grey-8975776",
      description: "Powerful. Easy to use. Versatile. The new iPad has a beautiful 10.2-inch Retina display1, the powerful A13 Bionic chip, an Ultra Wide front camera with Centre Stage, and support for Apple Pencil and the Smart Keyboard.2 iPad lets you do more, more easily. All for an incredible price.",
      image_path: "5.png",
      status: "",
    },
    {
      list_id: 2,
      name: "Karrimor 3inch Shorts Pants Trousers Bottoms Mens",
      price: 58.28,
      url: "https://www.catch.com.au/product/karrimor-3inch-shorts-pants-trousers-bottoms-mens-4694456",
      description: "Conquer your next run with the 3inch Shorts from Karrimor. Crafted with an elasticated waistband and an internal drawstring tie, these bottoms offer a super-secure and comfortable fit. The lightweight design features reflective details and a single zipped pocket to the rear. > Shorts > Elasticated waistband > Internal drawstring > Single zipped back pocket > X Lite technology > Lightweight > Block colour > Printed logo > Karrimor branding > Reflective details > Mesh details > Shell: 100% polyester > Lining: 100% polyester > Machine washable",
      image_path: "6.png",
      status: "Purchased",
    },
    {
      list_id: 3,
      name: "Apple MacBook Pro 13-inch with Intel Processor 1TB - Silver",
      price: 2799.00,
      url: "https://www.catch.com.au/product/apple-macbook-pro-13-inch-with-intel-processor-1tb-silver-7186670",
      description: "The 13-inch MacBook Pro has a tenth-generation quad-core Intel processor with Turbo Boost up to 3.8GHz and Intel Iris Plus Graphics. A brilliant and colourful Retina display with True Tone technology for a more true-to-life viewing experience. A backlit Magic Keyboard and Touch ID. And the versatile Touch Bar for more ways to be productive. It’s a whole lot of power packed into a 13-inch notebook.",
      image_path: "7.png",
      status: "",
    },
    {
      list_id: 3,
      name: "Target Slim Chino Shorts - Green",
      price: 30.00,
      url: "https://www.catch.com.au/product/target-slim-chino-shorts-green-8618805",
      description: "The stormy sea green slim chino shorts offer the comfort of stretch with Lycra® fibres that move with your body. A versatile choice for everyday wear, they feature a structured waist with button closure and belt loops for a great fit.",
      image_path: "8.png",
      status: "",
    },
    {
      list_id: 3,
      name: "Target European Linen Shirt - White",
      price: 35.00,
      url: "https://www.catch.com.au/product/target-european-linen-shirt-white-8619364",
      description: "The European Linen Shirt is made from flax grown in Europe; a natural fibre with comfort, breathability and soft touch. It's pre-washed to reduce shrinkage and features a collared neck, short sleeves and chest pocket.",
      image_path: "9.png",
      status: "",
    },
  ]);


  await knex(tableNames.subscribe).insert([
    {
      user_id: 1,
      list_id: 2,
    },
    {
      user_id: 1,
      list_id: 3,
    },
    {
      user_id: 2,
      list_id: 3,
    },
    {
      user_id: 3,
      list_id: 1,
    },
    {
      user_id: 3,
      list_id: 2,
    },
  ]);


  await knex(tableNames.purchase).insert([
    {
      user_id: 1,
      listitem_id: 6,
    },
    {
      user_id: 3,
      listitem_id: 2,
    },
  ]);

};
