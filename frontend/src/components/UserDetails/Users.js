import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import axios from "axios";

const URL = "http://localhost:5000/users";

const fetchHandler  = async () => {
  return await axios.get(URL).then((res) => res.data);
}
function Users() {

  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  },[])
  
  return (
    <div>
      <Nav />
      <h1>user Details Display Page</h1>
    </div>
  )
}

export default Users
