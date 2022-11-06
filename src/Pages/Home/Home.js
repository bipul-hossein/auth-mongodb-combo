import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])

    //get code client site
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const user = { name, email }
        console.log(user)

        //fetch post example
        // step_1. create a post Api in Server site
        // step_2. uploading json data with method,headers,body; like this-
        /* ----------See the exam. in mozilla doc-------------- */
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                const newUsers = [...users, data];
                setUsers(newUsers)
            })
            .catch(error => {
                console.error('Error:', error);
            });
        //server site
        // step_4 receive req with(req.body);
        // step_5 stop undefine data use middle ware (app.use(express.json());)    
        event.target.reset()
    }

    // delete code client site
    const handleDelete = user => {
        const agree = window.confirm(`you want to delete${user.name}`)
        if (agree) {
            // console.log(`you want to delete${user._id}`)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    if (data.deletedCount > 0) {
                        alert('User delete successfully')
                        const remainingUsers = users.filter(usr => usr._id !== user._id)
                        setUsers(remainingUsers)
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <input type="submit" value="Add User" />
            </form>

            {
                users.map(everydata => <p key={everydata._id}>{everydata.name}-----{everydata?.email}<Link to={`update/${everydata._id}`}><button>Update</button></Link> <button onClick={() => handleDelete(everydata)}>X</button></p>)
            }
        </>
    );
};

export default Home;