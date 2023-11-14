// eslint-disable-next-line react-refresh/only-export-components
export function formatedDate(dateString) {
  const date = new Date(dateString);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
const SERVER_LINK = "http://localhost:3000/api/v1"
// eslint-disable-next-line react-refresh/only-export-components
export default SERVER_LINK


export function convertDateFormat(inputDate) {
  // Parse the input date string
  const parsedDate = new Date(inputDate);

  // Ensure the parsed date is valid
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date format');
  }

  // Format the date in the desired format
  const outputDate = new Date(
    parsedDate.getFullYear(),
    parsedDate.getMonth(),
    parsedDate.getDate() + 1, // Add one day
    15, // Hours
    25, // Minutes
    0,  // Seconds
    0   // Milliseconds
  );

  // Return the formatted date string in ISO 8601 format
  return outputDate.toISOString();
}



