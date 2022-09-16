import styled from 'styled-components';

export const FeedbackList = styled.ul`
  list-style: none;
  display: flex;
  padding: ${p => p.theme.space[0]};
  /* background-color: ${p => p.theme.colors.lightBG}; */
  box-shadow: ${p => p.theme.shadows.text};
`;

export const FeedbackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${p => p.theme.sizes.feedbackItem};
  padding: ${p => p.theme.space[4]};
`;

export const FeedbackBtn = styled.button`
  width: ${p => p.theme.sizes.feedbackBtnW};
  height: ${p => p.theme.sizes.feedbackBtnH};
  background-color: ${p => p.backgroundColor};
  color: ${p => p.theme.colors.darkText};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  border: none;
  box-shadow: ${p => p.theme.shadows.text};
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
`;
