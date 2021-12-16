import ReactFullpage from '@fullpage/react-fullpage';
import $ from 'jquery';

import Layout from '@/components/layout/Layout';
import { About, Contact, Home, Portfolio } from '@/components/sections';

export default function HomePage() {
  return (
    <Layout>
      <ReactFullpage
        licenseKey='YOUR_KEY_HERE'
        easingcss3='cubic-bezier(0.645, 0.045, 0.355, 1)'
        scrollingSpeed={1e3}
        anchors={['home', 'about', 'portfolio', 'contact']}
        animateAnchor={false}
        responsiveWidth={800}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Home />
              <About />
              <Portfolio />
              <Contact />
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
