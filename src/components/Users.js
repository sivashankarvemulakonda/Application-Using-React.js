import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        // Fetch data from a public API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        style={{ listStyleType: 'none', marginBottom: '10px', cursor: 'pointer' }}
                        onClick={() => handleUserClick(user)}
                    >
                        <span
                            style={{
                                transition: 'color 0.4s, transform 0.4s',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'red';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '';
                                e.target.style.transform = 'translateX(0)';
                            }}
                        >
                            {user.name} ({user.email})
                        </span>
                    </li>
                ))}
            </ul>

            {/* Display selected user information */}
            {selectedUser && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
                    <h2>User Information</h2>
                    <p><strong>Name:</strong> {selectedUser.name}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Username:</strong> {selectedUser.username}</p>
                    <p><strong>Phone:</strong> {selectedUser.phone}</p>
                    <p><strong>Website:</strong> {selectedUser.website}</p>
                    <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
                    <p><strong>Company:</strong> {selectedUser.company.name}</p>
                </div>
            )}
        </div>
    );
};

export default Users;
