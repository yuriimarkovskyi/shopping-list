import React, {useState} from 'react';
import Button from './UI/Button';
import Input from './UI/Input';

const ShoppingListForm = ({addItem}) => {
  const [item, setItem] = useState({name: '', price: ''});

  const addNewItem = e => {
    e.preventDefault();
    const newItem = {...item, id: Date.now()};

    if (newItem.name && newItem.price) {
      addItem(newItem);
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
          onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
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