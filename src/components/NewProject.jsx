import { useRef } from "react"

export default function newProject({pageChangeFunc, updateProjectListFunc}){
    const refTitle = useRef()
    const refDescription = useRef()
    const refDueDate = useRef()

function handleSave(){
   // Fetch values from text fields
   let title = refTitle.current.value
   let description = refDescription.current.value
   let dueDate = refDueDate.current.value

   //insert values into a new array that will be passed to function on App component
   let newTitleArr = [
    {'title': title, 'description': description, 'dueDate': dueDate}
   ]

   updateProjectListFunc(newTitleArr)
}    
return (    
    <div className="mt-24 w-2/3">
      <menu className="flex items-center justify-end gap-4 my-4"> 
        <button className="text-stone-700 hover:text-red-500" onClick={() => pageChangeFunc('NoProjectSelected')} >Cancel</button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
      </menu>
      <div className="grid grid-rows-6 grid-flow-col gap-4">
        <label className="text-sm font-bold uppercase text-stone-500">Title</label>
        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" ref={refTitle} />
        <label className="text-sm font-bold uppercase text-stone-500">Description</label>
        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" ref={refDescription}  />
        <label className="text-sm font-bold uppercase text-stone-500">Due date</label>
        <input type="date" label="Due Date" ref={refDueDate} />
      </div>
    </div>
)

}