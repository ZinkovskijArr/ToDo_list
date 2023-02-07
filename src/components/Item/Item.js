import Check from "./Check";
import { BsTrash } from "react-icons/bs"


function Item({ data, changeTodo, removeTodo }) {
  return (
    <div className="flex items-center mb-4 justify-between rounded-2xl bg-gray-800 p-5 w-100"  >
      <button className='flex items-center' onClick={() => changeTodo(data.id)}>
        {<Check isComplite={data.isComplited} />}
        <span className={`${data.isComplited ? 'line-through' : ''}`}> {data.title} </span>
      </button>
      <button onClick={() => removeTodo(data.id)}>
        <BsTrash size={22} className="text-gray-600 hover:text-red-500" />
      </button>

    </div>
  );
}

export default Item;
