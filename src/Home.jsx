import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from './UserReducer';

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispach(deleteUser({ id: id }));
  }

  return (
    <>
      <div className="overflow-x-auto p-10">
        <Link to='/create' className='btn bg-blue-600 text-white text-xl p-2 rounded mb-4'>Add New</Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn bg-blue-600 text-white text-xl">
                    edit
                  </Link>
                  <button onClick={() => handleDelete(user.id)} className="btn bg-red-600 ml-6 text-white text-xl">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home
