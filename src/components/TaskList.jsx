import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const TaskList = forwardRef( function TaskList({projectInfo}, ref) {
    const refNewTask = useRef()
    const refTaskListItem = useRef()
    const [projectArray, updateProjectInfo] = useState(projectInfo)
    const [taskList, updateTaskList] = useState(projectInfo['tasks'])

    useImperativeHandle(ref, () => {
        return {
          updateTasks(projectArrParam){
            updateProjectInfo(projectArrParam)
            if(projectArray['tasks'] !== undefined)
                updateTaskList(projectArrParam['tasks'])
          }
        }
    })

    function addTask(){
        // // Fetch values from text fields
        let taskName = refNewTask.current.value
        let updatedTaskList = []
        
        if(taskList !== undefined)
        {
            updatedTaskList = taskList
        }

        updatedTaskList.push(taskName)
        updateTaskList(updatedTaskList);

        const projectToUpdate = [projectArray]
        projectToUpdate['tasks'] = updatedTaskList

        updateProjectInfo(projectToUpdate)
        refNewTask.current.value = ''
     }      

     function handleDelete(index){
        let updatedTaskList = taskList

        updatedTaskList.splice(index,1)
        updateTaskList(updatedTaskList);

        const projectToUpdate = [projectArray]
        projectToUpdate['tasks'] = updatedTaskList

        updateProjectInfo(projectToUpdate)

     }

    return (
        <>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <menu className="flex items-start justify-start gap-4 my-4"> 
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" ref={refNewTask} />
                <button className="text-stone-800 hover:text-stone-950" onClick={addTask}>Add task</button>
            </menu>

            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {
                    projectArray['tasks'] === undefined  && <li>There are no tasks on this project</li>
                }
                {
                    projectArray['tasks'] !== undefined &&
                    
                    projectArray['tasks'].map( (task, index) => {
                        return(                            
                            <li 
                                key={index}
                                className="flex justify-between my-4" 
                            >
                                {task}
                                <button className="text-stone-800 hover:text-stone-950" onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </li>
                        )
                    }) 

                    
                }
            </ul>
        </>
    )
}
)

export default TaskList