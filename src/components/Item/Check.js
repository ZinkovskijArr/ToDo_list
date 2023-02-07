import {BsCheck} from "react-icons/bs"

function Check({isComplite}) {
  return (
    <div className={`border-2 rounded-lg border-pink-400 w-6 h-6 mr-3 ${isComplite? 'bg-pink-400': ''} flex items-center `}>
      <BsCheck size={24} className="text-white" />
    </div>
  );
}

export default Check;
