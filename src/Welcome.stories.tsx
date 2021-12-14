import React, { FC } from 'react';
import styled from 'styled-components';

const WelcomeWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
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
