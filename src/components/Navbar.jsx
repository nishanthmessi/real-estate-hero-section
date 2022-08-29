const Navbar = () => {
  return (
    <>
      <div className='w-full'>
        <nav className="relative container mx-auto p-4">
          <div className="flex items-center justify-between">
          <div>         
            <a className='cursor-pointer'>
              <h1 className='font-bold text-3xl'>Real</h1>
            </a>
            </div>
            <div className='font-bold'>
              <a className="cursor-pointer mr-8">Home</a>
              <a className="cursor-pointer mr-8">About</a>
              <a className="cursor-pointer mr-8">Type of house</a>
              <a className="cursor-pointer mr-8">Contact</a>
            </div>
            <div className="btn btn-md rounded px-10 space-x-10 font-bold">
              <h1>Login</h1>
            </div>
          </div>            
        </nav>
    </div>
    </>
  )
}

export default Navbar