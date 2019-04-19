import React from 'react';

const Friend = props => {
    return (
        <div className='friend'>
            <div></div>
            <p><span>Name:</span> {props.friend.name}</p>
            <p><span>Age:</span> {props.friend.age}</p>
            <p><span>Email:</span> {props.friend.email}</p>
        </div>
    )
}

export default Friend;