import { Link } from "react-router-dom"

const UserItem = ({user: {login, avatar_url}}) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row item-center space-x-4 card-body">
           <div className='avatar'>
            <div className="rounded-full shadow w-14 h-14">
                <img src={avatar_url} alt="avatar" />
            </div>
            </div> 
            <div>
                <h2 className="card-title">
                    {login}
                </h2>
                <Link className="text-base-content text-opacity-40" to={`/users/${login}`}></Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem

