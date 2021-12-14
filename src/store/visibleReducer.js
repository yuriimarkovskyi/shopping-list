const defaultState = {
  visible: false,
};

const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

export const visibleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      return {...state, visible: !state.visible};

    default:
      return state;
  }
};

export const changeVisibilityAction = () => ({type: CHANGE_VISIBILITY});