import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
// import conf from './conf/conf'
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';

const App = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    authService.getUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false));
  },[])

  const userData = useSelector((stata) => stata.auth.userData);
  console.log("my" ,userData);

  return !loading ? <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className='w-full block'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </div> : null
}

export default App