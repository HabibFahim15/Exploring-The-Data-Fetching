
import Meals from '@/components/Meals';
import styles from './styles.module.css'

export const metadata = {
  title: "Meals",
  keywords: ['meals', "meals page"],
  description: "About meals",
};
const mealsPage = () => {
  
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-semibold text-red-400'>Choose Your Meals</h1>
      <p className={styles.text_large}>Choose Meals of your choice by searching....</p>
      <Meals />
    </div>
  );
};

export default mealsPage;