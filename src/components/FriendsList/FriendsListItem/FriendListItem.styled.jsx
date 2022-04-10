import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  border: solid black 1px;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 10px;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  margin-left: 10px;
`;

export const FriendName = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  color: black;
`;
