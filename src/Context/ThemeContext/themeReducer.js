export const themeReducer = (state, action) => {
<<<<<<< HEAD
    switch (action.type) {
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      default:
        return state;
    }
  };
=======
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
>>>>>>> 2d80e3aea209821f0f3ba86596b070c3ee597665
