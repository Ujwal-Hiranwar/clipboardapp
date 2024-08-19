"use client";
import axios from 'axios';
import {useState} from 'react'
export default function Register() {
  const [formData, setFormData] = useState({
    username : "",
    phoneno : "",
    email : "",
    password : ""
  })
  const handleChange= (e)=>{
       const {name,value} = e.target;
       setFormData({
        ...formData,
        [name] : value
       })
  }
  const handleSubmit = async (e)=>{
        e.preventDefault();
         try {
          const response =await axios.post("https://e-commerce-eq1k.onrender.com/userregister",formData)
          .then(resp=>{
            console.log(resp.data)
         })
          .catch(err=>{
            console.log(err)
          });
          
          setFormData({
            username : "",
            phoneno : "",
            email : "",
            password : ""
          })
         } catch (error) {
          console.log("cannot send data to backend error is : "+error)
         }
         
  }
  
  return (
    <div>
      <div className="flex items-center justify-center mt-10 bg-white-900">
  <div className="relative flex m-6 mt-0 space-y-8 bg-white shadow-2xl rounded-2xl flex-row space-y-0">
    {/* left side */}
    <div className="flex flex-col justify-start p-8 md:p-14">
      <i>
        <span className="mb-8 text-3xl font-serif font-sans">
          Breathe Life Into Your World !!!
        </span>
      </i>
      <div className="py-4">
        <span className="mb-2 text-md ">Username</span>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 mt-2 rounded-md placeholder:font-light placeholder:text-gray-500"
          name="username"
          value={formData.username}
          onChange={handleChange}
          id="Username"
          placeholder="Enter Your Username"
        />
      </div>
      <div className="pb-2 pt-4">
        <span className="mb-2 text-md ">Phone no</span>
        <div className="flex flex-row">
          <div className="border-2 mt-1.5 p-1.5 mr-2 mb-2 border-black rounded-md">
            +91
          </div>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 mt-2 mb-1.5 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
            id="phoneno"
            placeholder="Enter Your Phone no"
          />
        </div>
      </div>
      <div className="py-4">
        <span className="mb-2 text-md">Email</span>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 mt-2 rounded-md placeholder:font-light placeholder:text-gray-500"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="Email"
          placeholder="Enter Your Mail"
        />
      </div>
      <div className="py-4">
        <span className="mb-2 text-md">Password</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="pass"
          placeholder="Enter Your Password"
          className="w-full p-2 border border-gray-300 mt-2 rounded-md placeholder:font-light placeholder:text-gray-500"
        />
      </div>
      <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
      onClick={handleSubmit}
      >
        Sign up
      </button>
      
    </div>
    {/* right side */}
    <div className="ecommerce">
      <img
        src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="w-[550px] h-full sm:hidden rounded-r-2xl md:block object-cover"
      />
    </div>
  </div>
</div>

    </div>
  )
}
