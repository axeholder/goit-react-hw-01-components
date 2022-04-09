// import PropTypes from 'prop-types';

import { FriendsListItem } from './FriendsListItem/FriendsListItem';
import {} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendsListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
      ;
    </ul>
  );
};
