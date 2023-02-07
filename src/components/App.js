import { useState } from 'react';
import './App.css';
import Item from "./Item/Item"
import CreateTodoField from "./CreateTodoField/CreateTodoField"
import data from "./data"





function App() {
  
  const [list, setList] = useState(data);

  const changeTodo = (id) => {
    const copy = [...list];
    const current = copy.find(item => item.id === id);
    current.isComplited = !current.isComplited;
    setList(copy);
  }

  const removeTodo = (id) => { setList([...list].filter(item => item.id!== id)); }


  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className='text-2xl font-bold text-center mb-8' >Todo List</h1>
      <CreateTodoField setList={setList} />
      {
        list.map(item => (<Item key={item.id} data={item} changeTodo={changeTodo} removeTodo={removeTodo} />))
      }
    </div>
  );
}

export default App;
