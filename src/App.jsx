import './App.scss';
import {useSelector} from 'react-redux';
import ShoppingList from './components/ShoppingList';

const App = () => {
  const items = useSelector(state => state.items);

  return (
    <div className="App">
      <ShoppingList items={items}/>
    </div>
  );
};

export default App;