import React from 'react';

const loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
     <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default loading;