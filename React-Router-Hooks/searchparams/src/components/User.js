
// http://localhost:3000/user?name=Shivansh 
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function User() {
    const [searchParams ,setSearchparams]  = useSearchParams()
    // console.log(searchParams.get('name'))
      
     // const name = searchParams.get('name')
    // const age = searchParams.get('age')

    const[name , profession] =[searchParams.get('name') , searchParams.get('profession')]
    return (
    <div>
        <h2>
            User <Link to={{pathname:`/about/${name}`}} >{name}</Link>
        </h2>
    </div>
  )
}
