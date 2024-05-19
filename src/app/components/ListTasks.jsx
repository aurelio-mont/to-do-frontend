
async function getTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tasks/`)
  const tasks = await res.json()
  return (tasks)
}
async function ListTasks() {
  const tasks = await getTasks()
  console.log(tasks)

  return (
    <div className="bg-slate-700 p-4 w-full">
      <h2>ListTasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="bg-slate-500 p-4 mb-2 rounded-md mb-2 flex justify-between items-center">
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div className="flex justify-between gap-x-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">Update</button>
          </div>
        </div>
      ))}
    </div>
  )
}


export default ListTasks