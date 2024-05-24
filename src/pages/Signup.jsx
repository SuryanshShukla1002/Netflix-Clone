const Signup = () => {
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="///" />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>
      <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg '>
          <div className='max-w-[320px] mx-auto py-16
          '>
            <h1 className='text-3xl font-nsans-bold'>Sign Up</h1>
            <form className='w-full flex flex-col py-4'>
              <input type="email" placeholder='email' autoComplete='email' className='p-3 my-2 bg-slate-700 rounded' />
              <input type="password" placeholder='password' autoComplete='current-password' className='p-3 my-2 bg-slate-700 rounded' />

              <button className='bg-red-600 py-3 rounded font-nsans-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-gray-600'>
                <p>
                  <input type="checkbox"  />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default Signup