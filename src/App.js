//// Giới thiệu useState();
// import {useState} from 'react';       

// const orders = [ 100 , 200 , 300]
// function App() {
 
//   const [counter,setCounter] = useState(() => {                  //Đây là cách viết khi mà cần dùng giá trị tính toán làm giá trị khởi tạo
//     const total = orders.reduce((total,cur) => total + cur)
//     console.log(total);
//     return total
//   })
//   const handleIncrease = () => {
//     // setCounter(counter + 1)  // Chỉ cộng 1 lần vào counter, ko cộng dồn
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)

//     setCounter(prevState => prevState + 1) // Dùng callBack gọi giá trị trước đó của State và có thể cộng dồn nhưng re-render(thực thi) 1 lần
//     setCounter(prevState => prevState + 1)
//     setCounter(prevState => prevState + 1)
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
      
//     </div>
//   );
// }

// export default App;

// Random Gift

// import {useState} from 'react';
// const gifts = [
//   'Intel Core i5-4570',
//   'Geforce RTX 2060s',
//   'AMD RX 570',
//   'Samsung Evo 970',
//   'Iphone 14 Pro Max'
// ]
// function App() {
//   const [gift,setGift] = useState()
  
//   const randomGift = () => {
//     const index = Math.floor(Math.random()*gifts.length)
//     return (
//       setGift(gifts[index])
//     )
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//       <h1>{gift||"Chưa có phần thưởng!"}</h1>
//       <button onClick={randomGift}>"Lấy phần thưởng"</button>
//     </div>
//   );
// }
// export default App;

//One-way Binding $$ Two-way Binding
// import {useState} from 'react';
// function App() {
  //One-way Binding
  // const [name,setName] = useState('')        // Đây là One-way Binding, vì khi nhập vào input thì 
  // console.log(name)                          // chiều dữ liệu thay đổi nhưng khi thay đổi dữ liệu thì giao diện không thay đổi theo
  // return (
  //   <div className="App" style={{padding: 32}}>
  //     <input
  //       onChange={e => setName(e.target.value)}
  //       />
  //     <button onClick={() => setName('Trương Cao Thiên')}>Đổi</button>
  //   </div>
  // );

//   //Two-way Binding cho textfield
//   const [email,setEmail] = useState('')   
//   const [name,setName] = useState('')        
//   const handleSubmit = () => {
//     console.log({name,email})
//   }                        
//   return (
  
//     <div  style={{padding: 32}}>
//       <input
//         value={email}       //Get &Gán lại dữ liệu từ nút vào giao diện 
//         onChange={e => setEmail(e.target.value)}
//       />
//       <input
//         value={name}       //Get &Gán lại dữ liệu từ nút vào giao diện 
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Đăng Ký</button>
//     </div>
//   );
// }

// export default App;


//1 Two-way Binding cho radioButton
//2 Responsive from API
// import {useState} from 'react';
// const course = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]
// function App() { 
//   const [checked,setChecked] = useState()   
//   console.log(checked)       
//   const handleSubmit = () => {
//     console.log({id : checked})
//   }             
//   return (
//     <div  style={{padding: 32}}>
//       {course.map((course)=>(
//         <div key={course.id}>
//           <input type="radio"
//             checked = {checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Đăng Ký</button>
//     </div>
//   );
// }
// export default App;

//1 Two-way Binding cho checkedButton
//2 Responsive from API
// const course = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]
// function App() { 
//   const [checked,setChecked] = useState([])   // mảng nè
//   console.log(checked)       
//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
      
//       if (isChecked) //Nếu mà đã check thì uncheck lọc id khỏi mảng, ngược lại (else) thì thêm tiếp id vào mảng
//       {

//         return checked.filter(item => item !== id)
//       }else
//       {
//         return [...prev,id]
//       }
//     })
//   }
//   const handleSubmit = () => {
//     console.log({ids : checked})
//   }             
//   return (
//     <div  style={{padding: 32}}>
//       {course.map((course)=>(
//         <div key={course.id}>
//           <input type="checkbox"
//             checked = {checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={() => handleSubmit(course.id)}>Đăng Ký</button>
//     </div>
//   );
// }
// export default App;


//To-do List using useState()
// import {useState} from 'react';
// function App() { 
//   const [task, setTask] = useState('')
//   const [tasks,setTasks] = useState([])   // mảng nè       
//   const handleSubmit = () => {
//     setTasks(prev => {
//       return [...prev,task]
//     })
//     setTask('')
//   }     
//   return (
//     <div  style={{padding: 32}}>
//       <div>
//         <input 
//           value={task}
//           onChange={e => setTask(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Thêm công việc</button>
//       </div>
//       <div key={tasks.index}>
//       <ul>
//           {tasks.map((task,index) => (
//             <li key={index}>{task}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default App;

// To-do List using useState() + checkBox check công việc

// import {useState} from 'react';
// function App() { 
//   const [task, setTask] = useState('')
//   const [tasks,setTasks] = useState((() => {
//     const storageTasks = JSON.parse(localStorage.getItem('tasks'))  // Toi uu performan
//     console.log(storageTasks)
//     return storageTasks
    
//   }) ?? [] )   //Toán tử null list
//   const handleSubmit = () => {
//     setTasks(prev => {
//       const newTasks = [...prev,task]
//       const jsonTasks = JSON.stringify(newTasks)
//       localStorage.setItem('tasks', jsonTasks)
//       return [...prev,task]
//     })
//     setTask('')
    
//   } 
//   const [checked,setChecked] = useState([])   // mảng nè    
//   const handleCheck = (index) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(index)
      
//       if (isChecked) //Nếu mà đã check thì uncheck lọc id khỏi mảng, ngược lại (else) thì thêm tiếp id vào mảng
//       {

//         return checked.filter(item => item !== index)
//       }else
//       {
//         return [...prev,index]
//       }
//     })
//   } 
//   return (
//     <div  style={{padding: 32}}>
//       <div>
//         <input 
//           value={task}
//           onChange={e => setTask(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Thêm công việc</button>
//       </div>
//       {tasks.map((tasks,index)=>(
//       <div key={index}>
//           <input type="checkbox"
//             checked = {checked.includes(index)}
//             onChange={() => handleCheck(index)}
//           />
//           {tasks}
//        </div>
//       ))}
//     </div>
//   );
  
// }
// export default App;

import { useState } from 'react';
import Content from './Content';

function App(){

  const[show,setShow] = useState(false)
  return(
    <div style={{padding:20}}>
      <button onClick={()=> setShow(!show)}>Toggle</button>
      {show && <Content/>}
    </div>
  )
}
export default App;

