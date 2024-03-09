export default function TaskList() {
    return (
        <>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <menu className="flex items-start justify-start gap-4 my-4"> 
                <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
                <button className="text-stone-800 hover:text-stone-950">Add task</button>
            </menu>

            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                <li className="flex justify-between my-4">
                    Project task 1
                    <button className="text-stone-800 hover:text-stone-950">
                        Delete
                    </button>
                </li>
                <li className="flex justify-between my-4">Project task 2</li>
            </ul>
        </>
    )
}