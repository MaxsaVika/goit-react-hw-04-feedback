import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: ${p => p.theme.sizes.statList};
  margin-bottom: ${p => p.theme.space[4]};
  padding: ${p => p.theme.space[0]};
  background-color: ${p => p.theme.colors.lightBG};
  box-shadow: ${p => p.theme.shadows.text};
`;

export const StatisticItem = styled.li`
  display: flex;
  align-items: center;

  padding: ${p => p.theme.space[4]};
`;
