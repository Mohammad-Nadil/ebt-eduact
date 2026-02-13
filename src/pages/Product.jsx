import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";

const Product = () => {
  const products = [
    { id: 1, name: "Sofa Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 2, name: "Relax Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 3, name: "Office Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 4, name: "Relax Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 5, name: "Long Stool", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 6, name: "Round Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 7, name: "Round Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 8, name: "Round Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
    { id: 9, name: "Round Chair", price: 25.0, oldPrice: 30.0, rating: 5 },
  ];

  return (
    <>
      <section className="py-25">
        <div className="bg-gray-50 min-h-screen">
          {/* Header Section */}
          <div className="bg-[#0b0d17] text-white pt-35 pb-30 text-center">
            <h1 className="text-7xl font-bold uppercase font-urbanist leading-12 tracking-widest">
              Products
            </h1>
            <p className="text-lg font-normal mt-2 font-urbanist">
              Home / Shop
            </p>
          </div>

          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-1/4 space-y-8">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-full p-3 bg-orange-500 text-white placeholder-white
                  rounded-md focus:outline-none font-urbanist"
                />
              </div>

              {/* Price Filter */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 border-b pb-2 font-urbanist">
                  Price
                </h3>
                <input type="range" className="w-full accent-orange-500" />
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500 font-urbanist">
                    $10 - $100
                  </span>
                  <button className="bg-gray-100 px-4 py-1 text-xs rounded shadow-sm font-urbanist">
                    Apply
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 border-b pb-2 font-urbanist">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {[
                    "Web Development",
                    "Social Marketing",
                    "Technology",
                    "Business & Finance",
                  ].map((cat) => (
                    <li
                      key={cat}
                      className="flex items-center text-gray-600 hover:text-orange-500 cursor-pointer transition"
                    >
                      <span className="text-orange-500 font-urbanist mr-2">
                        <MdKeyboardDoubleArrowRight />
                      </span>
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-500 font-urbanist">Showing 1-9 of 12 Results</p>
                <select className="border p-2 rounded text-sm bg-gray-50 outline-none font-urbanist">
                  <option>Short By Popular</option>
                  <option>Price: Low to High</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center group font-urbanist"
                  >
                    
                    {/* Image with NavLink to ProductDetail */}
                    <NavLink to={`/product/${item.id}`}>
                      <div className="h-48 bg-gray-50 mb-4 rounded flex items-center
                      justify-center relative overflow-hidden cursor-pointer group-hover:shadow-lg
                      group-hover:scale-105 transition-transform duration-500">
                        <span className="text-gray-300 font-urbanist">Product Image</span>

                        {/* Hover Icons */}
                        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                          <span className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white">
                            <CiHeart />
                          </span>
                          <span className="bg-white p-2 rounded-full shadow hover:bg-orange-500 hover:text-white">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00027 13.8975C6.96623 13.9011 4.99399 13.1987 3.42027 11.91L1.10277 10.0125C0.952284 9.89011 0.83097 9.73574 0.747648 9.5606C0.664327 9.38545 0.621094 9.19394 0.621094 8.99998C0.621094 8.80603 0.664327 8.61451 0.747648 8.43936C0.83097 8.26422 0.952284 8.10985 1.10277 7.98748L3.42027 6.08998C4.99647 4.80598 6.96727 4.10486 9.00027 4.10486C11.0333 4.10486 13.0041 4.80598 14.5803 6.08998L16.8978 7.98748C17.0482 8.10985 17.1696 8.26422 17.2529 8.43936C17.3362 8.61451 17.3794 8.80603 17.3794 8.99998C17.3794 9.19394 17.3362 9.38545 17.2529 9.5606C17.1696 9.73574 17.0482 9.89011 16.8978 10.0125L14.5803 11.91C13.0072 13.1998 11.0345 13.9024 9.00027 13.8975ZM9.00027 5.24998C7.22892 5.24042 5.50893 5.84467 4.13277 6.95998L1.81527 8.85748C1.79468 8.87508 1.77816 8.89694 1.76683 8.92154C1.75549 8.94613 1.74963 8.9729 1.74963 8.99998C1.74963 9.02706 1.75549 9.05383 1.76683 9.07843C1.77816 9.10303 1.79468 9.12488 1.81527 9.14248L4.13277 11.04C5.50852 12.1646 7.23082 12.779 9.00777 12.779C10.7847 12.779 12.507 12.1646 13.8828 11.04L16.2003 9.14248C16.2208 9.12488 16.2374 9.10303 16.2487 9.07843C16.26 9.05383 16.2659 9.02706 16.2659 8.99998C16.2659 8.9729 16.26 8.94613 16.2487 8.92154C16.2374 8.89694 16.2208 8.87508 16.2003 8.85748L13.8678 6.95998C12.491 5.84576 10.7714 5.24166 9.00027 5.24998Z" fill="#697585"/>
                            <path d="M9 13.6875C8.0729 13.6875 7.16662 13.4126 6.39577 12.8975C5.62491 12.3824 5.0241 11.6504 4.66932 10.7938C4.31453 9.9373 4.2217 8.9948 4.40257 8.08552C4.58344 7.17623 5.02988 6.341 5.68544 5.68544C6.341 5.02988 7.17623 4.58344 8.08552 4.40257C8.9948 4.2217 9.9373 4.31453 10.7938 4.66932C11.6504 5.0241 12.3824 5.62491 12.8975 6.39577C13.4126 7.16662 13.6875 8.0729 13.6875 9C13.6875 10.2432 13.1936 11.4355 12.3146 12.3146C11.4355 13.1936 10.2432 13.6875 9 13.6875ZM9 5.4375C8.29541 5.4375 7.60663 5.64644 7.02078 6.03789C6.43493 6.42934 5.97832 6.98573 5.70868 7.63669C5.43904 8.28765 5.36849 9.00395 5.50595 9.69501C5.64341 10.3861 5.98271 11.0208 6.48093 11.5191C6.97916 12.0173 7.61394 12.3566 8.30499 12.4941C8.99605 12.6315 9.71235 12.561 10.3633 12.2913C11.0143 12.0217 11.5707 11.5651 11.9621 10.9792C12.3536 10.3934 12.5625 9.7046 12.5625 9C12.5625 8.05517 12.1872 7.14903 11.5191 6.48093C10.851 5.81284 9.94484 5.4375 9 5.4375Z" fill="#697585"/>
                            <path d="M11.25 8.99995C11.2502 9.4709 11.1026 9.93004 10.8281 10.3127C10.5535 10.6953 10.1658 10.9822 9.71963 11.1328C9.27342 11.2834 8.7912 11.2902 8.34091 11.1523C7.89062 11.0143 7.49497 10.7386 7.20971 10.3638C6.92445 9.9891 6.76397 9.53431 6.75087 9.06355C6.73777 8.59278 6.87273 8.12977 7.13671 7.73977C7.40069 7.34976 7.7804 7.05242 8.22232 6.88965C8.66425 6.72687 9.14611 6.70687 9.6 6.83245C9.45403 7.02436 9.37499 7.25883 9.375 7.49995C9.375 7.79832 9.49353 8.08447 9.7045 8.29545C9.91548 8.50643 10.2016 8.62495 10.5 8.62495C10.7411 8.62496 10.9756 8.54593 11.1675 8.39995C11.2219 8.59532 11.2497 8.79715 11.25 8.99995Z" fill="#697585"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </NavLink>

                    <h4 className="font-semibold text-gray-800 font-urbanist">{item.name}</h4>

                    <div className="flex justify-center gap-2 my-1">
                      <span className="text-orange-500 font-bold font-urbanist">${item.price.toFixed(2)}</span>
                      <span className="text-gray-400 line-through font-urbanist">${item.oldPrice.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-center text-sm mb-4">
                      {[1, 2, 3, 4, 5].map((star) =>
                        star <= item.rating ? (
                          <FaStar key={star} className="text-[#F57005]" />
                        ) : (
                          <FaRegStar key={star} className="text-gray-300" />
                        )
                      )}
                    </div>

                    <NavLink
                      to="/cart"
                      className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md
                      hover:bg-orange-500 hover:text-white transition w-full
                      font-urbanist inline-block"
                    >
                      Add to Cart
                    </NavLink>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;