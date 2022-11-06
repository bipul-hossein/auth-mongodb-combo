import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storUser = useLoaderData()
    const [users, setUsers] = useState(storUser);
    console.log(users);

    const handleUpdateUser = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const user = { name, email };
    setUsers(user)
  
      fetch(`http://localhost:5000/users/${storUser._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert ("user updated")
                console.log(data);
            }
        })
        .catch(err => console.error(err))
    }
  


    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input type="text" defaultValue={storUser.name} name="name" placeholder='Name' />
                <br />
                <input type="email" defaultValue={storUser.email} name="email" id="" placeholder='Email' />
                <br />
                <button type="submit">update User</button>
            </form>
        </div>
    );
};

export default Update;