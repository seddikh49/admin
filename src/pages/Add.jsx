import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState();
  const [description, setdescription] = useState();
  const [price, setprice] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handelAdd = (e) => {
    e.preventDefault()
  }
  


  
  return (
    <div className='p-10 w-full'>
      <form className='flex flex-col items-start gap-3' action="">
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-poppins'>Upload Image</h1>
          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img className='w-20 h-15' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e)=> setImage1(e.target.files[0])} type="file" id='image1' hidden />
            </label>

            <label htmlFor="image2">
              <img className='w-20 h-15' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e)=> setImage2(e.target.files[0])} type="file" id='image2' hidden />
            </label>

            <label htmlFor="image3">
              <img className='w-20 h-15' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e)=> setImage3(e.target.files[0])} type="file" id='image3' hidden />
            </label>

            <label htmlFor="image4">
              <img className='w-20 h-15' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e)=> setImage4(e.target.files[0])} type="file" id='image4' hidden />
            </label>
          </div>
        </div>
        <div className='w-full '>
          <p className='mb-2 font-poppins'>Product name</p>
          <input type="text" placeholder='Type here' className=' w-full max-w-[500px] font-poppins px-4 py-2' />
        </div>
        <div className='w-full'>
          <p className='mb-2 font-poppins'>Product name</p>
          <textarea type="text" placeholder='Write content here' className=' w-full max-w-[500px] font-poppins px-4 py-2' />
        </div>
        <div className='flex sm:flex-col xl:flex-row w-full gap-4 xm:flex-col'>
          <div className=''>
            <p className='mb-2 font-poppins whitespace-nowrap'>Product category</p>
            <select className='py-2 px-5 font-poppins' name="" id="">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className=''>
            <p className='mb-2 font-poppins whitespace-nowrap'>Product subcategory</p>
            <select className='py-2 px-5 font-poppins' name="" id="">
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div className=''>
            <p className='mb-2 font-poppins'>Product price</p>
            <input className='py-2  font-poppins ' type="Number" />
          </div>
        </div>
        <div >
          <p>Product sizes</p>
          <div className='flex gap-3 mt-3'>
            <div className='bg-slate-200 font-poppins px-4 py-1 text-xl'>
              <p>S</p>
            </div>
            <div className='bg-slate-200 px-4 py-1 text-xl font-poppins' >
              <p>M</p>
            </div>
            <div className='bg-slate-200 px-4 py-1 text-xl font-poppins'>
              <p>L</p>
            </div>
            <div className='bg-slate-200 px-4 py-1 text-xl font-poppins'>
              <p>XL</p>
            </div>
            <div className='bg-slate-200 px-4 py-1 text-xl font-poppins'>
              <p>XXL</p>
            </div>
          </div>
          <div className='mt-5 mb-5  gap-3'>
             <div className='flex gap-3 mb-4'>
             <input type="checkbox" />
             <p>Add to bestseller</p>
             </div>
            <button onClick={handelAdd} className='bg-black text-white px-10 py-2'>ADD</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add
