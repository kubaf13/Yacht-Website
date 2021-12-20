import Jumbotron from '@organisms/Jumbotron';
import { jumbotronMocks } from '@organisms/Jumbotron/Jumbotron.mocks';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <h1>Hello</h1>
    <Jumbotron {...jumbotronMocks} />
  </div>
);

export default Home;
