import Link from 'next/link';

const ContactContent = () => {
  return (
    <div className='flex justify-center items-center min-h-svh'>
     <Link className='border bg-orange-400 px-8 py-3 rounded-xl' href='contacts/history'>History</Link>
     <Link className='border bg-orange-400 px-8 py-3 rounded-xl' href='contacts/mission'>Mission</Link>
    </div>
  );
};

export default ContactContent;