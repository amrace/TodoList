import './App.css';
import TodoInput from './components/todoinput/TodoInput';
import Index from './components/addtodo/Index';
import { Provider } from 'react-redux';
import Store from './reduxfeatures/Store';
import AddToList from './components/AddToList';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <TodoInput/>
      <Index/>
      <AddToList/>  
    </div>
    </Provider>
  );
}

export default App;
