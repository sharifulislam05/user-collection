import React, { useEffect, useState } from 'react';
import users from '../../userData/index';
import UserCard from '../UserCard/UserCard';
import UserCart from '../UserCart/UserCart';
import './Users.css';

const Users = () => {
    const [user, setUser] = useState([]);
    const [userCart, setUserCart] = useState([]);
    useEffect(() => {
        setUser(users);
    }, [])
    const handleAddFriend = (user) => {
        const newCart = [...userCart, user]
        setUserCart(newCart);
    }
    const totalSalary = userCart.reduce((total, user) => total + parseInt(user.salary), 0);
    return (
        <main>
            <h1 className="text-center text-danger mb-5 mt-2">Random User Collection</h1>
            <div className="row mt-5 pt-5">
                <div className="user-collection col-12 col-md-9 d-flex flex-wrap"> 
                    {
                        user.map(user => 
                        <div className="userCard-wrap">
                            <UserCard user={user} handleAddFriend={handleAddFriend} key={user.id} />
                        </div>)
                    } 
                </div>
            <div className="user-card col-12 col-md-3 text-white">
                <h4 className="text-center">Friends List</h4>
                <div className="friends-salary mr-3">
                    <p>Total Friend: {userCart.length}</p>
                    <p>Total Friend Salary: ${totalSalary}</p>
                </div>
                 {
                     userCart.map(userCart => <UserCart userCart={userCart}  key={userCart.email} />)
                 }
            </div>
            </div>
        </main>
    );
};

export default Users;