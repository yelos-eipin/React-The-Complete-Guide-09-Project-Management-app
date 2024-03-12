import {useRef, useState, useEffect} from 'react'
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import NoProjectSelected from './components/NoProjectSelected';
import SideBar from './components/SideBar';

function App() {
  const [currentPage, setcurrentPage] = useState('NoProjectSelected')
  const projectPageRef = useRef()
  // Possible values for currentPage
  // NewProject
  // NoProjectSelected
  // Project
   const [projectList, updateProjectList] = useState([
    {id: 0, title: 'first project', description: 'description here', dueDate: '2024-11-01', tasks: ['my task', 'your task']},
    {id: 1, title: 'second project', description: 'description over there', dueDate: '2024-05-01', tasks: []}
  ])

  const [selectedProjectInfo, updateSelectedProjectInfo] = useState()
  
  function handlePageChange(pageName){
    setcurrentPage(pageName)
  }

  const addProjectItem = (newProjectItem) => {
    updateProjectList([...projectList, newProjectItem])
  }

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
    //update selectedProjectInfo variable
    updateSelectedProjectInfo( projectList[projectId] )

    // display appropriate page
    handlePageChange('Project')

    // make button appear selected

    // Need to pass project info from array
    if(projectPageRef){
      projectPageRef.current.updateProjectInfo(projectList[projectId])
    }
    

  }

   
  return (
  <>  
    <main className="h-screen my-8 flex gap-8">
      <SideBar projectList={projectList} pageChangeFunc={handlePageChange} selectProjectFunc={handleProjectSelection}/>
      {currentPage === 'NoProjectSelected' && <NoProjectSelected pageChangeFunc={handlePageChange} />}
      {currentPage === 'NewProject' &&<NewProject pageChangeFunc={handlePageChange} updateProjectListFunc={handleUpdateProjectList} /> }
      {currentPage === 'Project' && <Project ref={ projectPageRef} selectedProjectInfo={selectedProjectInfo} />}
    </main>
  </>
  );
}

export default App;
