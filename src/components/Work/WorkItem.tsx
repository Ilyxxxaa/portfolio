export interface IProps {
  item: IProjectItem;
}

export interface IProjectItem {
  id: number;
  image: string;
  title: string;
  category: string;
  link: string;
}

const WorkItem = ({ item }: IProps) => {
  return (
    <div className="work__card">
      <img className="work__img" src={item.image} alt={item.title} />
      <h3 className="work__title">{item.title}</h3>
      <a className="work__button" href={item.link} target="_blank" rel="noreferrer">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItem;
