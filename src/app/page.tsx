"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';

interface Category {
  name: string;

}

interface Product{
  id:string;
  images:string[];
  title:string;
  price:number;
  description:string;
  category: Category; 
  
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState('')



  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // const response = await axios.get('https://streaming-availability.p.rapidapi.com/shows/search/filters', {
        //   params: {
        //     country: 'ca',
        //     show_type: 'movie',
        //     series_granularity: 'show',
        //     order_by: 'original_title',
        //     output_language: 'en',
        //     order_direction: 'asc',
        //     genres_relation: 'and'
        //   },
        //   headers: {
        //     'X-RapidAPI-Key': 'dc651a7168msh734235f97fe1aedp1743ddjsn81be238c2963',
        //     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        //   }
        // });
        const response= await axios.get('https://api.escuelajs.co/api/v1/products')
        setProducts(response.data); 
        setLoading(false);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();

  }, [searchData]); 

  return (
    <main>
      <Navbar />
      
        {loading ? (
          <Loader/>
        ) : 
        <div className='flex flex-wrap justify-evenly'>
         
          <form className="flex items-center max-w-sm mx-auto mt-5">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input onChange={e => setSearchData((e.target.value).trim())} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>

         
          <div className='flex justify-evenly flex-wrap'>
              {products.length > 0 ? (
                
                  
                  products.filter(product => product.category.name.includes(searchData)).length > 0 ? (
                 
                  products.filter(product => product.category.name.includes(searchData)).map(product => (
                    <Card
                      id={product.id}
                      image={product.images[0]}
                      title={product.title}
                      price={product.price}
                      description={product.description}
                    />
                  ))
           
              ) : (
              
                <h3>No results found</h3>
              )
            ) : (
              <h3 className='text-center text-bold font-large'>No data Found Sorry....</h3>
            )}
          </div>
        </div>
        }
      <Footer></Footer>
    </main>
  );
}
