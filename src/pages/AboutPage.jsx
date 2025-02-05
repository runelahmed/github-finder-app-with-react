import { Link } from "react-router-dom"

const AboutPage = () => {
  return (
    <>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
    <p className='mb-4 text-2xl font-light'>
      A React app to search GitHub profiles and see profile details. 
      <Link className="ml-2" to='https://github.com/runelahmed/github-finder-app-with-react'>
        GitHub Finder 
      </Link>
    </p>
    <p className='text-lg text-gray-400'>
      Version <span className='text-white'> 1.0.0</span>
    </p>
    <p className='text-lg text-gray-400'>
      Layout By:
      <a className='text-white ml-2' href='https://twitter.com/hassibmoddasser'>
         Hassib Moddasser
      </a>
    </p>
  </>
  )
}

export default AboutPage
