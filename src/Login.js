import React, { useState } from 'react';

export default function Login() {
    const[user, setUser] = useState({})
    const [status, setStatus] = useState('login')

    const handleUserForm = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

 const handleUserLogin = () => {
     fetch('http://localhost:5000/login',{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body:JSON.stringify(user),
     })
     .then(res => (res.ok ? setStatus('User logged in') : setStatus ('authentication failed')))
     .catch(err => console.log(err))
 }

 return (
    <>
      <h2>Login</h2>
      <h4>Email</h4>
      <input type='email' name='email' onChange={handleUserForm} />
      <h4>Password</h4>
      <input type='password' name='password' onChange={handleUserForm} />
      <button type='submit' onClick={handleUserLogin} disabled={user.email && user.password ? false : true}>
        Sign Me in!
      </button>
    </>
  )
}

//   return(
//     <>
//         <h1>Login</h1>
//           <h4>Email</h4>
//              <input type="email"
//              onChange={handleUserForm} />
      
//            <h4>Password</h4>
//               <input type="password" 
//               onChange={handleUserForm} />
      
            
//         <button type="submit" 
//                 onClick={handleUserLogin} 
//                 disabled={user.email && user.password ? false : true}>
//                 Submit
//         </button>
//     </>
//   )
// }