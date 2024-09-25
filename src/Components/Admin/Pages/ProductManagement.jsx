import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    imageUrl: "",
    sizes: [],
    colors: [],
    inStock: false,
    quantity: 0,
    categoryId: "",
    about: "",
  });

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8000/categories")
      .then((response) => {
        const allProducts = response.data.flatMap((category) =>
          category.products.map((product) => ({
            ...product,
            categoryId: category.id,
          }))
        );
        setProducts(allProducts);
        setSearchResults(allProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const { id, categoryId } = editingProduct;

    axios
      .get(`http://localhost:8000/categories/${categoryId}`)
      .then((response) => {
        const category = response.data;
        const updatedProducts = category.products.map((product) =>
          product.id === id ? editingProduct : product
        );

        return axios.patch(`http://localhost:8000/categories/${categoryId}`, {
          products: updatedProducts,
        });
      })
      .then(() => {
        setEditingProduct(null);
        fetchProducts();
        toast.success("Product updated successfully!");
      })
      .catch((error) => {
        toast.error(`Failed to update product: ${error.message}`);
      });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (productId, categoryId) => {
    // Find the category first
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  
  if (!confirmDelete) {
    return; // Exit if user cancels
  }

  // Proceed with deletion if user confirmed
  axios
    .get(`http://localhost:8000/categories/${categoryId}`)
    .then((response) => {
      const category = response.data;
      // Filter out the product to be deleted
      const updatedProducts = category.products.filter((product) => product.id !== productId);

      // Update the server with the new product list
      return axios.patch(`http://localhost:8000/categories/${categoryId}`, { products: updatedProducts });
    })
    .then(() => {
      // Now update the local state
      const updatedLocalProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedLocalProducts);
      setSearchResults(updatedLocalProducts); // Ensure search results are also updated
      toast.success("Product removed successfully!");
    })
    .catch((err) => {
      toast.error(`Failed to remove product: ${err.message}`);
    });
};

  // const handleEdit = (product) => {
  //   setEditingProduct(product);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "sizes" || name === "colors") {
      setNewProduct({
        ...newProduct,
        [name]: value.split(","),
      });
    } else if (name === "categoryId") {
      setNewProduct({
        ...newProduct,
        categoryId: Number(value), // Store categoryId as a number
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
  
    if (!newProduct.categoryId) {
      toast.error("Please select a category");
      return;
    }
  
    axios
      .get(`http://localhost:8000/categories/${newProduct.categoryId}`)
      .then((response) => {
        const category = response.data;
        const updatedProducts = [...category.products, { ...newProduct, id: Date.now() }];
  
        return axios.patch(`http://localhost:8000/categories/${newProduct.categoryId}`, {
          products: updatedProducts,
        });
      })
      .then(() => {
        setNewProduct({
          name: "",
          brand: "",
          price: "",
          description: "",
          imageUrl: "",
          sizes: [],
          colors: [],
          inStock: false,
          quantity: 0,
          categoryId: "",
          about: "",
        });
        fetchProducts();
        toast.success("Product added successfully!");
      })
      .catch((error) => {
        toast.error(`Failed to add product: ${error.message}`);
      });
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="bg-cyan-950 bg-opacity-40">

    <div className="container mx-auto px-4 ml- overflow-auto w-5/6">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Products</h2>

     
     

     
      <form onSubmit={handleAddProduct} className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={newProduct.brand}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newProduct.imageUrl}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="sizes"
          placeholder="Sizes (comma separated)"
          value={newProduct.sizes.join(",")}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="colors"
          placeholder="Colors (comma separated)"
          value={newProduct.colors.join(",")}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <div className="flex flex-row items-center mb-2">
          <label className="text-cyan-800 mr-2">In Stock</label>
          <input
            type="checkbox"
            name="inStock"
            checked={newProduct.inStock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, inStock: e.target.checked })
            }
            className="mb-2"
          />
        </div>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <select
  name="categoryId"
  value={newProduct.categoryId}
  onChange={handleInputChange}
  className="border p-2 mb-2 w-full"
  required
>
  <option value="">Select Category</option>
  <option value="1">Men's Shoes</option>
  <option value="2">Women's Shoes</option>
</select>
        <textarea
          name="about"
          placeholder="About"
          value={newProduct.about}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
        >
          Add Product
        </button>
      </form>
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 flex-grow"
        />
        <button
          onClick={handleSearch}
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 ml-2"
        >
          Search
        </button>
      </div>

     
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-zinc-200 bg-opacity-50">
          {searchResults.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-lg p-4 bg-cyan-800 bg-opacity-20">
              {editingProduct && editingProduct.id === product.id ? (
                <form onSubmit={handleUpdate}>
                  <input
                    type="text"
                    name="name"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <input
                    type="text"
                    name="brand"
                    value={editingProduct.brand}
                    onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <input
                    type="number"
                    name="price"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <textarea
                    name="description"
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <input
                    type="text"
                    name="imageUrl"
                    value={editingProduct.imageUrl}
                    onChange={(e) => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <input
                    type="text"
                    name="sizes"
                    value={editingProduct.sizes.join(",")}
                    onChange={(e) => setEditingProduct({ ...editingProduct, sizes: e.target.value.split(",") })}
                    className="border p-2 mb-2 w-full"
                  />
                  <input
                    type="text"
                    name="colors"
                    value={editingProduct.colors.join(",")}
                    onChange={(e) => setEditingProduct({ ...editingProduct, colors: e.target.value.split(",") })}
                    className="border p-2 mb-2 w-full"
                  />
                  <div className="flex flex-row items-center mb-2">
                    <label className="text-cyan-800 mr-2">In Stock</label>
                    <input
                      type="checkbox"
                      name="inStock"
                      checked={editingProduct.inStock}
                      onChange={(e) => setEditingProduct({ ...editingProduct, inStock: e.target.checked })}
                      className="mb-2"
                    />
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    value={editingProduct.quantity}
                    onChange={(e) => setEditingProduct({ ...editingProduct, quantity: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <input
                    type="text"
                    name="category"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <textarea
                    name="about"
                    value={editingProduct.about}
                    onChange={(e) => setEditingProduct({ ...editingProduct, about: e.target.value })}
                    className="border p-2 mb-2 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
                  >
                    Update Product
                  </button>
                </form>
              ) : (
                <>
                <p>Id:{product.id} </p>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-zinc-700">{product.brand}</p>
                  <p className="text-zinc-800 font-bold">₹{product.price}</p>
                  <p className="text-sm text-zinc-900 mt-2">{product.description}</p>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-zinc-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id, product.categoryId)}
                      className="bg-zinc-500 text-white px-4 py-2 rounded hover:bg-zinc-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="bg-zinc-500 text-white px-4 py-2 rounded hover:bg-zinc-600"
                    >
                      View
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500 mt-4">No products found</p>
      )}

      
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>{selectedProduct.id}</p>
            <h3 className="text-lg font-bold mb-2">{selectedProduct.name}</h3>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <p>
              <strong>Brand:</strong> {selectedProduct.brand}
            </p>
            <p>
              <strong>Price:</strong> ₹{selectedProduct.price}
            </p>
            <p className="mt-2">{selectedProduct.description}</p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>  
         </div>
  );
};

export default ProductManagement;
