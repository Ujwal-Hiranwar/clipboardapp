import axios from 'axios'
import React from 'react'
import { useState } from 'react'
export default function SendTextArea() {
    const [messageid, setmessageid] = useState("");
    const [datatosend, setdatatosend] = useState({
      text : ""
    })
    const handleSubmit = async ()=>{
   
    try{
      const response = await axios.get('https://www.random.org/integers/?num=1&min=1000&max=10000&col=1&base=10&format=plain&rnd=new');
      await axios.post('http://localhost:8080/submit',new URLSearchParams({
        otp: String(response.data),
        text: datatosend.text
      })).then((reply)=>{
        console.log(reply)
      })
     setmessageid(response.data);
    }
    catch(err){
      console.log(err)
    }
  
     }
    const handleChange = (event)=>{
      const { name, value } = event.target;
      setdatatosend({
        ...datatosend,
        [name]: value
      });
    }
  return (
    <div>
      
        <div className='ml-10 font-semibold text-lg mt-5'>
        Enter text to Send : 

</div>

<div className=''>
<textarea type="text" name='text' value={datatosend.text} onChange={handleChange} className='border p-5 border-black h-[500px] ml-52 w-[1100px] mt-3 rounded-2xl'/>

</div>
<div className='flex justify-evenly'>
<button type="button" class="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-4 mt-2 mt-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
onClick={handleSubmit}>Send Text</button>
<div className='flex font-bold'> PIN : 
  <div  className='h-16 w-60 p-5 ml-5 bg-slate-400 font-bold text-lg rounded-lg text-black bg-opacity-50' >{messageid}</div>
</div>
</div>

    </div>
  )
}
