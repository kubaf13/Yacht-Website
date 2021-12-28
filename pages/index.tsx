import CenteringContainer from '@atoms/CenteringContainter';
import AboutUs from '@molecules/AboutUs';
import { aboutUsMocks } from '@molecules/AboutUs/AboutUs.mocks';
import Cards from '@organisms/Cards';
import { cardsMocks } from '@organisms/Cards/Cards.mocks';
import Gallery from '@organisms/Gallery';
import { galleryMocks } from '@organisms/Gallery/Gallery.mocks';
import Jumbotron from '@organisms/Jumbotron';
import { jumbotronMocks } from '@organisms/Jumbotron/Jumbotron.mocks';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <CenteringContainer>
    <Jumbotron {...jumbotronMocks} />
    <AboutUs {...aboutUsMocks} />
    <Cards {...cardsMocks} />
    <Gallery {...galleryMocks} />
  </CenteringContainer>
);
export default Home;
