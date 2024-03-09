import {useRef, useState, useEffect} from 'react'
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import NoProjectSelected from './components/NoProjectSelected';
import SideBar from './components/SideBar';

function App() {
  const [currentPage, setcurrentPage] = useState('NoProjectSelected')
  const projectPageRef = useRef()
  const [isRendered, setIsRendered] = useState(false);
  // Possible values for currentPage
  // NewProject
  // NoProjectSelected
  // Project
   const [projectList, updateProjectList] = useState([
    {id: 0, title: 'first project', description: 'description here', dueDate: '2024-11-01', tasks: ['my task', 'your task']},
    {id: 1, title: 'second project', description: 'description here', dueDate: '2024-05-01', tasks: ['task 1', 'task 2']}
  ])

  // let selectedProjectInfo = []
  const [selectedProjectInfo, updateSelectedProjectInfo] = useState()
  
  function handlePageChange(pageName){
    setcurrentPage(pageName)
  }

  const addProjectItem = (newProjectItem) => {
    updateProjectList([...projectList, newProjectItem])
  }

  // const removeProjectItem = (index) => {
  //   updateProjectList([
  //     ...projectList.slice(0, index)
  //   ]); // Slice to create a new array
  // };  

  function handleUpdateProjectList(newProjectArr){    
    let projectCount = projectList.length
    let updatedNewProjectArr = []

    updatedNewProjectArr['id'] = projectCount    
    for(const newProjectListArr of newProjectArr){
      for(const key in newProjectListArr){
        //console.log(`${key}: ${newProjectListArr[key]}`)
        updatedNewProjectArr[key] = newProjectListArr[key]
      }      
    }
    
    addProjectItem(updatedNewProjectArr)

    handlePageChange('NoProjectSelected')
  }

  function handleProjectSelection(projectId){
    //selectedProjectInfo = projectList[projectId]    
    updateSelectedProjectInfo( projectList[projectId] )
    // display appropriate page
    handlePageChange('Project')

    // set active project

    // make button appear selected

    // Need to pass project info from array
    //projectPageRef.current.updateProjectInfo(selectedProjectInfo)

    console.log(selectedProjectInfo)
  }

  // useEffect(() => {
  //   setIsRendered(true); // Set flag after potential rendering delays
  // }, []);
  
  return (
  <>  
  <main className="h-screen my-8 flex gap-8">
    <SideBar projectList={projectList} pageChangeFunc={handlePageChange} selectProjectFunc={handleProjectSelection}/>
    {currentPage === 'NoProjectSelected' && <NoProjectSelected pageChangeFunc={handlePageChange} />}
    {currentPage === 'NewProject' &&<NewProject pageChangeFunc={handlePageChange} updateProjectListFunc={handleUpdateProjectList} /> }
    {currentPage === 'Project' && <Project ref={ projectPageRef} selectedProjectInfo={selectedProjectInfo} />}
  </main>

{/* <button className="text-stone-800 hover:text-stone-950">Add task</button>
  <div className="w-[35rem] mt-16">Learn React from the ground up</div>
  <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">date here</h2>
<input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
<p className="flex flex-col gap-1 my-4">Test</p>
<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">Test</dialog>
<form className="mt-4 text-right">Test</form>
<h2 className="text-xl font-bold text-stone-700 my-4">Test</h2>
<p className="text-stone-600 mb-4">Test</p>
<div className="w-[35rem] mt-16">Test</div>
<menu className="flex items-center justify-end gap-4 my-4">Test</menu>
<div className="flex items-center gap-4">flex items-center gap-4</div>
<button className="text-stone-700 hover:text-stone-950">Test</button>
<h2 className="text-xl font-bold text-stone-500 my-4">Test</h2>
<ul className="mt-8">Test</ul>
<div className="flex items-center justify-between">Test</div>

<button className="text-stone-600 hover:text-stone-950">Test</button>
<p className="text-stone-600 whitespace-pre-wrap">Test</p>
<p className="text-stone-800 my-4">Test</p>
<button className="text-stone-700 hover:text-red-500">Test</button> */}
</>
  );
}

export default App;
