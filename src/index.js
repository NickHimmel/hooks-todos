import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import * as serviceWorker from './serviceWorker';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const App = () => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className="container mx-auto max-w-md font-mono p-8">
        <TodoList />
        <TodoForm />
      </div>
    </TodosContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
