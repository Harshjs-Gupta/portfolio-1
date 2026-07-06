import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { project } from '../../Data';
import Items from './Items';
import List from './List';

const allNavList = ['all', ...new Set(project.map((proj) => proj.category))];

const Projects = () => {

  const [projectItems, setMenuItems] = useState(project);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(project);
      return;
    }
    const newProjectItems = project.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };

  return (
    <section
      className='portfolio section pb-[220px] bg-gradient-0 from-bgColor to-bgColor  dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorDark px-[5%] sm:px-[2%] 2xl:px-[17%]'
      id='projects'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Projects
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Cases
        </span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className='sm:grid-cols-2 xl:grid-cols-3 gap-[40px] grid'>
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
