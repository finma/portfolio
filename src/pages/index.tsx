import ReactFullpage from '@fullpage/react-fullpage';
import $ from 'jquery';

import Layout from '@/components/layout/Layout';
import { Home, Portfolio } from '@/components/sections';
import { About } from '@/components/sections';

export default function HomePage() {
  return (
    <Layout>
      <ReactFullpage
        easingcss3='cubic-bezier(0.645, 0.045, 0.355, 1)'
        scrollingSpeed={1e3}
        anchors={['home', 'about', 'portfolio', 'contact']}
        animateAnchor={false}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Home />
              <About />
              <div data-anchor='portfolio' className='section'>
                <Portfolio />
              </div>
              <div data-anchor='contact' className='section'>
                <h1>Contact</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
        onLeave={function () {
          $('.section [data-aos]').each(function () {
            $(this).removeClass('aos-animate');
          });
        }}
        onSlideLeave={function () {
          $('.slide [data-aos]').each(function () {
            $(this).removeClass('aos-animate');
          });
        }}
        afterSlideLoad={function () {
          $('.slide.active [data-aos]').each(function () {
            $(this).addClass('aos-animate');
          });
        }}
        afterLoad={function () {
          $('.section.active [data-aos]').each(function () {
            $(this).addClass('aos-animate');
          });
        }}
      />
    </Layout>
  );
}
