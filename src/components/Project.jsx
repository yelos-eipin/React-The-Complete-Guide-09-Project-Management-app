export default function Project() {
  return (
    <div className="w-[35rem] mt-16">
      <h1 className="text-3xl font-bold text-stone-600 mb-2">Learning React</h1>
      <p className="mb-4 text-stone-400">Dec 29, 2024</p>

      <p className="mt-8">Learn React from the ground up</p>
      <p className="mt-8">
        Start with the basics, leave with advanced knowledge
      </p>

      <header className="pb-4 mb-4 border-b-2 border-stone-300"></header>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-800 hover:text-stone-950">Add task</button>

      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        <li className="flex justify-between my-4">
          Project task 1
          <button className="text-stone-800 hover:text-stone-950">
            Delete
          </button>
        </li>
        <li className="flex justify-between my-4">Project task 2</li>
      </ul>
    </div>
  );
}
