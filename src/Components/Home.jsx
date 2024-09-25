import React from 'react';
import playBg from './assest/playBg.jpg';
import home2 from './assest/home2.jpg';
import material from './assest/material.webp';
import menshoe from './assest/menshoe.jpg';
import womenshoe from './assest/womenshoe.jpg';

const Home = () => {
  const products = [
    { id: 1, name: `Men's Black Running`, href: '#', price: '₹1599', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg', imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.' },
    { id: 2, name: `Men's Classic Blue`, href: '#', price: '₹1999', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-600x600.jpg', imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.' },
    { id: 3, name: `Men's Classic Mint`, href: '#', price: '₹1999', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-600x600.jpg', imageAlt: 'Person using a pen to cross a task off a productivity paper card.' },
    { id: 4, name: `Men's Earth-Tone Sneaker`, href: '#', price: '₹1699', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-600x600.jpg', imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.' },
    { id: 5, name: `Women's Sporty Sandals`, href: '#', price: '₹1299', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-600x600.jpg', imageAlt: 'Lightweight and comfortable sandals for sports activities.' },
    { id: 6, name: `Men's Casual Loafers`, href: '#', price: '₹1799', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg', imageAlt: 'Stylish loafers with a classic design.' },
    { id: 15, name: `Women's Ankle Boots`, href: '#', price: '₹1599', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-600x600.jpg', imageAlt: 'Chic ankle boots for versatile styling.' },
    { id: 16, name: `Men's Canvas Sneakers`, href: '#', price: '₹1199', imageSrc: 'https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg', imageAlt: 'Casual canvas sneakers for everyday wear.' }
  ];

  return (
    <>
      <div className="bg-zinc-600 min-h-screen p-5">
        
        <div
          style={{ backgroundImage: `url(${playBg})` }}
          className="w-full p-2 mt-10 bg-cover bg-center h-3/4 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] flex items-center justify-start"
        >
          <div className="p-2 md:p-6 lg:p-8 bg-black/50 rounded-lg shadow-lg max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-700 to-blue-500">
              Love the Planet<br /> We Walk On
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold text-cyan-400 mt-4">
              Bibendum fermentum, aenean donec pretium aliquam blandit <br />
              tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <a href="/men">
                <button
                  className="w-full sm:w-48 bg-transparent border-2 border-cyan-500 text-cyan-500 px-4 py-2 rounded-lg shadow-md hover:bg-cyan-500 hover:text-zinc-600 transition-colors duration-200"
                >
                  SHOP MEN
                </button>
              </a>
              <a href="/women">
                <button
                  className="w-full sm:w-48 bg-transparent border-2 border-pink-500 text-pink-500 px-4 py-2 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-colors duration-200"
                >
                  SHOP WOMEN
                </button>
              </a>
            </div>
          </div>
        </div>

        
        <div className="flex flex-wrap justify-center items-center my-10">
          <h1 className="text-cyan-500 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-4">
            As seen in:
          </h1>
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-2 sm:space-y-0">
            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg" alt="icon" className="w-32 md:w-36 lg:w-44" />
            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg" alt="icon" className="w-32 md:w-36 lg:w-44" />
            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg" alt="icon" className="w-32 md:w-36 lg:w-44" />
            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg" alt="icon" className="w-32 md:w-36 lg:w-44" />
            <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg" alt="icon" className="w-32 md:w-36 lg:w-44" />
          </div>
        </div>
        <div className="border-t-2 border-cyan-500 "></div>

       
        <div className="flex flex-col md:flex-row mt-10">
          <img className="w-full md:w-1/2 mt-10" src={home2} alt="img" />
          <div className="p-8 mt-10">
            <h1 className="text-4xl text-stone-400">Selected materials<br /> designed for comfort<br /> and sustainability</h1>
            <p className="p-5 text-xl">Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
            <a href="/home">
              <p className="text-lg underline decoration-orange-underline">Read More</p>
            </a>
          </div>
        </div>

        
        <div className="mt-10">
          <div className="p-5 mt-5 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-cyan-400 p-5">See how your shoes are made</h1>
            <p className="text-zinc-400">Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices</p>
          </div>
          <img className="w-full" src={material} alt="img" />
        </div>

     

        <div className="mt-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-cyan-400 p-5 text-center">Our Best Sellers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-56 object-cover rounded-t-lg" />
                <h3 className="text-xl text-gray-900 font-bold mt-4">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <a href={product.href} className="text-cyan-500 hover:text-cyan-600 underline mt-4 block">View Details</a>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-10 flex flex-col md:flex-row">
          <div className="p-8">
            <h1 className="text-4xl text-stone-400">Our store<br /> for women</h1>
            <p className="p-5 text-xl">Faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
            <a href="/home">
              <p className="text-lg underline decoration-orange-underline">See Collection</p>
            </a>
          </div>
          <img className="w-full md:w-1/2" src={womenshoe} alt="img" />
        </div>

        <div className="flex flex-col md:flex-row mt-10">
          <img className="w-full md:w-1/2" src={menshoe} alt="img" 
          
          />
          <div className="p-8">
            <h1 className="text-4xl text-stone-400">Our store<br /> for men</h1>
            <p className="p-5 text-xl">Ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
            <a href="/home">
              <p className="text-lg underline decoration-orange-underline">See Collection</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
