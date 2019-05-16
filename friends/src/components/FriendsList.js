import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFriends } from '../actions/actions';

class FriendsList extends React.Component {
    componentDidMount(){
        this.props.getFriends();
    }

    render(){
        return (
            <div>
            {this.props.friends.map(friend => 
                <h4 key={friend.id}>{friend.name} age: <br /> 
                {friend.email}</h4>
            )}
            </div>
        )
    }
}

const mapStateToProps = ({ friends, isFetching }) => ({
    friends,
    isFetching
})

export default withRouter(
    connect(
        mapStateToProps,
        { getFriends }
    )(FriendsList)
);