"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <main>
          {/* HEADER */}
          <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
            <div className='text-center mt-10'>
              <h1 className='text-white text-5xl font-bold mb-2'>
                Find your table for any occasion
              </h1>
              {/* SEARCH BAR */}
              <div className='text-left text-lg py-3 m-auto flex justify-center'>
                <input
                  type='text'
                  className='rounded text-lg mr-3 p-2 w-[450px]'
                  placeholder='State, city or town'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button
                  className='rounded bg-red-600 px-9 py-2 text-white'
                  onClick={() => {
                    if (location === "bana") return;
                    router.push("/search");
                  }}
                >
                  Let&apos;s Go
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */} {/* CARDS */}
          <div className='py-3 px-36 mt-10 flex flex-wrap'>
            {/* CARD */}
            <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
              <Link href='/restaurant/adana-kebab'>
                <img
                  src='https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt=''
                  className='w-full h-36'
                />
                <div className='p-1'>
                  <h3 className='font-bold text-2xl mb-2'>Cat Food</h3>
                  <div className='flex items-start'>
                    <div className='flex mb-2'>*****</div>
                    <p className='ml-2'>77 reviews</p>
                  </div>
                  <div className='flex text-reg font-light capitalize'>
                    <p className='mr-3'>Mexican</p>
                    <p className='mr-3'>$$$$</p>
                    <p className='mr-3'>Istanbul</p>
                  </div>
                  <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
                </div>
              </Link>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
