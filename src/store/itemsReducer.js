const defaultState = {
  items: [
    {
      id: 1, name: 'Хліб', price: 20, completed: false,
    },
    {
      id: 2, name: 'Вода', price: 15, completed: false,
    },
    {
      id: 3, name: 'Серветки', price: 35, completed: false,
    },
    {
      id: 4, name: 'Печиво', price: 35, completed: false,
    },
    {
      id: 5, name: 'Морозиво', price: 35, completed: true,
    },
  ],
};

const ADD_ITEM = 'ADD_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';
const COMPLETE_ALL_ITEMS = 'COMPLETE_ALL_ITEMS';
const CLEAR_COMPLETED_ITEMS = 'CLEAR_COMPLETED_ITEMS';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const itemsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ADD_ITEM: {
      return { ...state, items: [...state.items, action.payload] };
    }

    case COMPLETE_ITEM: {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      const newArray = [...state.items];

      newArray[index].completed = !newArray[index].completed;

      return { ...state, items: newArray };
    }

    case COMPLETE_ALL_ITEMS: {
      const itemsCompleted = state.items.map((item) => (
        !item.completed ? { ...item, completed: true } : item
      ));

      return { ...state, items: itemsCompleted };
    }

    case CLEAR_COMPLETED_ITEMS: {
      const itemsUnCompleted = state.items.map((item) => (
        item.completed ? { ...item, completed: false } : item
      ));

      return { ...state, items: itemsUnCompleted };
    }

    case REMOVE_ITEM: {
      const filteredItems = state.items.filter((item) => item.id !== action.payload);

      return { ...state, items: filteredItems };
    }

    default: {
      return state;
    }
  }
};

export const addItemAction = (payload) => ({ type: ADD_ITEM, payload });
export const completeItemAction = (payload) => ({ type: COMPLETE_ITEM, payload });
export const completeAllItemsAction = () => ({ type: COMPLETE_ALL_ITEMS });
export const clearCompletedItemsAction = () => ({ type: CLEAR_COMPLETED_ITEMS });
export const removeItemAction = (payload) => ({ type: REMOVE_ITEM, payload });
