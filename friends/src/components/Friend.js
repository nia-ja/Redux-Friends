import React from 'react';

const Friend = props => {
    return (
        <div className='friend'>
            <h2>#{props.friend.id}</h2>
            <h3>Name: {props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend;