
import Meals from '@/components/Meals';
const mealsPage = () => {
  
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-semibold text-red-400'>Choose Your Meals</h1>
      <p>Choose Meals of your choice by searching....</p>
      <Meals />
    </div>
  );
};

export default mealsPage;