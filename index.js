// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


const users = [
  {
    "name":"John",
    "age":30,
    "title":"developer"
  },
  {
    "name":"Red",
    "age":26,
    "title":"Jr Associate"
  },
  {
    "name":"Tom",
    "age":35,
    "title":"manager"
  }
]
//let b = JSON.parse(JSON.stringify(a));

// deep copy Wrong way
// Wrong way
// const newUser = JSON.parse(JSON.stringify(users));
// newUser.map((val) => {
//     if(val.name === 'John') {
//         val.title = "lead";
//         return val;
//     }
//     return val;
// });

//Right Way
const newUser = users.map((val) => {
    let newTitle = '';
    if(val.name === 'John') {
        newTitle = "lead";
    } else {
        newTitle = "developer"
    }
    return { ...val, title : newTitle }
});

console.log(newUser);
console.log(users);

// console.log(addNums(5)(6)(7))// output should be 18
function addNums(a){
  return function(b){
      return function(c){
        return a+b+c;
      }
    
  }
}

console.log(addNums(5)(6)(7));


// css specificity
// position in css
// Block level HTMLS
// Redux  == Flux






