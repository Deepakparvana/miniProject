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
        
        const menCategories = res.data.map(category => ({
          ...category,
          products: category.products.filter(product => 
            product.category.startsWith("Men")
          )
        }));
        setCategories(menCategories); 
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
   
    alert(`View Product: ${product.name}`);
  };

  return (
    <div className="App">
      <ProductList 
        categories={categories}
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












// const categories = [
//   // Your categories data...
//   {
//     id: 1,
//     name: "Men's Shoes",
//     products: [
//       {
//         id: 101,
//         name: "Running Sneakers",
//         brand: "Nike",
//         description: "Lightweight running sneakers designed for maximum comfort.",
//         price: 120.00,
//         sizes: [7, 8, 9, 10, 11, 12],
//         colors: ["Red", "Blue", "Black"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg",
//         inStock: true,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                  Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                  Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//       },
//       {
//         id: 102,
//         name: "Men’s Classic Blue",
//         brand: "Timberland",
//         description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//         price: 150.00,
//         sizes: [8, 9, 10, 11],
//         colors: ["Blue","Brown", "Black"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019.jpg",
//         inStock: true,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                  Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                  Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//       },
//       {
//         id: 103,
//         name: "Men’s Classic Mint",
//         brand: "Sperry",
//         description: "Comfortable and stylish loafers for everyday wear.",
//         price: 85.00,
//         sizes: [7, 8, 9, 10, 11, 12],
//         colors: ["Green","Navy", "Gray"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-600x600.jpg",
//         inStock: false,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                  Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                  Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//       },
    
//       {
//         id: 104,
//         name: `Men’s Earth-Tone Sneaker`,
//         brand: "Steve Madden",
//         description: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
//         price: 90.00,
//         sizes: [5, 6, 7, 8, 9],
//         colors: ["Gold", "Silver", "Black"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg",
//         inStock: true,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                  Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                  Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//       },
//       {
//         id: 105,
//         name: "Casual Sneakers",
//         brand: "Adidas",
//         description: "Trendy casual sneakers for everyday wear.",
//         price: 100.00,
//         sizes: [6, 7, 8, 9, 10],
//         colors: ["Green", "Pink", "Blue"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg",
//         inStock: false,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                  Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                  Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//       },
//       {
//         id: 107,
//         name: "Running Shoes",
//         brand: "Asics",
//         description: "Performance running shoes with superior cushioning.",
//         price: 110.00,
//         sizes: [6, 7, 8, 9, 10],
//         colors: ["Purple", "Black", "Blue"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg",
//         inStock: true,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                  Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                  Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//       },
//       {
//         id: 106,
//         name: "Men’s Navy Running",
//         brand: "Asics",
//         description: "Performance running shoes with superior cushioning.",
//         price: 110.00,
//         sizes: [6, 7, 8, 9, 10],
//         colors: ["blue", "Black", "navy blue"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008.jpg",
//         inStock: true,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                 Egetodio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                 Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id..`
//       },
      
//       {
//         id: 108,
//         name: "Men’s Red Running",
//         brand: "Asics",
//         description: "Performance running shoes with superior cushioning.",
//         price: 110.00,
//         sizes: [6, 7, 8, 9, 10],
//         colors: ["Red", "Black", "Blue"],
//         imageUrl: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006.jpg",
//         inStock: true,
//         quantity:1,
//         category:"Men, Running",
//         about : `Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.

//                  Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.

//                  Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id.`
//       }
//     ]  
//     }
   
// ];