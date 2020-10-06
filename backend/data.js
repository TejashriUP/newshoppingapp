import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'basir',
      email: 'tinu@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best shoes sellers',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'minu@example.com',
      password: bcrypt.hashSync('1234', 8),
      isSeller: true,
      seller: {
        name: 'Lee',
        logo: '/images/logo2.png',
        description: 'great shoes sellers',
        rating: 4.0,
        numReviews: 450,
      },
    },
    {
      name: 'Sara',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts', // 680 x 830 px
      image: '/images/s1.jpg',
      price: 800,
      brand: 'Nike',
      countInStock: 20,
      rating: 4.5,
      numReviews: 15,
      description: 'This is a great product.',
    },
    {
      name: 'Lacoste Dress Shirt',
      category: 'Shirts', // 680 x 830 px
      image: '/images/s2.jpg',
      price: 1200,
      brand: 'Lacoste',
      countInStock: 0,
      rating: 4.0,
      numReviews: 15,
      description: 'This is a great product.',
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirts', // 680 x 830 px
      image: '/images/s3.jpg',
      price: 1050,
      brand: 'Adidas',
      countInStock: 20,
      rating: 4.9,
      numReviews: 15,
      description: 'This is a great product.',
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants', // 680 x 830 px
      image: '/images/s4.jpg',
      price: 500,
      brand: 'Nike',
      countInStock: 20,
      rating: 4.5,
      numReviews: 9,
      description: 'This is a great product.',
    },
    {
      name: 'D&G Slim Pant',
      category: 'Pants', // 680 x 830 px
      image: '/images/s5.jpg',
      price: 350,
      brand: 'D&G',
      countInStock: 20,
      rating: 4.5,
      numReviews: 7,
      description: 'This is a great product.',
    },
    {
      name: 'Lacoste Slim Pant',
      category: 'Pants', // 680 x 830 px
      image: '/images/s6.jpg',
      price: 560,
      brand: 'Lacoste',
      countInStock: 20,
      rating: 4.7,
      numReviews: 10,
      description: 'This is a great product.',
    },
  ],
};
export default data;
