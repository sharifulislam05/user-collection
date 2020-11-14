import React from 'react';

const UserCart = (props) => {
    const { name, email, salary } = props.userCart;
    return (
        <div className="friends-info mr-3 text-white">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Salary: ${salary}</p>
        </div>
    );
};

export default UserCart;