import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {updateUser} from './UserReducer'

const Edit = () => {
const { id } = useParams();
const users = useSelector((state) => state.users);
const existingUser = users.filter((user) => user.id == id);
const { name, email } = existingUser[0];
const [uname, setName] = useState(name);
const [uemail, setEmail] = useState(email);
    const dispach = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispach(
          updateUser({
            id,
            uname,
            uemail,
          })
        );
        navigate('/')
    }
return (
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default Edit;
