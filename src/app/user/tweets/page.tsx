'use client'
import React,{useEffect,useState} from 'react'
import {getTweets} from '@/helper/apiHelper';
export default function page() {
  const [tweets,setTweets] = useState([]);
  useEffect(()=>{
    async function getTweets_fn() {
       const {tweets} = await getTweets();
       setTweets(tweets);
    }
    getTweets_fn();
  },[]);
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 outline-none">Add tweet</button>
      <div>
        {tweets.map((item,id)=>(
          <p>tweet</p>
        ))}
       
      </div>
    </div>
  )
}
