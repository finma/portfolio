import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';

export default function HomePage() {
  return (
    <Layout>
      <div className='flex justify-center items-center w-full min-h-screen'>
        <h1 className='text-white'>FINMA</h1>
        <ButtonLink href='/components'>Components</ButtonLink>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        officia pariatur enim consequatur accusamus sint assumenda dolorum,
        omnis ipsum debitis dicta! Quos accusantium laborum corrupti
        perspiciatis illo cupiditate, quae possimus? Quis iste ut necessitatibus
        assumenda illum, similique vitae tenetur! Fugit maiores, saepe quas
        inventore architecto pariatur incidunt consequatur ratione? Dicta
        corrupti tempore amet natus asperiores non placeat exercitationem vitae
        molestias. Id voluptatem reiciendis nostrum quae quaerat, itaque est
        error odit. Eligendi quasi perferendis voluptatem cupiditate quidem ut,
        facere enim numquam incidunt iusto, odit nulla commodi expedita
        veritatis adipisci animi eaque. Architecto atque nesciunt praesentium,
        iusto in consectetur consequuntur provident suscipit numquam dolore
        facere dignissimos quo sunt voluptas molestiae obcaecati porro! Beatae
        enim sequi harum facere, error autem tempore laboriosam quod? Aperiam
        rem porro quis quae optio accusantium, eveniet impedit enim laboriosam
        hic repudiandae qui, reprehenderit perspiciatis! Eos necessitatibus,
        alias saepe impedit officiis, sed consequuntur quaerat hic id laudantium
        magnam natus?s
      </p>
    </Layout>
  );
}
