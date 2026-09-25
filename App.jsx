import React from 'react'
// first-way 
const user=localStorage.setItem('user','Dipanshu kr yadav')
const age=localStorage.setItem('age',19)

console.log(user);
console.log(age);

const user1= localStorage.getItem('user')

console.log('user1');

// Second-way 

const User2 ={
  name:'Dipanshu kr yadav' ,
  age : 18 ,
  city : 'gkp'
}

localStorage.setItem('user2',JSON.stringify(User2));


const App = () => {
  return (
    <div>
      App 
    </div>
  )
}

export default App
