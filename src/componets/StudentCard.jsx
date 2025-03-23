// import { FaPencilAlt } from "react-icons/fa";

const rankClasses = ["text-yellow-500", "text-gray-400", "text-orange-600"];

const StudentCard = ({ student, rank, onEdit }) => {
  return (
    <div className="flex items-center border-b py-2 px-4 ">
      <span className={`text-xl font-bold ${rank <= 3 ? rankClasses[rank - 1] : "text-blue-700"}`}>
        #{rank}
      </span>
      <img src={student.profile_pic} alt={student.name} className="w-12 h-12 mx-4 rounded-full" />
      <div className="flex-1 flex justify-between items-center">
        <h3 className="text-lg text-blue-900 font-semibold">{student.name}</h3>
        <p className="text-m text-blue-900 font-semibold"><span className="lg:text-white lg:bg-blue-900 lg:px-3 lg:py-1 lg:rounded-lg">Score</span> {student.total_score}</p>
      </div>
      {/* <button 
        className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={() => onEdit(student)}
      >
        <FaPencilAlt className="text-gray-700" />
      </button> */}
    </div>
  );
};

export default StudentCard;
