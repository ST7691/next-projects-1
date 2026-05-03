import FoodCardSkeleton from '@/Components/Skeleton/FoodCardSkeleton';
import React from 'react'


const loading = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
          
              [...Array(12)].map((_,index)=><FoodCardSkeleton key={index}> </FoodCardSkeleton>)}
    </div>
  );
}

export default loading