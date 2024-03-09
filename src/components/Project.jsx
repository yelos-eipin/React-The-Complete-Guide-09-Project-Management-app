import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import TaskList from './TaskList';

const Project = forwardRef( function Project({selectedProjectInfo},ref) {
  const titleRef = useRef()

  const [pageInfo, updatePageInfo] = useState(selectedProjectInfo)
  const [projectInfo, updateProjectInfo] = useState(selectedProjectInfo)

  if(selectedProjectInfo !== selectedProjectInfo){
    updatePageInfo(selectedProjectInfo)
  }
  
  console.log(selectedProjectInfo)

  // useImperativeHandle(ref, () => {
  //     return {
  //       updateProjectInfo(selectedProjectInfo){
  //         updatePageInfo(selectedProjectInfo)
  //         console.log(selectedProjectInfo)
  //       }
  //     }
  // })


  return (
    <div className="w-[35rem] mt-16">
      <h1 className="text-3xl font-bold text-stone-600 mb-2" ref={titleRef}>{pageInfo && pageInfo['title']}</h1>
      <p className="mb-4 text-stone-400">{pageInfo && pageInfo['dueDate']}</p>

      <p className="mt-8">
        {pageInfo && pageInfo['description']}
      </p>

      <header className="pb-4 mb-4 border-b-2 border-stone-300"></header>
      <TaskList />
    </div>
  );
}
)

export default Project
