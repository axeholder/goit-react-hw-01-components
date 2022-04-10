import PropTypes from 'prop-types';

import { FriendsListItem } from './FriendsListItem/FriendsListItem';
import { FriendListContainer } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendListContainer>
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
    </FriendListContainer>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
