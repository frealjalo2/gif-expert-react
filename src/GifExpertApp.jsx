import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// API Key : N9HFRGkrf9607FFKMmHjvA5NjLFbUh2G
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 

          onNewCategory = {(value) => onAddCategory(value)}
        />

        {
          categories.map( (category) => 
            <GifGrid key={category} category={category}/>
          )
        }
        
            {/* Gif item */}
    </>
  )
}
