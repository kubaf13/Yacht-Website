import { FC } from 'react';
import styled from 'styled-components';

const WelcomeWrapper = styled.section`
  width: 90%;
  margin: 10px auto;
`;

export default { title: 'Welcome' };

export const Welcome: FC = () => (
  <WelcomeWrapper>
    <h1>Yacht Renting Website Storybook</h1>
    <p>
      This is a Storybook for all component in this website. In left sidebar you
      have all component with ATOMIC DESIGN system.
    </p>
  </WelcomeWrapper>
);
