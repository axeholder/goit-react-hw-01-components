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
  border-top: 1px solid black;
  border-radius: 0 0 10px 10px;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0;
  background-color: rgb(249, 245, 239);
`;

export const StatisticsItem = styled.li`
  width: 100%;
  font-family: 'Roboto';
  padding: 10px 0;
  display: flex;

  flex-direction: column;
  :not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StatisticsLabel = styled.span`
  font-family: 'Roboto';
  color: gray;
`;

export const StatisticsPercentage = styled.span`
  font-family: 'Roboto';
`;
