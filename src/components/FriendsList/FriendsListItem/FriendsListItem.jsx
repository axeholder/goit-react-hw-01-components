// import PropTypes from 'prop-types';

// import {} from './FriendsListItem.styled';

export const FriendsListItem = ({ name, avatar, isOnline }) => {
  return (
    <li class="item">
      <span class="status" isOnline={isOnline}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
