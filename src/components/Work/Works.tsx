import { useState, useEffect } from 'react';
import { navData, projectsData } from './data';
import WorkItem, { IProjectItem } from './WorkItem';

const Works = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<IProjectItem[]>([]);
  const [active, setActive] = useState('all');

  useEffect(() => {
    if (filter === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((item) => {
        return item.category === filter;
      });
      setProjects(newProjects);
    }
  }, [filter]);

  const filterHandler = (filter: string) => {
    setFilter(filter);
    setActive(filter);
  };

  return (
    <>
      <div className="work__filters">
        {navData.map((item) => {
          return (
            <span
              className={`${active === item.name ? 'work__item--active' : ''} work__item`}
              key={item.name}
              onClick={() => filterHandler(item.name)}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container ">
        {projects.map((item) => {
          return <WorkItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Works;
