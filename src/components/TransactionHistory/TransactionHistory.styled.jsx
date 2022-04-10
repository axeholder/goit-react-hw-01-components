import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  width: 300px;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  border-collapse: separate;
  border-spacing: 2px;
`;

export const TableHead = styled.thead`
  display: block;
  text-align: center;
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const TableHeadTitle = styled.th`
  padding: 16px auto;
  display: block;
  width: 33%;
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  background: #2e82c3;
  border: 1px solid white;
  border-radius: 10px 10px 0 0;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  display: block;
  margin-top: 10px;
  tr:nth-of-type(2n) {
    background-color: rgb(249, 245, 239);
  }
`;

export const TableContent = styled.td`
  font-family: 'Roboto';
  padding: 10px;
  display: block;
  width: 33%;
  text-align: center;
  border: 1px solid white;
  :nth-of-type(1)::first-letter {
    text-transform: uppercase;
  }
`;
