const { detectProjects } = require('lerna/utils');

const test = async () => {
  const { projectGraph, projectFileMap } = await detectProjects();
};
test();
