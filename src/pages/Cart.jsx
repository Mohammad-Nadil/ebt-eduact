import { HiOutlineX, HiMinus, HiPlus } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Office Chair",
      price: 10.33,
      quantity: 2,
      image: "",
    },
    {
      id: 2,
      name: "Round Chair",
      price: 10.33,
      quantity: 2,
      image: "",
    },
  ];

  const subtotal = 20.33;
  const shipping = 0.0;
  const total = 20.0;

  return (
    <>
      <section>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto font-sans">
            {/* Header Section - Mobile e padding komano hoyeche */}
            <div className="w-full py-8 sm:py-16 md:py-20 bg-[#04090F] flex flex-col items-center justify-center text-white px-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
                CART
              </h1>
              <p className="text-sm sm:text-lg font-normal mt-2 font-urbanist">
                Home / Shop
              </p>
            </div>

            {/* Cart Content */}
            <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-16">
              <div className="overflow-x-hidden">
                {" "}
                {/* Scroll bondho kora hoyeche */}
                <table className="w-full text-left border-collapse table-fixed sm:table-auto">
                  <thead>
                    <tr className="border-b border-[#E4E4E4] text-[#2A254D] text-[14px] sm:text-[18px] md:text-[20px] font-bold font-urbanist">
                      <th className="pb-4 w-[35%] sm:w-auto">Item</th>
                      <th className="pb-4 w-[20%] sm:w-auto">Price</th>
                      <th className="pb-4 text-center w-[25%] sm:w-auto">
                        Qty
                      </th>
                      <th className="pb-4 w-[20%] sm:w-auto text-right sm:text-left">
                        Total
                      </th>
                      <th className="pb-4 text-right hidden sm:table-cell">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b border-[#E4E4E4]">
                        {/* Item Image & Name */}
                        <td className="py-4 flex items-center gap-2 sm:gap-4">
                          <div className="w-12 h-12 sm:w-20 md:w-28 sm:h-20 md:h-28 bg-[#16213e] rounded shrink-0">
                            {/* <img src={item.image} className="w-full h-full object-cover" /> */}
                          </div>
                          <span className="font-semibold text-gray-800 text-[11px] sm:text-sm md:text-base leading-tight">
                            {item.name}
                          </span>
                        </td>

                        {/* Price */}
                        <td className="py-4 text-gray-600 text-[11px] sm:text-sm md:text-base">
                          ${item.price.toFixed(2)}
                        </td>

                        {/* Quantity Controller */}
                        <td className="py-4">
                          <div className="flex items-center justify-center border border-[#E4E4E4] rounded-md w-full max-w-17.5 sm:max-w-25 mx-auto px-1 py-1 sm:gap-2">
                            <button className="text-gray-400 text-[10px] sm:text-base">
                              <HiMinus />
                            </button>
                            <span className="text-[11px] sm:text-sm md:text-base font-medium">
                              {item.quantity}
                            </span>
                            <button className="text-gray-400 text-[10px] sm:text-base">
                              <HiPlus />
                            </button>
                          </div>
                        </td>

                        {/* Subtotal */}
                        <td className="py-4 text-gray-600 text-[11px] sm:text-sm md:text-base text-right sm:text-left">
                          ${item.price.toFixed(2)}
                        </td>

                        {/* Remove - Mobile e absolute ba compact kora hoyeche */}
                        <td className="py-4 text-right hidden sm:table-cell">
                          <button className="text-gray-400 hover:text-red-500">
                            <HiOutlineX className="text-[#2A254D] text-[18px]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coupon & Totals Section */}
              <div className="mt-10 flex flex-col lg:flex-row justify-between items-start gap-8">
                {/* Coupon */}
                <div className="flex flex-row w-full lg:w-auto gap-2 sm:gap-4 items-center">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="bg-gray-100 px-3 py-3 sm:px-4 sm:py-4 outline-none border-none flex-1 md:w-64 font-urbanist rounded-md text-sm sm:text-base h-full min-h-12 sm:min-h-14"
                  />
                  <button className="whitespace-nowrap text-sm sm:text-lg flex items-center justify-center gap-x-2 sm:gap-x-3 py-3 sm:py-4 px-4 sm:px-8 rounded-md bg-secondary text-white font-urbanist duration-300 relative overflow-hidden group h-full min-h-12 sm:min-h-14">
                    <span className="relative z-10 flex items-center gap-2">
                      Apply <span className="hidden sm:inline">Coupon</span>{" "}
                      <FiArrowRight />
                    </span>
                    {/* Hover Animation Effect */}
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </div>

                {/* Totals */}
                <div className="w-full lg:w-80 border-t pt-6 lg:border-none lg:pt-0">
                  <div className="flex justify-between py-1 text-[#2A254D] text-base sm:text-[20px] font-medium font-urbanist">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-[#2A254D] text-base sm:text-[20px] font-medium font-urbanist">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 text-lg sm:text-xl font-bold border-t mt-4 font-urbanist">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="flex gap-2 sm:gap-4 mt-6">
                    <button className="flex-1 w-full sm:w-59.5 mt-8 mx-auto lg:mx-0 text-base sm:text-lg flex items-center justify-center lg:justify-start gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-[#23263d] text-white font-urbanist duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-11 after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10">
                      Update
                    </button>
                    <NavLink
                      to="/Checkout"
                      className="flex-1 w-full sm:w-59.5 mt-8 mx-auto lg:mx-0 text-base sm:text-lg flex items-center justify-center lg:justify-start gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary text-white font-urbanist duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-11 after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10"
                    >
                      Checkout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
