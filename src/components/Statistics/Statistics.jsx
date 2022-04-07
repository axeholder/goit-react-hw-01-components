// import PropTypes from 'prop-types';

import { StatisticsSection, StatisticsTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <ul class="stat-list">
        {stats.map(dataItem => {
          return (
            <li class="item" key={dataItem.id}>
              <span class="label">{dataItem.label}</span>
              <span class="percentage">{dataItem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </StatisticsSection>
  );
};
