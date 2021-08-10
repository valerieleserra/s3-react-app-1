import React, { useEffect, useState } from "react"

export default function SignUp(){
    const[user, setUser] = useState({})
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
      fetch('http://localhost:5000/users')
         .then(rawData => rawData.json())
         .then(allUsers => setAllUsers(allUsers))
         .catch(err => console.log(err))
    }, [])

    const handleUserPost = () => {
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(err => console.log(err))

        window.location.reload(false)
    }


const handleUserForm = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
}

console.log(user)
  return (
    <>
      <h2>Sign Up</h2>
      <input type='text' 
         name='fname' 
         placeholder='First name' 
         onChange={handleUserForm} />
      <input type='text' 
         name='lname' 
         placeholder='Last name' 
         onChange={handleUserForm} />
      <input type='email' 
         name='email' 
         placeholder='Your email here' 
         onChange={handleUserForm} />
      <input type='password' 
         name='password' 
         placeholder='Your password here' 
         onChange={handleUserForm} />
      
      <button type='submit' disabled={user.email && user.password && user.lname && user.fname ? false : true}onClick={handleUserPost}>Sign me up!</button>
      {allUsers.map(eachUser => {
        return (
      <div key={eachUser._id}>
        <span> {eachUser.fname}</span>
        <span> {eachUser.lname}</span>
        <span> {eachUser.email}</span>
        <hr />
      </div>

    )
      })}

      </>
  )
    }
