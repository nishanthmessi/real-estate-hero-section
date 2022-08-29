import {Home, User, DollarSign } from 'react-feather'

const SearchBar = () => {
  return (
    <>
      <div className='flex'>
        <div className='btn px-10 active'>Rent</div>
        <div className='btn px-10'>Buy</div>
        <div className='btn px-10'>Sale</div>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="stat-figure text-primary">
            <Home/>
          </div>
          <div className="stat-value text-primary">Location</div>
          <div className="stat-title">Bangalore</div>
        </div>        
        <div className="stat">
          <div className="stat-figure text-secondary">
            <User/>
          </div>
          <div className="stat-value text-secondary">Persons</div>
          <div className="stat-title">2</div>
        </div>       
        <div className="stat">
          <div className="stat-figure text-secondary">
              <DollarSign/>
          </div>
          <div className="stat-value">Rent</div>
          <div className="stat-title">10K</div>
        </div>
        <div className="stat">
          <a href="" className='btn px-10'>Search</a>
        </div>
      </div>
    </>
  )
}

export default SearchBar