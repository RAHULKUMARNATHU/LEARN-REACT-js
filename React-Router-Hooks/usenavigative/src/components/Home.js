import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();


// const navToPage=(bool)=>{
//   let x = bool;
//   if(x){
//     navigate('/user')
//   }else{
//     navigate('/filter')
//   }
 
// }


const navToPage=(url)=>{
  navigate(url)

}

  return (
    <div>
      <h2>
        This is Home Page :)
      </h2>
      <p>
       Happy to learning React-Router-dom 
      </p>
      <p>
       Here using useNavigate
      </p>
      <Link to="/contact">Go to Contact</Link>
      <br/>
      {/* <button onClick={()=>navigate('/user')} > */}
      {/* <button onClick={()=>navToPage(true)}> */}
      <button onClick={()=>navToPage('/user')}>
      Go to User
      </button >
      <br/>
      {/* <button onClick={()=>navigate('/filter')} > */}
      {/* <button onClick={()=>navToPage(false)}> */}
      <button onClick={()=>navToPage('/filter')}>
      Go to Filter
      </button>
    </div>
  )
}
