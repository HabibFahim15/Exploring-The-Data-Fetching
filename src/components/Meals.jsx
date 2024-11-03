'use client'
import Image from 'next/image';
import {useState,useEffect} from 'react';

const Meals = () => {
  const [search, setSearch] = useState('b')
  const [error, setError] = useState('')
  const [meals, setMeals] = useState([])

  const loadData = async() =>{
    try {
      const res  = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
      const data = await res.json()
      setMeals(data.meals);
      setError('')
    } catch (error) {
      setError('No data Found')
    }
  }

  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }
  

  useEffect(() => {
    loadData()
  },[])



  return (
    <div className='mt-12'>
        <input
        onChange={handler}
        className='p-4 outline-none border-2 rounded-lg  text-slate-900' type='text' placeholder='Search for meals' />
        <button onClick={() => loadData()} className='bg-red-600 rounded text-white font-semibold py-4 px-6'>Search</button>

      <div className='mt-12 grid grid-cols-3 gap-12'> 
        {
         meals?.length > 0 && !error && meals?.map((meal) => (
          <div key={meal.idMeal} className='border-2 p-4'>
            <Image width={500} height={500} src={meal?.strMealThumb} alt={meal?.strMeal} />
            <h6>{meal.strMeal}</h6>
            <p>{meal.strInstructions}</p>
          </div>
         ))
        }
        {error && <p>no Data found</p>}
      </div>

      </div>
  );
};

export default Meals;