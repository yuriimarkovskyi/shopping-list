const defaultState = {
  items: [
    {id: 1, name: 'Хлеб', price: 20, completed: false},
    {id: 2, name: 'Вода', price: 15, completed: false},
    {id: 3, name: 'Салфетки', price: 35, completed: false},
    {id: 4, name: 'Салфетки 2', price: 35, completed: false},
    {id: 5, name: 'Салфетки 3', price: 35, completed: false},
    {id: 6, name: 'Салфетки 4', price: 35, completed: false},
  ],
};

const ADD_ITEM = 'ADD_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, items: [...state.items, action.payload]};

    case COMPLETE_ITEM:
      const index = state.items.findIndex(item => item.id === action.payload.id);
      console.log(index);
      const newArray = [...state.items];

      newArray[index].completed = !newArray[index].completed;

      return {...state, items: newArray};

    case REMOVE_ITEM:
      const filteredItems = state.items.filter(item => item.id !== action.payload);

      return {...state, items: filteredItems};

    default:
      return state;
  }
};

export const addItemAction = payload => ({type: ADD_ITEM, payload});
export const completeItemAction = payload => ({type: COMPLETE_ITEM, payload});
export const removeItemAction = payload => ({type: REMOVE_ITEM, payload});