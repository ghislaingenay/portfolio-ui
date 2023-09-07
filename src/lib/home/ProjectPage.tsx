type Props = {
  onClick: (key: string) => void;
};

const ProjectPage = ({ onClick }: Props) => {
  return <div {...onClick}>ProjectPage</div>;
};

export default ProjectPage;
