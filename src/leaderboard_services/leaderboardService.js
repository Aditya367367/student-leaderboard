import fetchAPI from  "../global.service/global.services";

export const getLeaderboard = async (filter = "lifetime") => {
  return fetchAPI(`leaderboard.php?filter=${filter}`);
};

// export const updateStudent = async (student) => {
//   return fetchAPI(`update.php`, "PUT", student);
// };

// export const deleteStudent = async (id) => {
//   return fetchAPI(`delete.php`, "DELETE", { id });
// }

// export const addStudent = async (id) => {
//   return fetchAPI(`add_students.php`, "POST", { id });
// };