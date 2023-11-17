// 1. // npm install redux react-redux

// // *******************************************

// // 2. Create Redux Store:

// // store.js
// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;


// // *******************************************


// // 3.Create Reducers:

// // reducers.js
// const initialState = {
//     counter: 0
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return { ...state, counter: state.counter + 1 };
//       case 'DECREMENT':
//         return { ...state, counter: state.counter - 1 };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;

//   // *******************************************

// //   4.Create Actions:

// // actions.js
// export const increment = () => {
//     return {
//       type: 'INCREMENT'
//     };
//   };
  
//   export const decrement = () => {
//     return {
//       type: 'DECREMENT'
//     };
//   };

//   // *******************************************

  
// //   5. Integrate with React:

// // Counter.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from './actions';

// const Counter = ({ counter, increment, decrement }) => {
//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };

// export default connect(mapStateToProps, { increment, decrement })(Counter);

// // *******************************************

// // 6. Connect Redux to the App:

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import Counter from './Counter';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));






