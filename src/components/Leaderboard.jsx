import React, { useState, useEffect } from "react";
import { getLeaderboard /*, updateStudent, deleteStudent */ } from "../leaderboard_services/leaderboardService";
import StudentCard from "./StudentCard";
import { Trophy  } from "lucide-react";

const Leaderboard = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("lifetime");
  /* const [editingStudent, setEditingStudent] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    profile_pic: "",
    marks: "",
    activity_points: "",
  }); */

  useEffect(() => {
    fetchLeaderboard(filter);
  }, [filter]);

  const fetchLeaderboard = async (selectedFilter) => {
    try {
      const data = await getLeaderboard(selectedFilter);
      setStudents(data);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
    }
  };

  /* const handleEditClick = (student) => {
    setEditingStudent(student);
    setUpdatedData({
      name: student.name,
      profile_pic: student.profile_pic,
      marks: student.marks,
      activity_points: student.activity_points,
    });
  };

  const handleUpdate = async () => {
    if (!editingStudent) return;
    
    try {
      await updateStudent({ id: editingStudent.id, ...updatedData });
      fetchLeaderboard(filter);
      setEditingStudent(null);
    } catch (error) {
      console.error("Failed to update student:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      fetchLeaderboard(filter);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  }; */

  
  const topThree = students?.slice(0, 3) || [];
const remainingStudents = students?.slice(3) || [];
  return (
      <div className="w-full bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/building.png')" }}>
        <div className="border-2 hidden sm:block border-blue-900 rounded-md p-4 w-[230px] h-auto mt-[400px] ml-[100px]">
  {["weekly", "monthly", "lifetime"].map((type) => (
    <div
      key={type}
      className={`rounded-md px-3 py-2 mb-4 last:mb-0 cursor-pointer ${
        filter === type ? "bg-blue-100" : "bg-white text-blue-900" 
      }`}
      onClick={() => setFilter(type)}
    >
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={filter === type}
          onChange={() => setFilter(type)}
        />
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </label>
    
    </div>
  ))}
</div>


      <div className="max-w-2xl mx-auto p-6 mt-[100px] font-maven lg:mt-[-480px] ">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-900 flex items-center justify-center gap-2">
    <Trophy className="w-8 h-8" stroke="blue" fill="blue" />
    Leaderboard
    <Trophy className="w-8 h-8" stroke="blue" fill="blue" />
  </h2>
  
        <div className="flex justify-center mb-4">
          {["weekly", "monthly", "lifetime"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 mx-2 rounded-md ${filter === type ? "bg-[#010066]  text-white" : "bg-gray-200 transition-transform duration-300 hover:scale-110"}`}
              onClick={() => setFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

    {/* Top 3 Students Section  */}
    
  <div className="grid grid-cols-3 gap-4 items-end mb-6 mt-[50px]">
    
    
    <div className="bg-white h-auto p-4 rounded-[20px] text-center shadow-lg translate-y-[10px] border-2 border-indigo-500 transition-transform duration-300 hover:scale-110">
      
      <img src={topThree[1]?.profile_pic} alt={topThree[1]?.name} className="w-16 h-16 mx-auto rounded-full mt-2" />
      
      
  <div className="flex items-center justify-center bg-gray-500 text-white text-xs sm:text-sm font-bold py-1 px-3 sm:px-4 rounded-full w-fit mx-auto mt-2">
    🥈 Rank: 2
  </div>


    
      <h3 className="text-lg font-bold text-blue-900 mt-2">{topThree[1]?.name}</h3>

    

    
      <p className="text-blue-700 mt-2 font-semibold"> {topThree[1]?.total_score}</p>
    </div>

    
    <div className="relative bg-white lg:h-auto h-full p-4 rounded-[20px] text-center shadow-lg translate-y-[-10px] border-2 border-indigo-500 transition-transform duration-300 hover:scale-110">
      
    
      <div className="relative w-auto h-28  mx-auto ml-[-5px] lg:ml-[10px] lg:mb-6 flex justify-center">
        <img src="/images/frame.png" alt="frame" className="absolute inset-0 lg:-top-2 top-2  h-[105px] lg:h-auto rounded-full mx-aut z-0" />
        <img src={topThree[0]?.profile_pic} alt={topThree[0]?.name} className="w-20 h-20 rounded-full mx-auto absolute inset-0 m-auto z-10" />
      </div>

  <div className="flex items-center justify-center bg-yellow-500 text-white   text-xs sm:text-sm font-bold py-1 px-3 sm:px-4 rounded-full w-auto mx-auto mt-2">
      <span className="text-white text-lg"> <Trophy className="w-auto h-auto" stroke="white" fill="white" /></span>Rank: 1 
      </div>

    
      <h3 className="text-lg font-bold text-blue-900 mt-2">{topThree[0]?.name}</h3>

      
    
      <p className="text-blue-700 mt-2 font-semibold"> {topThree[0]?.total_score}</p>
    </div>

    
    <div className="bg-white h-auto p-4 rounded-[20px] text-center shadow-lg translate-y-[10px] border-2 border-indigo-500 transition-transform duration-300 hover:scale-110">
      
      <img src={topThree[2]?.profile_pic} alt={topThree[2]?.name} className="w-16 h-16 mx-auto rounded-full mt-2" />
      
    
      
      <div className="flex items-center justify-center bg-[#CD7F32]  text-white text-xs sm:text-sm font-bold py-1 px-3 sm:px-4 rounded-full w-fit mx-auto mt-2">
      🥉Rank: 3
      </div>

      
      <h3 className="text-lg font-bold text-blue-900 mt-2">{topThree[2]?.name}</h3>

    
      
      <p className="text-blue-700 mt-2 font-semibold"> {topThree[2]?.total_score}</p>
    </div>

  </div>

        {/* Remaining Students Section */}
        <div className="p-4 space-y-4">
    {remainingStudents.length > 0 ? (
      remainingStudents.map((student, index) => (
        <div
          key={student.id}
          className="bg-white lg:h-[110px] border-2 border-blue-500 rounded-[20px] p-4 shadow-md transition-transform duration-300 hover:scale-110 "
        >
          <StudentCard 
            student={student} 
            rank={index + 4} 
          />
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No data available</p>
    )}
  </div>

        {/* Edit Modal uncomment this if you want to use edit leaderboard fucntionality */}
        {/* {editingStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4">Edit Student</h3>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-2 mb-2 border rounded" 
                value={updatedData.name} 
                onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
              />
              <input 
                type="text" 
                placeholder="Profile Pic URL" 
                className="w-full p-2 mb-2 border rounded" 
                value={updatedData.profile_pic} 
                onChange={(e) => setUpdatedData({ ...updatedData, profile_pic: e.target.value })}
              />
              <input 
                type="number" 
                placeholder="Marks" 
                className="w-full p-2 mb-2 border rounded" 
                value={updatedData.marks} 
                onChange={(e) => setUpdatedData({ ...updatedData, marks: e.target.value })}
              />
              <input 
                type="number" 
                placeholder="Activity Points" 
                className="w-full p-2 mb-4 border rounded" 
                value={updatedData.activity_points} 
                onChange={(e) => setUpdatedData({ ...updatedData, activity_points: e.target.value })}
              />
              <div className="flex justify-between">
                <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                <button onClick={() => setEditingStudent(null)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
                <button 
                  className="px-4 py-2 bg-red-500 text-white rounded" 
                  onClick={() => handleDelete(editingStudent.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )} */}
      
      </div>
      </div>
      
    );
  };

  export default Leaderboard;
