import { HiOutlineX, HiMinus, HiPlus } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

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
      <section className="py-25">
        <div className="container min-h-screen bg-gray-50 font-sans">
          {/* Header Section */}
          <div className="bg-[#0a0f1c] pt-24 pb-20 text-center text-white">
            <h1 className="text-7xl font-bold">CART</h1>
            <p className="text-lg font-normal mt-2 font-urbanist">
              Home / Shop
            </p>
          </div>

          {/* Cart Content */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E4E4E4] text-[#2A254D]
                  text-[20px] font-bold font-urbanist">
                    <th className="pb-4">Item</th>
                    <th className="pb-4">Price</th>
                    <th className="pb-4 text-center">Quantity</th>
                    <th className="pb-4">Subtotal</th>
                    <th className="pb-4 text-right">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-[#E4E4E4]">
                      <td className="py-6 flex items-center gap-4">
                        <div className="w-28.75 h-28.75 bg-[#16213e] rounded
                        flex items-center justify-center">
                          {/* <img src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover" /> */}
                        </div>
                        <span className="font-semibold text-gray-800">
                          {item.name}
                        </span>
                      </td>
                      <td className="py-6 text-gray-600">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-6">
                        <div className="flex items-center justify-center border
                        border-[#E4E4E4] rounded-md w-max mx-auto px-2 py-1 gap-4">
                          <button className="text-gray-400 hover:text-black">
                            <HiMinus className="cursor-pointer" />
                          </button>
                          <span className="font-medium font-urbanist">
                            {item.quantity}
                          </span>
                          <button className="text-gray-400 hover:text-black">
                            <HiPlus className="cursor-pointer font-urbanist" />
                          </button>
                        </div>
                      </td>
                      <td className="py-6 text-gray-600">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-6 text-right">
                        <button className="text-gray-400 hover:text-red-500
                        text-xl font-urbanist">
                          <HiOutlineX className="text-[#2A254D] text-[20px]"/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Section: Coupon & Summary */}
            <div className="mt-10 flex flex-col md:flex-row justify-between
            items-start gap-8">
              {/* Coupon Box */}
              <div className="flex w-full md:w-auto gap-4">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="bg-gray-100 px-4 py-3 outline-none border-none
                  w-full md:w-64 font-urbanist rounded-md"
                />
                <button
                  className="bg-[#ff7a00] text-white px-6 py-3
            flex items-center gap-2 font-medium hover:bg-orange-600
            transition rounded-md font-urbanist"
                >
                  Apply Coupon <FiArrowRight />
                </button>
              </div>

              {/* Totals Box */}
              <div className="w-full md:w-80">
                <div className="flex justify-between py-2 text-[#2A254D] leading-11.75
                text-[20px] font-medium font-urbanist">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 text-[#2A254D] leading-11.75
                text-[20px] font-medium font-urbanist">
                  <span>Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-4 text-xl font-bold border-t
                mt-4 font-urbanist">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    className="flex-1 bg-[#23263d] text-white py-3
              rounded flex items-center justify-center gap-2
              hover:bg-[#1a1d2e] font-urbanist"
                  >
                    Update <FiArrowRight />
                  </button>
                  <button
                    className="flex-1 bg-[#ff7a00] text-white py-3
              rounded flex items-center justify-center gap-2
              hover:bg-orange-600 shadow-lg shadow-orange-200 font-urbanist"
                  >
                    Checkout <FiArrowRight />
                  </button>
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