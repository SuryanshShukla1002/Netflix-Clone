import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(email);
    console.log(password);
  }
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="///" />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>
      <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg '>
          <div className='max-w-[320px] mx-auto py-16
          '>
            <h1 className='text-3xl font-nsans-bold'>Login</h1>
            <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
              <input type="email" placeholder='email' autoComplete='email' className='p-3 my-2 bg-slate-700 rounded' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='password' autoComplete='current-password' className='p-3 my-2 bg-slate-700 rounded' value={password} onChange={(e) => setPassword(e.target.value)} />

              <button className='bg-red-600 py-3 rounded font-nsans-bold'>Login</button>
              <div className='flex justify-between items-center text-gray-600'>
                <p>
                  <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)}/>
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='my-4'>
                <span className='text-gray-600 mr-2'>New to netflix?</span>
                <Link to='/signup'>Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
};
export default Login;
