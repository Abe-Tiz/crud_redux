import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
    const users = useSelector((state) => state.users);
    console.log(users);
  return (
    <>
      <div className="overflow-x-auto p-10">
        <button className='btn bg-blue-600 text-white text-xl p-2 rounded mb-4'>Add New</button>
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
                  <button className="btn bg-blue-600 text-white text-xl">
                    edit
                  </button>
                  <button className="btn bg-red-600 ml-6 text-white text-xl">
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
