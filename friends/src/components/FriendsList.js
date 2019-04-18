import React from 'react';
import { connect } from "react-redux";
import { getFriends } from '../actions';
import Friend from './Friend';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }
    render(props) {
        console.log(this.props.friends);
        
        return (
            <div className="friends-list-wrapper">
                {this.props.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
});

export default connect(mapStateToProps, { getFriends })(FriendsList);