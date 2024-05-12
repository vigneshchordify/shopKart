"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import instances from '../api/route';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';




const Singleview = ({ params }: { params: { Singleview: string } }) => {

  const [productData, setProductData] = useState<any>();
  const [images, setImages] = useState([]);

  const getData = async () => {
    try {
      const response = await instances.get(`/products/${params.Singleview}`);
      console.log(response.data);
      setImages(response.data.images)
      console.log(images)
      return setProductData(response.data)
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  

  useEffect(() => {
    getData();
  }, [params.Singleview]);


  return (
    <main className=' '>
      <Navbar/>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 w-3/4 mx-auto my-10 border-2 shadow-md'>
        <div className=' h-screen-1/2 '>
          {/* <img className='h-full w-full object-contain' src={productData ? productData.images[0] : "loading..."} alt="no image" /> */}
          <Carousel className='w-3/4 mx-start'>
            <CarouselContent>
              
            {images && images.map((image: string | undefined, index: React.Key | null | undefined) => (
                <CarouselItem key={index}>
                  <img className='h-full w-full object-contain' src={image} alt={`Image ${index}`}  />
                </CarouselItem>
              ))}
              
              
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
        <div className=' flex flex-col  '>
          <p className=' pt-5 text-slate-600'>{productData ? productData.category.name : "loading"}</p>
          <h2 className='text-5xl py-10 '>{productData ? productData.title : "loading..."}</h2>
          <h2 className='text-5xl  py-5'>US $ {productData ? productData.price : "loading..."}</h2>
          <p className='my-6 text-lg '>{productData ? productData.description : "loading..."}</p>

        </div>
      </div>

      <Footer/>

    </main>
  );
};



export default Singleview;
