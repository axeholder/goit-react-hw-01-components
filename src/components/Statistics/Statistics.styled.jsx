import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  margin: auto;
  margin-top: 40px;
  background-color: white;
  padding: 0px;
`;

export const StatisticsTitle = styled.h2`
  font-family: 'Roboto';
`;

export const StatisticsList = styled.ul`
  // border-top: 1px solid black;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
export const StatisticsItem = styled.li`
  font-family: 'Roboto';
  // text-align: center;
  display: flex;
  flex-direction: column;
`;

export const StatisticsLabel = styled.span`
  font-family: 'Roboto';
`;

export const StatisticsPercentage = styled.span`
  font-family: 'Roboto';
`;
