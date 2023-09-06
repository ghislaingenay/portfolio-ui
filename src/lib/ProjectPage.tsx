import { Routing } from '@interface';
import React from 'react';

type Props = {
  onClick: (key: string) => void;
  routes: Routing[];
};

const ProjectPage = ({ onClick, routes }: Props) => {
  return <div>ProjectPage</div>;
};

export default ProjectPage;
