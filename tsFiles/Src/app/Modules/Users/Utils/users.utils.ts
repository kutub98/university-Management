import { Users } from "../User.Model";




// console.log(counter);

export const findLastUser = async () => {
  const lastUser = await Users.findOne({}, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
  return lastUser;
};

let counter = 1; // Declare counter as a module-level variable
let currentYear = new Date().getFullYear(); // Store the current year

export const generateUsersId = async () => {
  const lastUser = await findLastUser();
  let currentYearLastDigits = currentYear.toString().slice(-4); // Extract the last four digits of the current year

  let randomDigits = counter.toString().padStart(4, '0'); // Convert counter to a 4-digit string
  let studentId = `${currentYearLastDigits}${randomDigits}`; // Concatenate the current year with the random digits

  // Increment the counter
  counter++;

  // Check if the counter has reached the limit for the current year or the ID format
  if (counter > 10000 || randomDigits === '9999') {
    // If the counter exceeds 10000 or randomDigits is '9999', reset the counter and update randomDigits
    counter = 1;
    randomDigits = counter.toString().padStart(5, '0'); // Update to 5-digit randomDigits

    if (currentYear === new Date().getFullYear()) {
      // If it's still the same year, increment the currentYearLastDigits
      currentYearLastDigits = (parseInt(currentYearLastDigits) + 1).toString();
    } else {
      // If it's a new year, update the currentYear and currentYearLastDigits
      currentYear = new Date().getFullYear();
      currentYearLastDigits = currentYear.toString().slice(-4);
    }
  }

  if (lastUser && lastUser.id >= studentId) {
    // If the last user's ID is greater or equal to the generated student ID,
    // increase the counter to ensure the generated ID is unique
    counter = parseInt(lastUser.id.slice(-5)) + 1;
  }

  studentId = `${currentYearLastDigits}${randomDigits}`; // Update studentId with the updated currentYearLastDigits and randomDigits

  return studentId;
};









// export const generateUsersId = async () => {
//   const lastUser = await findLastUser();
   
//   const currentId = lastUser ? lastUser.id.toString() : "0".padStart(7, "0");
//   const incrementId =  (parseInt(currentId) + 1).toString().padStart(7, "0");
//   return incrementId;
// };
