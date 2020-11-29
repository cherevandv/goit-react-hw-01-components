import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul class="friendList">
      {friends.map(friend => (
        <FriendListItem
          keyId={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
