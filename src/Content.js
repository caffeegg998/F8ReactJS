// import { useState } from "react";
// import { useEffect } from "react";


// 1. useEffect(callback) 
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback,[])
//  - Chỉ callback mỗi một lần sau khi component thêm element vào DOM
// 3. useEffect(callback,[deps])
//  - Callback sẽ được gọi lại mỗi khi deps được gọi lại
//  - CleanUp funtion luôn được gọi trước khi Component Unmount

//===================
//Callback luôn được gọi sau khi component mouter ( kiểu thêm element vào DOM đó :))


//  function Content() {
//     const [title,setTitle] = useState('')

//     useEffect(() => {
//         document.title=title // Nên để trong side Effect ko nên để ngoài vì để ngoài là nó re render và trả về ,gán  cái title nhiều lần
//       console.log('Mounted',title) 
//     }) 

//     return (
//         <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//         </div>
//     )
//  }
//  export default Content;


//Call API 
//  function Content() {
//      const [title,setTitle] = useState('')
//      const [posts,setPosts] = useState([])
     
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//         })
//     }, []) 

//     return (
//         <div>
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
//  }
//  export default Content;

// useEffect() with dependencies
// const tabs =['posts','comments','albums','photos','todos','users']

// function Content() {
//     const [title,setTitle] = useState('')
//     const [posts,setPosts] = useState([])
//     const [type,setType] = useState('posts')
    
//    useEffect(() => {
//        fetch(`https://jsonplaceholder.typicode.com/${type}`)
//            .then(res => res.json())
//            .then(posts => {
//                setPosts(posts)
//        })
//    }, [type]) 
//    return (
//        <div>
//         {tabs.map((tab)=>
//             <button 
//                 key={tab}
//                 onClick={()=>setType(tab)}
//                 style={type===tab?{
//                     color: '#fff',
//                     backgroundColor: '#333',
//                 } : {}}
//                 >
//                 {tab}
//             </button>
//         )}
//            <input
//                value={title}
//                onChange={e => setTitle(e.target.value)}
//            />
//            <ul>
//                {posts.map(post => (
//                    <li key={post.id}>{post.title || post.name}</li>
//                ))}
//            </ul>
//        </div>
//    )
// }
// export default Content;


// //DOM Event Scroll
// const tabs =['posts','comments','albums','photos','todos','users']

// function Content() {
//     const [title,setTitle] = useState('')
//     const [posts,setPosts] = useState([])
//     const [type,setType] = useState('posts')
//     const [showGoToTop,setShowGoToTop]= useState(false)
    
//    useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//            .then(res => res.json())
//            .then(posts => {
//                setPosts(posts)
//        })
//    }, [type]) 

//    useEffect(() => {
//     const handleScroll = () => {
//         if(window.scrollY >= 200) {
//             setShowGoToTop(true)
//         }else {
//             setShowGoToTop(false)
//         }
//     }
//     window.addEventListener('scroll', handleScroll)
//     console.log('Add EventListener')

//     //Funtion Cleanup
//     return() => {
//         window.removeEventListener('scroll', handleScroll)
//         console.log('Remove EventListener')
//     }
    
//    },[])
//    return (
//        <div>
//         {tabs.map((tab)=>
//             <button 
//                 key={tab}
//                 onClick={()=>setType(tab)}
//                 style={type===tab?{
//                     color: '#fff',
//                     backgroundColor: '#333',
//                 } : {}}
//                 >
//                 {tab}
//             </button>
//         )}
//            <input
//                value={title}
//                onChange={e => setTitle(e.target.value)}
//            />
//                {posts.map(post => (
//                    <li key={post.id}>{post.title || post.name}</li>
//                ))}
//                {showGoToTop && (
//                 <button style={{
//                     position: 'fixed',
//                     right: 20,
//                     bottom: 20,
//                 }}>Go to Top</button>
//                )}
//        </div>
//    )
// }
// export default Content;

//DOM Event Resize

// function Content() {
   
//     const [width,setWidth]= useState(window.innerWidth)
    
//    useEffect(() => {
//     const handleResize = () => {
//         setWidth(window.innerWidth)
//     }
//     window.addEventListener('resize', handleResize)
//     console.log('Add EventListener')

//     //Funtion Cleanup
//     // return() => {
//     //     window.removeEventListener('resize', handleResize)
//     //     console.log('Remove EventListener')
//     // }
    
//    },[])
//    return (
//        <div>
//             <h1>{width}</h1>
//        </div>
//    )
// }
// export default Content;

//App Countdown dùng useEffect() và setInterval
function Content() {
   
    // const [countdown,setCountdown]= useState(180)
    
    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         setCountdown(prevState => prevState - 1)
    //     }, 1000)
        
    //     //clear Funtion
    //     return () => clearInterval(timerId)
    // },[]) 
    // console.log(countdown)
   var a = ['c','b','a'];
   a[100]= 'c';
   console.log(a.length);

   return (
       <div>
            {/* <h1>{countdown}</h1> */}
       </div>
   )
}
export default Content;