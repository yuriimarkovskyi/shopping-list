import {useState} from 'react';
import './App.scss';
import ShoppingList from './components/ShoppingList';

function App() {
  const [items, setItems] = useState([
    {id: 1, name: 'Хлеб', price: 20},
    {id: 2, name: 'Вода', price: 15},
    {id: 3, name: 'Салфетки', price: 35},
  ]);

  const addItem = newItem => setItems([...items, newItem]);
  const removeItem = item => setItems(items.filter(e => e.id !== item.id));

  return (
    <div className="App">
      <ShoppingList
        items={items}
        addItem={addItem}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
