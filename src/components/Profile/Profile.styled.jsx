import styled from '@emotion/styled';
// import { findByLabelText } from '@testing-library/react';

export const ProfileContainer = styled.div`
  // display: flex;
  width: 300px;
  border: solid black 1px;
  border-radius: 10px;
  margin: auto;
  background-color: white;
  padding-top: 24px;
`;

export const ProfileDescription = styled.div`
  text-align: center;
`;

export const ProfileAvatar = styled.img`
  border: solid black 1px;
  border-radius: 50%;
  // border-radius: 10px 100px / 120px;
  width: 150px;
  background-color: rgb(249, 245, 239);
`;

export const ProfileName = styled.p`
  font-size: 32px;
  font-family: 'Roboto';
`;

export const ProfileTag = styled.p`
  margin-top: 5px;
  font-size: 18px;
  font-family: 'Roboto';
  color: gray;
`;

export const ProfileLocation = styled.p`
  margin-top: 5px;
  font-size: 18px;
  font-family: Roboto;
  color: gray;
`;

export const ProfileStatsList = styled.ul`
  padding-inline-start: 0;
  margin-top: 30px;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  border-radius: 0 0 10px 10px;
  background-color: rgb(249, 245, 239);
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  :not(:last-child) {
    border-right: 1px solid black;
  }
`;
export const ProfileStatsLabel = styled.span`
  font-family: Roboto;
  font-size: 18px;
  color: gray;
`;

export const ProfileStatsQuantity = styled.span`
  font-family: Roboto;
  margin-top: 5px;
  font-weight: bold;
  font-size: 18px;
  color: black;
`;
