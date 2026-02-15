import React from 'react'

const Login = () => {
  return (
    <div>
        <div class="bg-slate-900 text-white py-20 text-center">
          <h1 class="text-4xl font-bold tracking-wide">LOGIN</h1>
          <p class="mt-3 text-gray-400">Home / Login</p>
        </div>
        <div className="bg-gray-100 md:py-30 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl ">
        <div class="bg-gray-200 rounded-xl p-6 mb-10 text-gray-700 text-lg ">
            We have a demo account setup.
            <span className="font-semibold"> Username : demo</span> and 
            <span className="font-semibold text-orange-500"> Password : demo</span>
        </div>
        <div className="bg-white rounded-2xl md:flex justify-between items-center p-10 gap-10">
            <div>
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Login</h2>
                <form className="space-y-5"/>
                    <input type="text" placeholder="User Name or  Email Address*" 
                        className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                    <input type="password" placeholder="Password*" 
                        className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 mt-5 focus:ring-orange-400"/>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-orange-500 mt-5"/>
                            <span>Remember Me?</span>
                        </label>
                        <a href="#" className="hover:text-orange-500">Forget Password?</a>
                    </div>
                    <button type="submit" 
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 mt-5 rounded-lg transition duration-300">
                        Login
                    </button>
            </div>
            <div className="hidden md:block border-l border-gray-300"></div>
            <div>
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Register</h2>
                <form className="space-y-5"/>
                    <input type="text" placeholder="User Name" 
                        className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                    <input type="password" placeholder="Password*" 
                        className="w-full p-4 mt-5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                    <label className="flex items-center space-x-2 text-sm text-gray-600 mt-5">
                        <input type="checkbox" className="accent-orange-500"/>
                        <span>I Accept Company Privacy Policy</span>
                    </label>
                    <button type="submit" 
                        className="bg-orange-500 hover:bg-orange-600 text-white mt-5 px-8 py-3 rounded-lg transition duration-300">
                        Register
                    </button>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login
