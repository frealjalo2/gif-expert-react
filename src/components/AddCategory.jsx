import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const clearFields = (event) => {
      Array.from(event.target).forEach((e) => (e.value = ""));
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        // const newInputValue = inputValue.trim();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => categories.includes(inputValue)? categories : [inputValue, ...categories]);        
        await onNewCategory(inputValue.trim()); 
        clearFields(event);
        setInputValue('');
    };
    
  return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs" 
        name="add-category"
        onChange={onInputChange}
        />
    </form>
  );
}
