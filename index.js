/// Declare a variable to store the data
let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let rows = csvString.split("\n");
let columnHeaders = rows[0].split(',');
const numColumns = columnHeaders.length;

console.log(numColumns);
console.log(columnHeaders);

// data stored in 2d array
let myArray = [];

// use for Each for iterate thhough rows
rows.forEach((row) => {
  myArray.push(row.split(','));
});
// store in a cache
console.log(myArray)

// Print each row of the 2D array
/myArray.forEach((row) => { // call back function- for every row in my array..
  console.log(row); });


  // Convert 2D arry to object
const profileData=myArray.slice(1).map(row=>{
 

let obj= {};
columnHeaders.forEach((header,index)=>{

  obj[header]=row[index];
});

return obj;
})

console.log(profileData)


// Transform array to array object with lowercase
 const data= [["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]];

 const clmnHeaders=data[0].csvString(Header=>Header.toLowerCase());

 const result = data.slice(1).csvString(row=>{
  const obj={};
 })
 for (let i=0;i<clmnHeaders.length; i++){
  obj[clmnHeaders[i]]=rows[i];
 }
 return obj;
 console.log(result);