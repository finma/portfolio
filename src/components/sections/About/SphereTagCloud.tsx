import { useEffect } from 'react';
import TagCloud from 'TagCloud';

export const SphereTagCloud = () => {
  useEffect(() => {
    const container = document.getElementById('tagcloud');
    const text = [
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'MongoDB',
      'Express',
      'React',
      'NodeJS',
      'React-Redux',
      'Nextjs',
      'Tailwind CSS',
      'Material-UI',
      'Bootstrap',
      'Git',
      'Github',
      'MySQL',
      'PHP',
      'Laravel',
    ];
    const options = {
      radius: screen.width > 500 ? 300 : 130,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 100,
      keep: false,
      useContainerInlineStyles: true,
    };

    TagCloud(container, text, options);

    return () => {
      const tagClouds = document.getElementsByClassName('tagcloud');
      for (let i = 0; i < tagClouds.length; i++) {
        tagClouds[0].remove();
      }
    };
  });

  return (
    <div
      id='tagcloud'
      data-aos='fade-left'
      data-aos-easing='easeInOutCubic'
      data-aos-duration='1000'
      className='flex justify-center items-start pt-20 w-full h-full font-medium text-white lg:justify-end lg:items-center lg:pr-8 lg:mt-0'
    >
      {/* <TagCloud /> */}
    </div>
  );
};
