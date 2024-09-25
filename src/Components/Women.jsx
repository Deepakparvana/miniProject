import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import QuickViewModal from './QuickViewModal';
import axios from 'axios';

function Man() {
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/categories')
      .then((res) => {
        // Filter to get only the Women's Shoes category
        const womenCategory = res.data.find(category => category.name === "Women's Shoes");
        setCategories(womenCategory ? [womenCategory] : []); // Set only the Women's Shoes category
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const handleViewProduct = (product) => {
    // You can redirect to a detailed product page here or implement your logic
    alert(`View Product: ${product.name}`);
  };

  return (
    <div className="App">
      <ProductList 
        categories={categories} // Pass the filtered categories to ProductList
        onQuickView={handleQuickView} 
        onViewProduct={handleViewProduct} 
      />
      {isQuickViewOpen && (
        <QuickViewModal product={selectedProduct} onClose={handleCloseQuickView} />
      )}
    </div>
  );
}

export default Man;









// const categories = [{
//   id: 1,
//   name: "women's Shoes",
//   products: [
//     {
//       id: 206,
//       name: "Women’s Blue Training",
//       brand: "Nike",
//       description: "Lightweight running sneakers designed for maximum comfort.",
//       price: 1299.00,
//       sizes: [7, 8, 9, 10, 11, 12],
//       colors: ["Red", "Blue", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg",
//       inStock: true,
//       category: "Training, Women",
//       quantity:1,
//       about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//               Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//               Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 205,
//       name: "Women’s Candy City Run",
//       brand: "Timberland",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//       price: 1499.00,
//       sizes: [8, 9, 10, 11],
//       colors: ["Blue", "Brown", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about: `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//              Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//              Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 204,
//       name: "Women’s Choco City Run",
//       brand: "Sperry",
//       description: "Comfortable and stylish loafers for everyday wear.",
//       price: 999.00,
//       sizes: [7, 8, 9, 10, 11, 12],
//       colors: ["Green", "Navy", "Gray"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-013-600x600.jpg",
//       inStock: false,
//       category: "Running, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//              Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//              Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id`
//     },
//     {
//       id: 207,
//       name: "Women’s Cream Suede",
//       brand: "Steve Madden",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//       price: 1199.00,
//       sizes: [5, 6, 7, 8, 9],
//       colors: ["Gold", "Silver", "Black"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-600x600.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//             Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//             Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 208,
//       name: "Women’s Green Training",
//       brand: "Adidas",
//       description: "Trendy casual sneakers for everyday wear.",
//       price: 1299.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["Green", "Pink", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-600x600.jpg",
//       inStock: false,
//       category: "Training, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//              Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//              Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
  
//     },
//     {
//       id: 209,
//       name: "Women’s Mint Sneaker",
//       brand: "Asics",
//       description: "Performance running shoes with superior cushioning.",
//       price: 1199.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["Purple", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//             Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//             Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 210,
//       name: "Women’s Orange Sneaker",
//       brand: "Asics",
//       description: "Auctor eros suspendisse tellus venenatis sodales .",
//       price: 1299.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["orange", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-009-600x600.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//               Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//              Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 211,
//       name: "Women’s Peach Training",
//       brand: "Asics",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet",
//       price: 1499.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["peach", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//              Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//             Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 212,
//       name: "Women’s Pink Suede",
//       brand: "Asics",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus.",
//       price: 1099.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["pink", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
  
//              Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.
  
//             Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 213,
//       name: "Women’s Pink Training",
//       brand: "Asics",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet..",
//       price: 1499.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["pink", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002.jpg",
//       inStock: true,
//       category: "Training, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//              Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//              Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 214,
//       name: "Women’s Tan Sneaker",
//       brand: "Asics",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus",
//       price: 1199.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["tan", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//             Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//             Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     },
//     {
//       id: 215,
//       name: "Women’s Tosca City Run",
//       brand: "Asics",
//       description: "Auctor eros suspendisse tellus venenatis sodales purus",
//       price: 1599.00,
//       sizes: [6, 7, 8, 9, 10],
//       colors: ["Green", "Black", "Blue"],
//       imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012.jpg",
//       inStock: true,
//       category: "Sneaker, Women",
//       quantity:1,
//       about:`Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//             Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//             Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//     }
//   ]

//   }


// ]
