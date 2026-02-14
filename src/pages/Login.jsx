import React from 'react'

const Login = () => {
  return (
    <div class="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div class="w-full max-w-6xl ">
        <div className="div bg-black h-[150px] flex flex-col items-center justify-center text-white">
          <h1 className=' text-3xl font-bold'>LOGIN</h1>
          <p>Home / Course</p>
        </div>
        <div class="bg-gray-200 rounded-xl p-6 mb-10 text-gray-700 text-lg mt-20">
            We have a demo account setup.
            <span class="font-semibold">Username: demo</span> and 
            <span class="font-semibold text-orange-500">Password: demo</span>
        </div>
        <div class="bg-white rounded-2xl flex justify-between items-center p-10 gap-10">
            <div>
                <h2 class="text-3xl font-semibold mb-6 text-gray-800">Login</h2>
                <form class="space-y-5"/>
                    <input type="text" placeholder="User Name or  Email Address*" 
                        class="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                    <input type="password" placeholder="Password*" 
                        class="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 mt-5 focus:ring-orange-400"/>
                    <div class="flex items-center justify-between text-sm text-gray-600">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="accent-orange-500 mt-5"/>
                            <span>Remember Me?</span>
                        </label>
                        <a href="#" class="hover:text-orange-500">Forget Password?</a>
                    </div>
                    <button type="submit" 
                        class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 mt-5 rounded-lg transition duration-300">
                        Login
                    </button>
            </div>
            <div class="hidden md:block border-l border-gray-300"></div>
            <div>
                <h2 class="text-3xl font-semibold mb-6 text-gray-800">Register</h2>
                <form class="space-y-5"/>
                    <input type="text" placeholder="User Name" 
                        class="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                    <input type="password" placeholder="Password*" 
                        class="w-full p-4 mt-5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                    <label class="flex items-center space-x-2 text-sm text-gray-600 mt-5">
                        <input type="checkbox" class="accent-orange-500"/>
                        <span>I Accept Company Privacy Policy</span>
                    </label>
                    <button type="submit" 
                        class="bg-orange-500 hover:bg-orange-600 text-white mt-5 px-8 py-3 rounded-lg transition duration-300">
                        Register
                    </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
