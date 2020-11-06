const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Shirts" },
    { name: "Pants" },
    { name: "Jackets" },
    { name: "Hats" },
    { name: "Accessories" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "The O.G",
      description:
        "Our flagship shirt, the one that started it all. Ideal for activity or the casual Sunday Funday.",
      image: "white-shirt.jpg",
      sizes: ['S ', 'M ', 'L ', 'XL'],
      category: categories[0]._id,
      price: 14.99,
    },
    {
      name: "The Getaway",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "getaway.jpg",
      category: categories[0]._id,
      sizes: ['S ', 'M ', 'L ', 'XL'],
      price: 24.00,
    },
    {
      name: "The Longsleever",
      category: categories[0]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "longsleeve.jpg",
      sizes: ['S ', 'L'],
      price: 31.99,
    },
    {
      name: "The Cut too short",
      category: categories[1]._id,
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "pants.jpg",
      sizes: ['M ', 'L ', 'XL'],
      price: 53.99,
    },
    {
      name: "The Fancy Chinos",
      category: categories[1]._id,
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "chinos.jpg",
      sizes: ['S ', 'M ', 'L ', 'XL'],
      price: 45.99,
    },
    {
      name: "The Mustard",
      category: categories[2]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "mustard.jpg",
      sizes: ['L ', 'XL'],
      price: 29.99,
    },
    {
      name: "The Spooky",
      category: categories[2]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "spooky.jpg",
      sizes: ['S '],
      price: 29.99,
    },
    {
      name: "The Only One",
      category: categories[3]._id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "hat.jpg",
      price: 14.99,
    },
    {
      name: "The Knapsack",
      category: categories[4]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "knapsack.jpg",
      price: 99.99,
    },
    {
      name: "The Sunglasses",
      category: categories[4]._id,
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "sunglasses.jpg",
      price: 22.99,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[5]._id, products[7]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
