import React, { FC } from 'react';
import styled from 'styled-components';

const WelcomeWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  div {
    width: 90%;

    h1,
    h2,
    p {
      margin: 20px 0;
    }
  }
`;

export default { title: 'Welcome' };

export const Welcome: FC = () => (
  <WelcomeWrapper>
    <div>
      <h1>Yacht Renting</h1>
      <h3>Website Storybook</h3>
      <p>
        This is a Storybook for all component in this website. In left sidebar
        you have all component with ATOMIC DESIGN system.
      </p>
    </div>
  </WelcomeWrapper>
);
