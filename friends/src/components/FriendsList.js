import React from 'react';
import { connect } from "react-redux";
import { getFriends, addFriend } from '../actions';
import Friend from './Friend';
import addIcon from '../img/icon-add.png'

class FriendsList extends React.Component {
    state = {
        className: 'hidden',
        name: '',
        email: '',
        age: ''
    }
    componentDidMount() {
        this.props.getFriends();
    }
    clickHandler = e => {
        e.preventDefault();
        this.setState({ className: "display" });
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.addFriend(newFriend);
        this.setState({ className: "hidden", name: '', age: '', email: '' });


    }

    render(props) {
        return (
            <div className="friends-list-wrapper">

                <div className={`new-friend ${this.state.className}`}>
                    <img className='add-friend' src={addIcon} alt='' onClick={this.clickHandler} />
                </div>

                <form className={`form ${this.state.className}`} onSubmit={this.submitHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type='number'
                        name='age'
                        placeholder='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <button type='submit'>Add Friend</button>
                </form>

                {this.props.friends.map(friend => <Friend friend={friend} key={friend.id} />)}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
});

export default connect(mapStateToProps, { getFriends, addFriend })(FriendsList);