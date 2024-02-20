import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1, privacy: store.privacy };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1, privacy: store.privacy };
  } else if (action.type === "ADD") {
    return {
      counter: store.counter + Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "SUBTRACT") {
    return {
      counter: store.counter - Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { counter: store.counter, privacy: !store.privacy };
  }
  return store; // returns new store
};

const counterStore = createStore(counterReducer);

export default counterStore;

//Create store
//Create counterReducer
//Pass counterReducer in store (counterStore)
//export counterStore
//Provide the store with react - in main.jsx
//Use the store :
// 1) using useSelector hook - set initial value and assign that INITIAL value to store in counterReducer.
//useSelector gets the slice of the store
//2) subscription
//dispatch actions using useDispatch hook
//Diapatched action will be received in counterReducer
