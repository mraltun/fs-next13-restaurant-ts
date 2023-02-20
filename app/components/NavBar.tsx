import Link from "next/link";

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='font-bold text-gray-700 text-2xl'>
        Restaurant
      </Link>
      <div>
        <div className='flex'>
          <button className='bg-blue-400 text-white border mr-3 p-1 px-4 rounded'>
            Sign In
          </button>
          <button className='border p-1 px-4 rounded'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
