// /// Declare a variable to store the data
// let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// let rows = csvString.split("\n");
// let columnHeaders = rows[0].split(',');
// const numColumns = columnHeaders.length;

// console.log(numColumns);
// console.log(columnHeaders);

// // data stored in 2d array
// let myArray = [];

// // use for Each for iterate thhough rows
// rows.forEach((row) => {
//   myArray.push(row.split(','));
// });
// // store in a cache
// console.log(myArray)

// // Print each row of the 2D array
// /myArray.forEach((row) => { // call back function- for every row in my array..
//   console.log(row); });

//   // Convert 2D arry to object
// const profileData=myArray.slice(1).map(row=>{

// let obj= {};
// columnHeaders.forEach((header,index)=>{

//   obj[header]=row[index];
// });

// return obj;
// })

// console.log(profileData)

// // Transform array to array object with lowercase
//  const data= [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]];

//  const clmnHeaders=data[0].csvString(Header=>Header.toLowerCase());

//  const result = data.slice(1).csvString(row=>{
//   const obj={};
//  })
//  for (let i=0;i<clmnHeaders.length; i++){
//   obj[clmnHeaders[i]]=rows[i];
//  }
//  return obj;
//  console.log(result);

// let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// let columnHeaders= [];
// let currentHeader ='';
// let numColumns=0;

// let headerRowComplete=false

// // for Loop
// for (let i=0;i<csvString.length; i++){
//     if (csvString[i]===','||csvString[i]==='\n')
// if (currentHeader!==''){
//     columnHeaders.push(currentHeader);
//     currentHeaders.push(currentHeader);
//     currentHeader='';
//     numColums++;
// }

// if (csvString[i]==='\n'
// ){
//     headerRowComplete=true;
//     break;

// }else{
//     currentHeader+=csvString[i];
// }
// // adding last header
// if (currentHeader!=='')
// columnHeaders.push(currentHeader);
// numColumns++;

// console.log(numColumns);
// console.log(columnHeaders);

// let dataArray=[];
// let firstRow=[];
// let currentCell='';
// let indexRow=0;

// for (let i=0; i<csvString.length; i++){

//     if (csvString[i]===','||csvString[i]==='\n1'){
//         firstRow.push(currentCell);
//         currentCell='';

//         if (csvString[i]==='\n1'){
//             dataArray.push(firstRow);
//             firstRow=[];
//             rowIndex++;

//         }

// }else{
//     (currentCell+=csvString[i]);

//     }
// }
// if (currentCell){
//     firstRow.push(currentCell);
// }
// if (firstRow.length>0){
//     dataArray.push(firstRow)
// }
// console.log(dataArray);

// dataArray.forEach((row) => {
//     console.log(row);
// });

// const profileData = dataArray.slice(1).map(row => {
//     let obj = {};
//     for (let i = 0; i < columnHeaders.length; i++) {
//         obj[columnHeaders[i]] = row[i];
//     }
//     return obj;
// });

// const data = [
//     ["ID", "Name", "Occupation", "Age"],
//     ["42", "Bruce", "Knight", "41"],
//     ["57", "Bob", "Fry Cook", "19"],
//     ["63", "Blaine", "Quiz Master", "58"],
//     ["98", "Bill", "Doctor's Assistant", "26"]
// ];

// const clmnHeaders = data[0].map(header => header.toLowerCase());

// const result = data.slice(1).map(row => {
//     const obj = {};
//     for (let i = 0; i < clmnHeaders.length; i++) {
//         obj[clmnHeaders[i]] = row[i];
//     }
//     return obj;
// });

// console.log(result);

// let dataArray2 = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//     { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }
// ];

// let sortArray = [{ id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }];
// let removedElement = sortArray.pop();
// console.log(sortArray);

// sortArray.sort();
// console.log(removedElement)};

// let profileData={};

//  let numArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

//  let sortArray=[ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" ]
// let removedElement= sortArray.pop();
// console.log(sortArray)

// sortArray.sort();
// console.log(removedElement)

//Declare a variable that stores the number of columns in each row of data within the CSV
// ( This is a repeated code after Tishana talked on how to complete this problem using for loop)
let csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
//store any number of colums
let columnHeaders = [];
let currentHeader = "";
let numColumns = 0;

let headerRowComplete = false;

// create a for Loop through the string
for (let i = 0; i < csvString.length; i++) {
  if (csvString[i] === "," || csvString[i] === "\n")
    if (currentHeader !== "") {
      columnHeaders.push(currentHeader);
      currentHeaders.push(currentHeader);
      currentHeader = "";
      numColums++;
    }
  // add new row
  if (csvString[i] === "\n") {
    headerRowComplete = true;
    break;
  } else {
    currentHeader += csvString[i];
  }
  // adding last header
  if (currentHeader !== "") columnHeaders.push(currentHeader);
  numColumns++;

  console.log(numColumns);
  console.log(columnHeaders);
  //create a 2D array
  let dataArray = [];
  let firstRow = [];
  let currentCell = "";
  let indexRow = 0;

  for (let i = 0; i < csvString.length; i++) {
    if (csvString[i] === "," || csvString[i] === "\n1") {
      firstRow.push(currentCell);
      currentCell = "";
      // add a row to every new line
      if (csvString[i] === "\n1") {
        dataArray.push(firstRow);
        firstRow = [];
        rowIndex++;
      }
    } else {
      currentCell += csvString[i];
    }
  }
  if (currentCell) {
    firstRow.push(currentCell);
  }
  if (firstRow.length > 0) {
    dataArray.push(firstRow);
  } // log new dataArray
  console.log(dataArray);

  dataArray.forEach((row) => {
    console.log(row);
  });
  //create  an arry of objects from 2d array
  const profileData = dataArray.slice(1).map((row) => {
    let obj = {};
    for (let i = 0; i < columnHeaders.length; i++) {
      obj[columnHeaders[i]] = row[i];
    }
    return obj;
  });
  // data array
  const data = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor's Assistant", "26"],
  ];
  // conver column headers to lowercase
  const clmnHeaders = data[0].map((header) => header.toLowerCase());

  const result = data.slice(1).map((row) => {
    const obj = {};
    for (let i = 0; i < clmnHeaders.length; i++) {
      obj[clmnHeaders[i]] = row[i];
    }
    return obj;
  });

  console.log(result);
  //new array
  let dataArray2 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" },
  ];
  //remove element
  let sortArray = [
    { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" },
  ];
  let removedElement = sortArray.pop();
  console.log(sortArray);

  //add object
  sortArray.sort();
  console.log(removedElement);
  let addObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  dataArray2.splice(1, 0, addObject);
  console.log(dataArray2);
}

// from this object array
let objectArry = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//Calculate the average (as in this example, https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js)
let ages = 0;
for (let i = 0; i < objectArry.length; i++) {
  total += parseInt(objectArry[i].age);
}
let avg = total / objectArry.length;

console.log(avg);

//Transform final data to CSV ( Not able to complete)

const objectArry3 = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
// initialize a new string
let newString = "";

for (const key in objectArry3) {
  console.log(objectArry3[key]);
}
//loop through each objec to get the values
for (let i = 0; i < objectArry3.length; I++) {
  const row = objectArry3[i];
}
