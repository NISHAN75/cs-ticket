const TaskSidebar = ({ isProgress, setProgress, resolvedTasks, setResolvedTasks }) => {

  const handleComplete = (task) => {
    const remainingTasks = isProgress.filter(item => item.id !== task.id);
    setProgress(remainingTasks);
    setResolvedTasks([...resolvedTasks, task]);
  };

  return (
    <div className="lg:col-span-3">
      <div className="sticky top-[85px]">

        {/* Section 1: Task Status */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Task Status</h2>
          {isProgress.length === 0 ? (
            <p className="text-slate-500 text-sm mt-4">Select a ticket to add to Task Status</p>
          ) : (
            <div className="space-y-4 mt-0">
              {isProgress.map((task) => (
                <div key={task.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-slate-800 font-semibold mb-4 text-lg">
                    {task.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleComplete(task)}
                    className="w-full cursor-pointer bg-[#00a651] hover:bg-[#008540] text-white py-2.5 rounded-lg font-medium transition-colors"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: Resolved Task */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Resolved Task</h2>
          {resolvedTasks.length === 0 ? (
            <p className="text-slate-500 text-sm mt-4">No resolved tasks yet.</p>
          ) : (
            <div className="space-y-3 mt-6">
              {resolvedTasks.map((task) => (
                <div key={task.id} className="bg-[#e8edff] p-4 rounded-xl shadow-sm">
                  <p className="text-slate-800 font-medium">{task.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TaskSidebar;