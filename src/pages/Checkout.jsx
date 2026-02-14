

const Checkout = () => {
  return (
    <section className="bg-white min-h-screen font-sans py-25">
      {/* Header Section */}
      <div className="bg-[#0a0f1c] pt-24 pb-20 text-center text-white">
        <h1 className="text-6xl font-bold uppercase tracking-wider">
          Checkout
        </h1>
        <p className="text-lg font-normal mt-2 opacity-80">Home / Shop</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Coupon Alert */}
        <div className="bg-[#F6F6F6] p-6 rounded-xl mb-12 border-l-4
        border-[#F57005]">
          <p className="text-[#2A254D] font-medium font-urbanist
          text-[18px]">
            Have a coupon?{" "}
            <span className="text-[#F57005] font-bold cursor-pointer">
              Click here to enter your code
            </span>
          </p>
        </div>

        {/* Main Grid: */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Billing & Shipping */}
          <div className="lg:col-span-7">
            <h3 className="text-[#2A254D] text-3xl font-bold mb-8
            font-urbanist">
              Billing Details
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-[#F6F6F6]
               p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#F6F6F6]
              p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#F6F6F6]
              p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-[#F6F6F6] p-4
              rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="md:col-span-2 w-full
              bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Address"
                className="md:col-span-2 w-full
              bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Apartment, Unit, etc (optional)"
                className="md:col-span-2 w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full bg-[#F6F6F6] p-4 rounded-md outline-none font-urbanist"
              />
            </form>

            <div className="mt-10">
              <h3 className="text-[#2A254D] text-3xl font-bold mb-6">
                Shipping Details
              </h3>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#F57005]"
                  defaultChecked
                />
                <span className="text-[#2A254D] font-medium">
                  y Same as Billing Details
                </span>
              </label>
            </div>
          </div>

          {/* Right Column: Additional Info & Order Summary */}
          <div className="lg:col-span-5 space-y-10">
            {/* Additional Info */}
            <div>
              <h3 className="text-[#2A254D] text-2xl font-bold mb-6">
                Additional Information
              </h3>
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full bg-[#F6F6F6] p-4 rounded-md h-32 outline-none resize-none"
              ></textarea>
            </div>

            {/* Order Summary */}
            <div className="border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-[#2A254D] text-2xl font-bold mb-6">
                Your Order
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b pb-4">
                  <span className="font-semibold">Product</span>
                  <span className="font-semibold">Price</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Product Name</span>
                  <span>$10.33</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>$10.33</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div
                  className="flex justify-between text-xl font-bold
                 text-[#2A254D] border-t pt-4"
                >
                  <span>Total</span>
                  <span>$20.00</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 bg-[#F6F6F6] p-6 rounded-xl">
                <label className="flex items-start space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 accent-[#F57005]"
                    defaultChecked
                  />
                  <div>
                    <p className="font-bold text-[#2A254D]">
                      Direct bank transfer
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference.
                    </p>
                  </div>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-[#F57005]"
                  />
                  <span className="font-bold text-[#2A254D]">
                    Cash on delivery
                  </span>
                </label>
              </div>

              <button
                className="w-full mt-8 bg-gradient-to-r from-[#F57005]
               to-[#ff8c2d] text-white font-bold py-4 rounded-lg
               hover:shadow-lg transition-all duration-300"
              >
                Place your Order →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
