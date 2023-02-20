import Link from "next/link";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <main>
          <Header />
          {/* CARDS */}
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
