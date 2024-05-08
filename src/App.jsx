import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.status);
  // const Status = useSelector((state) => state.auth.userData.$id);
  console.log(authStatus);
  // console.log("status", Status)
  
  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData) => {
        if(userData) {
          dispatch(login({userData}))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false)})
        console.log("here")
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App


// "appwrite": "^14.0.1",