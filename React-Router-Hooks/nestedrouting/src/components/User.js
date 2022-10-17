
// http://localhost:3000/user?name=Shivansh 
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function User() {
    const [searchParams ,setSearchParams]  = useSearchParams()
    // console.log(searchParams.get('name'))
      
     // const name = searchParams.get('name')
    // const age = searchParams.get('age')

    const[name , profession] =[searchParams.get('name') , searchParams.get('profession')]
    return (
    <div>
        <input type='text' placeholder='Enter User Name Here' onChange={(e)=>{setSearchParams({name:e.target.value  })}}/>

        <h2>
            User <Link to={{pathname:`/about/${name}`}} >{name}</Link>
        </h2>
    </div>
  )
}
