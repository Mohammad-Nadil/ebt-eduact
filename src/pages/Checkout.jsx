import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Checkout = () => {
  const [checked, setChecked] = useState(true);
  const [payment, setPayment] = useState("bank");

  return (
    <section className="bg-white min-h-screen font-sans pb-20">
      {/* Header Section */}
      <div className="bg-[#0a0f1c] pt-24 pb-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider">
          Checkout
        </h1>
        <p className="text-lg font-normal mt-2 opacity-80">Home / Shop</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Coupon Alert */}
        <div className="bg-[#F6F6F6] p-6 rounded-xl mb-12 border-l-4 border-[#F57005]">
          <p className="text-[#2A254D] font-medium font-urbanist text-[18px]">
            Have a coupon?{" "}
            <span className="text-[#F57005] font-bold cursor-pointer hover:underline">
              Click here to enter your code
            </span>
          </p>
        </div>

        {/* Main Grid: Billing and Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Billing Details */}
          <div className="lg:col-span-7">
            <h3 className="text-[#2A254D] text-3xl font-bold mb-8 font-urbanist">
              Billing Details
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Last Name" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="email" placeholder="Email Address" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Phone Number" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Company Name" className="md:col-span-2 w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Address" className="md:col-span-2 w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Apartment, Unit, etc (optional)" className="md:col-span-2 w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Town / City" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="State" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Zip Code" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
              <input type="text" placeholder="Country" className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist" />
            </form>

            {/* Shipping Details */}
            <div className="mt-10">
              <h3 className="text-[#2A254D] text-3xl font-bold mb-6 font-urbanist">
                Shipping Details
              </h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setChecked(!checked)}
                  className={`w-5 h-5 flex items-center justify-center border-2 rounded ${
                    checked ? "bg-[#F57005] border-[#F57005]" : "border-gray-400"
                  }`}
                >
                  {checked && <AiOutlineCheck className="text-white text-sm" />}
                </div>
                <span className="text-[#2A254D] font-medium">Same as Billing Details</span>
              </label>
            </div>
          </div>

          {/* Right: Additional Information */}
          <div className="lg:col-span-5">
            <h3 className="text-[#2A254D] text-2xl font-bold mb-6 font-urbanist">
              Additional Information
            </h3>
            <textarea
              placeholder="Write a Message"
              className="w-full bg-[#F6F6F6] p-4 rounded-md h-44 outline-none resize-none font-urbanist"
            ></textarea>
          </div>
        </div>

        {/* Second Grid: Your Order and Payment Method side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-start">
          
          {/* Order Summary Card */}
          <div className="border border-[#E4E4E4] rounded-2xl p-8 shadow-sm bg-white h-full">
            <h3 className="text-[#2A254D] text-2xl font-bold mb-8 font-urbanist">
              Your Order
            </h3>
            <div className="space-y-5">
              <div className="flex justify-between border-b border-[#E4E4E4] pb-4 font-bold text-[#2A254D] font-urbanist">
                <span>Product</span>
                <span>Price</span>
              </div>
              <div className="flex justify-between text-gray-500 font-medium font-urbanist">
                <span>Product Name</span>
                <span>$10.33</span>
              </div>
              <div className="flex justify-between font-bold text-[#2A254D] font-urbanist">
                <span>Subtotal</span>
                <span>$10.33</span>
              </div>
              <div className="flex justify-between font-bold text-[#2A254D] font-urbanist">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-2xl font-extrabold text-[#2A254D] border-t border-[#E4E4E4] pt-5 font-urbanist">
                <span>Total</span>
                <span>$20.00</span>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="flex flex-col h-full">
            <div className="space-y-4 bg-[#F6F6F6] p-8 rounded-xl flex-grow">
              
              {/* Direct Bank Transfer Option */}
              <div
                className="flex items-start gap-4 cursor-pointer"
                onClick={() => setPayment("bank")}
              >
                <div
                  className={`mt-1 min-w-5.5 h-5.5 flex items-center justify-center
                    border-2 rounded-full transition-all ${
                    payment === "bank"
                      ? "bg-[#F57005] border-[#F57005]"
                      : "bg-white border-gray-400"
                  }`}
                >
                  {payment === "bank" && (
                    <AiOutlineCheck className="text-white text-[12px]" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-[#2A254D] text-lg">Direct bank transfer</p>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed font-urbanist">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>

              {/* Cash On Delivery Option */}
              <div
                className="flex items-start gap-4 cursor-pointer pt-6"
                onClick={() => setPayment("cod")}
              >
                <div
                  className={`mt-1 min-w-5.5 h-5.5 flex items-center justify-center
                    border-2 rounded-full transition-all ${
                    payment === "cod"
                      ? "bg-[#F57005] border-[#F57005]"
                      : "bg-white border-gray-400"
                  }`}
                >
                  {payment === "cod" && (
                    <AiOutlineCheck className="text-white text-[12px]" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-[#2A254D] text-lg">Cash on delivery</p>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed font-urbanist">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              className="w-full sm:w-59.5 mt-8 mx-auto lg:mx-0 text-base sm:text-lg flex items-center justify-center lg:justify-start gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary text-white font-urbanist duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-11 after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10"
            >
              Place your Order <FaArrowRight className="text-md" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Checkout;