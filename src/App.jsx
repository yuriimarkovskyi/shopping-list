import {useState} from 'react';
import ShoppingList from './components/ShoppingList';
import './App.scss';

function App() {
  const [items, setItems] = useState([
    {id: 1, name: 'Хлеб', price: 20},
    {id: 2, name: 'Вода', price: 15},
    {id: 3, name: 'Салфетки', price: 35},
  ]);

  const addItem = newItem => {
    setItems([...items, newItem]);
  };

  const removeItem = item => {
    setItems(items.filter(e => e.id !== item.id));
  };

  return (
    <div className="App">
      <ShoppingList
        remove={removeItem}
        create={addItem}
        items={items}
      />
    </div>
  );
}

export default App;
