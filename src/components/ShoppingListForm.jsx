import React, {useState} from 'react';
import Button from './UI/Button';
import Input from './UI/Input';

const ShoppingListForm = ({create}) => {
  const [item, setItem] = useState({name: '', price: ''});

  const addNewItem = e => {
    e.preventDefault();
    const newItem = {...item, id: Date.now()};

    if (newItem.name && newItem.price) {
      create(newItem);
    }
  };

  return (
    <form className="shopping-list__form">
      <div className="shopping-list__form-inputs">
        <Input
          onChange={e => setItem({...item, name: e.target.value})}
          value={item.name}
          placeholder="Товар"
        />
        <Input
          type="number"
          onChange={e => setItem({...item, price: e.target.value})}
          value={item.price}
          placeholder="Цена"
        />
      </div>
      <Button onClick={addNewItem} className="button">
        Add item
      </Button>
    </form>
  );
};


export default ShoppingListForm;