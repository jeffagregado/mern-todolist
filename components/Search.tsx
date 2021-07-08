import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
  return (
    <div className="relative block">
      <button className="absolute top-2 left-[170px] text-gray-400">
        <FontAwesomeIcon icon="search" />
      </button>
      <input type="search" placeholder="Search" className='rounded-2xl' />
    </div>
  )
}

export default Search
