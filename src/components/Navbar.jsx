"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {

  const pathName = usePathname();
  const router = useRouter();

  const links = [
  {
    title : "Home",
    path  : '/'
  },
  {
    title  : "About",
    path   : "/about"
  },
  {
    title  : 'Service',
    path   : '/services'
  },
  {
    title  : 'Contact',
    path   : '/contacts'
  },
  {
    title  : 'Blog',
    path   : '/blogs'
  },
  {
    title : 'Categories',
    path  : '/categories'
  },
  {
    title : 'Post',
    path  : '/posts'
  }
];

const handler = () =>{
  router.push('/login')
}

if(pathName.includes('dashboard'))
return(
  <div className='bg-green-700 p-6'>
    Dashboard Layout.
  </div>
)

  return (
    <nav className="bg-red-400 flex justify-between px-8 py-8">
          <h6 className="font-bold text-2xl">Next <span className="text-green-600">Hero</span></h6>
          <ul className="flex items-center justify-between font-semibold gap-4">
            {
              links?.map((link) => <Link className={`${pathName=== link.path && "text-white border-b-2 font-bold "}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handler} className="bg-white text-cyan-600 px-8 py-3 rounded-2xl">Login</button>
        </nav>
  );
};

export default Navbar;