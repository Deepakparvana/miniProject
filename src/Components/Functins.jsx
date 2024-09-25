import axios from "axios";
import React, { useState, createContext,useEffect } from "react";

export const userContext = createContext();

  



const Functins = ({ children }) => {

  const [products, setProduct] = useState()


  // useEffect(()=>{
  //   axios.get('http://localhost:8000/categories')
    
  //   .then(res =>{ setProduct(res.products) })
  //   .catch(err => console.log(err))
  //  })





  const [cartItems, setCartItems] = useState([]); // Initialize cart state

  const handleAddToCart = (product) => {

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productsId) => {
    const newCart = cartItems.filter((products) => products.id !== productsId);
    setCartItems(newCart);
  };

  const handleIncreaseQuantity = (index) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const product = [{
    id: 1,
    name: "Men's Shoes",
    products: [
      {
        id: 101,
        name: "Running Sneakers",
        brand: "Nike",
        description: "Lightweight running sneakers designed for maximum comfort.",
        price: 120.00,
        sizes: [7, 8, 9, 10, 11, 12],
        colors: ["Red", "Blue", "Black"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg",
        inStock: true,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                 Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
      },
      {
        id: 102,
        name: "Men’s Classic Blue",
        brand: "Timberland",
        description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
        price: 150.00,
        sizes: [8, 9, 10, 11],
        colors: ["Blue","Brown", "Black"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019.jpg",
        inStock: true,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                 Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
      },
      {
        id: 103,
        name: "Men’s Classic Mint",
        brand: "Sperry",
        description: "Comfortable and stylish loafers for everyday wear.",
        price: 85.00,
        sizes: [7, 8, 9, 10, 11, 12],
        colors: ["Green","Navy", "Gray"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-600x600.jpg",
        inStock: false,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                 Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
      },
    
      {
        id: 104,
        name: `Men’s Earth-Tone Sneaker`,
        brand: "Steve Madden",
        description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
        price: 90.00,
        sizes: [5, 6, 7, 8, 9],
        colors: ["Gold", "Silver", "Black"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg",
        inStock: true,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                 Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
      },
      {
        id: 105,
        name: "Casual Sneakers",
        brand: "Adidas",
        description: "Trendy casual sneakers for everyday wear.",
        price: 100.00,
        sizes: [6, 7, 8, 9, 10],
        colors: ["Green", "Pink", "Blue"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg",
        inStock: false,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                 Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
      },
      {
        id: 107,
        name: "Running Shoes",
        brand: "Asics",
        description: "Performance running shoes with superior cushioning.",
        price: 110.00,
        sizes: [6, 7, 8, 9, 10],
        colors: ["Purple", "Black", "Blue"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg",
        inStock: true,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                 Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
      },
      {
        id: 106,
        name: "Men’s Navy Running",
        brand: "Asics",
        description: "Performance running shoes with superior cushioning.",
        price: 110.00,
        sizes: [6, 7, 8, 9, 10],
        colors: ["blue", "Black", "navy blue"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008.jpg",
        inStock: true,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                Egetodio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id..`
      },
      
      {
        id: 108,
        name: "Men’s Red Running",
        brand: "Asics",
        description: "Performance running shoes with superior cushioning.",
        price: 110.00,
        sizes: [6, 7, 8, 9, 10],
        colors: ["Red", "Black", "Blue"],
        imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006.jpg",
        inStock: true,
        quantity:1,
        category:"Men, Running",
        about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

                 Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
      }
    ]
  },
  {
    id: 2,
name: "Women's Shoes",
products: [ {
  id: 206,
  name: "Women’s Blue Training",
  brand: "Nike",
  description: "Lightweight running sneakers designed for maximum comfort.",
  price: 1299.00,
  sizes: [7, 8, 9, 10, 11, 12],
  colors: ["Red", "Blue", "Black"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg",
  inStock: true,
  category: "Training, Women",
  quantity:1,
  about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

          Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

          Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 205,
  name: "Women’s Candy City Run",
  brand: "Timberland",
  description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
  price: 1499.00,
  sizes: [8, 9, 10, 11],
  colors: ["Blue", "Brown", "Black"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about: `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

         Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

         Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 204,
  name: "Women’s Choco City Run",
  brand: "Sperry",
  description: "Comfortable and stylish loafers for everyday wear.",
  price: 999.00,
  sizes: [7, 8, 9, 10, 11, 12],
  colors: ["Green", "Navy", "Gray"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-013-600x600.jpg",
  inStock: false,
  category: "Running, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

         Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

         Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id`
},
{
  id: 207,
  name: "Women’s Cream Suede",
  brand: "Steve Madden",
  description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
  price: 1199.00,
  sizes: [5, 6, 7, 8, 9],
  colors: ["Gold", "Silver", "Black"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-600x600.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

        Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

        Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 208,
  name: "Women’s Green Training",
  brand: "Adidas",
  description: "Trendy casual sneakers for everyday wear.",
  price: 1299.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["Green", "Pink", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg",
  inStock: false,
  category: "Training, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

         Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

         Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`

},
{
  id: 209,
  name: "Women’s Mint Sneaker",
  brand: "Asics",
  description: "Performance running shoes with superior cushioning.",
  price: 1199.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["Purple", "Black", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

        Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

        Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 210,
  name: "Women’s Orange Sneaker",
  brand: "Asics",
  description: "Auctor eros suspendisse tellus venenatis sodales .",
  price: 1299.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["orange", "Black", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-009-600x600.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

          Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

         Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 211,
  name: "Women’s Peach Training",
  brand: "Asics",
  description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet",
  price: 1499.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["peach", "Black", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

         Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

        Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 212,
  name: "Women’s Pink Suede",
  brand: "Asics",
  description: "Auctor eros suspendisse tellus venenatis sodales purus.",
  price: 1099.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["pink", "Black", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

         Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

        Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 213,
  name: "Women’s Pink Training",
  brand: "Asics",
  description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet..",
  price: 1499.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["pink", "Black", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002.jpg",
  inStock: true,
  category: "Training, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

         Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

         Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 214,
  name: "Women’s Tan Sneaker",
  brand: "Asics",
  description: "Auctor eros suspendisse tellus venenatis sodales purus",
  price: 1199.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["tan", "Black", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

        Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

        Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
},
{
  id: 215,
  name: "Women’s Tosca City Run",
  brand: "Asics",
  description: "Auctor eros suspendisse tellus venenatis sodales purus",
  price: 1599.00,
  sizes: [6, 7, 8, 9, 10],
  colors: ["Green", "Black", "Blue"],
  imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012.jpg",
  inStock: true,
  category: "Sneaker, Women",
  quantity:1,
  about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

        Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

        Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
}
]
  
    }


];

  return (
    <userContext.Provider
      value={{
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
        handleIncreaseQuantity,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default Functins;

// import React, { createContext, useState } from 'react';

// export const userContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([
//     // Example initial state of cart items
//     {
//       id: 206,
//       name: "Women’s Blue Training 2 ",
//       brand: "Nike",
//       description: "Lightweight running sneakers designed for maximum comfort.",
//       price: 120.00,
//       sizes: [7, 8, 9, 10, 11, 12],
//       colors: ["Red", "Blue", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg",
//       inStock: true,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },
//     {
//       id: 205,
//       name: "Women’s Candy City Run",
//       brand: "Timberland",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//       price: 150.00,
//       sizes: [8, 9, 10, 11],
//       colors: ["Blue","Brown", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg",
//       inStock: true
//     },
//     {
//       id: 204,
//       name: "Women’s Choco City Run",
//       brand: "Sperry",
//       description: "Comfortable and stylish loafers for everyday wear.",
//       price: 85.00,
//       sizes: [7, 8, 9, 10, 11, 12],
//       colors: ["Green","Navy", "Gray"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-013-600x600.jpg",
//       inStock: false,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },

//     {
//       id: 207,
//       name: `Women’s Cream Suede`,
//       brand: "Steve Madden",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//       price: 90.00,
//       sizes: [5, 6, 7, 8, 9],
//       colors: ["Gold", "Silver", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-600x600.jpg",
//       inStock: true,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },
//     {
//       id: 208,
//       name: "Women’s Green Training",
//       brand: "Adidas",
//       description: "Trendy casual sneakers for everyday wear.",
//       price: 100.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["Green", "Pink", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg",
//       inStock: false
//     },
//     {
//       id: 209,
//       name: "Women’s Mint Sneaker",
//       brand: "Asics",
//       description: "Performance running shoes with superior cushioning.",
//       price: 110.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["Purple", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg",
//       inStock: true,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },
//     {
//       id: 101,
//       name: "Running Sneakers",
//       brand: "Nike",
//       description: "Lightweight running sneakers designed for maximum comfort.",
//       price: 120.00,
//       sizes: [7, 8, 9, 10, 11, 12],
//       colors: ["Red", "Blue", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg",
//       inStock: true,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'

//     },
//     {
//       id: 102,
//       name: "Men’s Classic Blue",
//       brand: "Timberland",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//       price: 150.00,
//       sizes: [8, 9, 10, 11],
//       colors: ["Blue","Brown", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019.jpg",
//       inStock: true,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },
//     {
//       id: 103,
//       name: "Men’s Classic Mint",
//       brand: "Sperry",
//       description: "Comfortable and stylish loafers for everyday wear.",
//       price: 85.00,
//       sizes: [7, 8, 9, 10, 11, 12],
//       colors: ["Green","Navy", "Gray"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-600x600.jpg",
//       inStock: false,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },

//     {
//       id: 201,
//       name: `Men’s Earth-Tone Sneaker`,
//       brand: "Steve Madden",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//       price: 90.00,
//       sizes: [5, 6, 7, 8, 9],
//       colors: ["Gold", "Silver", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg",
//       inStock: true,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },
//     {
//       id: 202,
//       name: "Casual Sneakers",
//       brand: "Adidas",
//       description: "Trendy casual sneakers for everyday wear.",
//       price: 100.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["Green", "Pink", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg",
//       inStock: false,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     },
//     {
//       id: 203,
//       name: "Running Shoes",
//       brand: "Asics",
//       description: "Performance running shoes with superior cushioning.",
//       price: 110.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["Purple", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg",
//       inStock: true,
//       about : 'These lightweight running sneakers are perfect for those who prioritize comfort during their workouts. Crafted by Nike, they offer a sleek design with a choice of vibrant colors like Red, Blue, and Black. Ideal for both casual runners and fitness enthusiasts, these shoes ensure that your feet remain supported mile after mile.'
//     }
//   ]);

//   // Function to remove an item from the cart
//   const handleRemoveFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);  // Remove item from the array
//     setCartItems(newCartItems);     // Update the state
//   };

//   // Function to increase the quantity of an item
//   const handleIncreaseQuantity = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems[index].quantity += 1;  // Increase quantity
//     setCartItems(newCartItems);         // Update the state
//   };

//   return (
//     <userContext.Provider value={{ cartItems, handleRemoveFromCart, handleIncreaseQuantity }}>
//       {children}
//     </userContext.Provider>
//   );
// };
