import React from 'react';
const Task = ({ task = {} }) => {
  return
}
const Tasks = ({ tasks = [] }) => {
  return <div>Task</div>
}

const Project = ({ project = {} }) => {
  const { name = "", task = [] } = project;
  return <div className="shadow-md bg-gray-500 text-gray-800 rounded-md p-3 mt-1 mx-1 lg:col-span-2 md:col-span-4" style={{ minHeight: "300px" }}>
    <div className="flex justify-between items-center px-2">
      <div>{name}</div>
      <div className="flex flex-row">

        <svg className="h-6 w-6 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg className="h-6 w-6 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>;
}
const Projects = ({ listProject = [] }) => {
  // const numberOfRows = Math.ceil(listProject.length / 6);
  return <div className={`grid p-2 sm:grid-flow-row md:grid-cols-12`} >
    {listProject.map(project => <Project key={project.id} project={project} />)}
  </div>
}

export default Projects;