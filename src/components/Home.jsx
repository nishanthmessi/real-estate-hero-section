import Stats from './Stats'
import SearchBar from './SearchBar'

const Home = () => {
  return (
    <>
      <section className="hero text-gray-700">
        <div className="container mx-auto  px-5 py-24 items-center">
          <div className="flex flex-col items-start text-left mb-16">
            <h1 className="text-6xl mb-4 font-medium text-gray-900">Find Real Estate
              <br/> That Suits You
            </h1>
            <p className="mb-8 leading-relaxed">We provide a complete service for the sale,<br/>purchase or rental of real estate</p>
            <Stats/>
            <div className='mt-60'>
              <SearchBar/>
            </div>  
          </div>
        </div>      
      </section>
    </>
  )
}

export default Home