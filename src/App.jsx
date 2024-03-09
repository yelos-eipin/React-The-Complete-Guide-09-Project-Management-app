import {useState} from 'react'
import Project from "./components/Project";
import Home from './components/Home';

function App() {
  const [currentPage, setcurrentPage] = useState('home')


  return (
  <>  
  <main className="h-screen my-8 flex gap-8">

    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">      
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Add project</button>
      <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">Project 1</button>
      <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">Project 2</button>
    </aside> 
    {currentPage === 'project' && <Project /> }
    {currentPage === 'home' && <Home /> }
    


  </main>  


<button className="text-stone-800 hover:text-stone-950">Add task</button>
  <label className="text-sm font-bold uppercase text-stone-500">Add task</label>
  <div className="w-[35rem] mt-16">Learn React from the ground up</div>
  <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">date here</h2>
<input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
<p className="flex flex-col gap-1 my-4">...</p>
<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">...</dialog>
<form className="mt-4 text-right">...</form>
<h2 className="text-xl font-bold text-stone-700 my-4">...</h2>
<p className="text-stone-600 mb-4">...</p>
<div className="w-[35rem] mt-16">...</div>
<menu className="flex items-center justify-end gap-4 my-4">...</menu>
<div className="flex items-center gap-4">flex items-center gap-4</div>
<button className="text-stone-700 hover:text-stone-950">...</button>
<h2 className="text-xl font-bold text-stone-500 my-4">...</h2>
<ul className="mt-8">...</ul>
<div className="flex items-center justify-between">...</div>

<button className="text-stone-600 hover:text-stone-950">...</button>
<p className="text-stone-600 whitespace-pre-wrap">...</p>
<p className="text-stone-800 my-4">...</p>
<button className="text-stone-700 hover:text-red-500">...</button>
</>
  );
}

export default App;
