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
      initSpeed: 'normal',
      direction: 100,
      keep: true,
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
      data-aos='fade-zoom-in'
      data-aos-easing='anticipate'
      data-aos-duration='1000'
      data-aos-delay='200'
      className='flex justify-end items-center w-full h-full text-white lg:pr-8'
    >
      {/* <TagCloud /> */}
    </div>
  );
};
