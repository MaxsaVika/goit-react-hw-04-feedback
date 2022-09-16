import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin: ${p => p.theme.space[1]};
  margin-bottom: ${p => p.theme.space[5]};
  font-size: ${p => p.theme.fontSizes.xxl};
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.darkText};
`;
