import PropTypes from 'prop-types';

export default function FriendListItem({ keyId, avatar, name, isOnline }) {
  return (
    <li class="item" key={keyId}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={'photo' + name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  keyId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
