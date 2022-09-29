import Header from '@/components/header';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="w-full">
      <Header />
    </div>
  </Main>
);

export default About;