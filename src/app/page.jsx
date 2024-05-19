import FormTasks from "./components/FormTasks";
import ListTask from "./components/ListTasks";

export const dynamic = "force-dynamic";

function HomePage() {
  return (
    <div className="container mx-auto">
      <h1>Task Manager!</h1>
      <div className="flex gap-x-10">
        <FormTasks />
        <ListTask />
      </div>
    </div>
  );
}

export default HomePage;