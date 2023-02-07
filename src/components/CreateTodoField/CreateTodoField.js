import { useState } from "react";
import { BsPlus } from "react-icons/bs"


function CreateTodoField({ setList }) {

  const addToDo = title => {
    if(title === '') return 0;
    setList(prev => [{
      id: new Date().valueOf(),
      title,
      isComplited: false
    }, ...prev]);
    setTitle('');
  }

  const [title, setTitle] = useState('');
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'  >
      <input type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addToDo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Add a task' />
      <button onClick={() => addToDo(title)}>
        <span className="border-2 rounded-lg border-pink-400 w-6 h-6 flex items-center  hover:bg-pink-400  ">
          <BsPlus size="24" className="hover:stroke-1" />
        </span>
      </button>
    </div>
  );
}

export default CreateTodoField;
