import React from 'react';
import UseFetch from './UseFetch';

interface User {
    id: number;
    name: string;
}

const UserList = () => {
    const { data, loading, error } = UseFetch<User[]>('https://jsonplaceholder.typicode.com/users');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <ul>
            <h1>UserList using useFetch and useEffect</h1>
            {data?.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};
export default UserList;
