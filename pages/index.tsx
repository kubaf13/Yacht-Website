import CenteringContainer from '@atoms/CenteringContainter';
import type { NextPage } from 'next';

import { HomePage } from '@/components/template/HomePage/HomePage';
import { homePageMocks } from '@/components/template/HomePage/HomePage.mocks';

const Home: NextPage = () => (
  <CenteringContainer>
    <HomePage {...homePageMocks} />
  </CenteringContainer>
);
export default Home;
