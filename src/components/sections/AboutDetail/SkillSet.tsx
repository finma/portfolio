import { getSkills } from '@/services/skill';

import { CardSkill } from './components/CardSkill';

export const SkillSet = () => {
  const skills = getSkills();

  return (
    <section className='flex flex-col mb-32 w-full h-full'>
      <div
        data-aos='fade-right'
        data-aos-easing='easeInOutCubic'
        data-aos-duration='1000'
        className='px-10 mb-16 w-full h-full lg:px-0 lg:mb-0 lg:w-1/2'
      >
        <h3 className='tracking-[0.15em] text-2xl font-normal text-white uppercase lg:text-4xl'>
          <span className='text-red-custom font-semibold'>03</span> Skill Set
        </h3>
      </div>
      <div className='flex flex-wrap gap-10 justify-center items-center m-auto mt-0 w-full h-full md:w-3/4 lg:flex-row lg:justify-evenly lg:items-start lg:mt-20 lg:w-2/3'>
        {skills.map(({ title, icon }, index) => (
          <div
            key={title}
            data-aos='fade-up'
            data-aos-easing='easeInOutCubic'
            data-aos-duration='1000'
            data-aos-delay={index * 50}
          >
            <CardSkill title={title} icon={icon} />
          </div>
        ))}
      </div>
    </section>
  );
};
