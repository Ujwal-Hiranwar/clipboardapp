import axios from 'axios';
import React from 'react'
import { useState } from 'react'
export default function ReciveText() {
const [responsemessage, setresponsemessage] = useState("")
const [messageid, setmessageid] = useState({
  id : ""
})
const handleChange =(event)=>{
  const { name, value } = event.target;
  setmessageid({
    ...messageid,
    [name] : value
  })
}
const handleSubmit = async ()=>{
  try {
     await axios.get(`http://localhost:8080/recive/${messageid.id}`)
    .then((resp)=>{
      setresponsemessage(resp.data)
    })
    
  } catch (err) {
    console.log(err)
  }
}
  return (
    <div>
          <hr className='border border-black mt-3'/>
        <div className='ml-10 font-semibold text-lg mt-5'>
        Enter text ID to Recive : <br></br> 
        <input type="text" name='id' value={messageid.id} onChange={handleChange} className='border border-black ml-8 mt-3 p-2 rounded-lg' />
       <br /> <button type="button" onClick={handleSubmit} className="text-white ml-12  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-4 mt-2 mt-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Recive Text</button>
</div>

<div className=''>
  <p className='text-center font-bold text-xl'>YOUR TEXT IS</p>
<p className='border p-5 border-black h-[500px] ml-52 w-[1100px] mt-3 rounded-2xl'>{responsemessage}</p>

</div>


   
    </div>
  )
}
