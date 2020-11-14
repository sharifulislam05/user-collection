import React from 'react';
import './UserCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const UserCard = (props) => {
    const handleAddFriend = props.handleAddFriend;
    const { name, img, email, phone, salary } = props.user;
    return (
        <div>
            <div className="card  m-3 mt-5">
                <img className="card-img img-fluid mx-auto" src={img} alt="Card cap" />
                    <div className="card-body text-secondary p-0 ml-3">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Phone: {phone}</p>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Phone: {phone}</p>
                    <p className="card-text">Salary: ${salary}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => handleAddFriend(props.user)} className="btn btn-primary">
                        <FontAwesomeIcon icon={faPlus} />
                        Add Friend</button>
                    </div>
            </div>
        </div>
    );
};

export default UserCard;