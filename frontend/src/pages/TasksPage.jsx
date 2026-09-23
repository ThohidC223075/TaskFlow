function TasksPage() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Tasks</h1>
          <p className="mt-1 text-slate-500">Create, organize and track all your tasks.</p>
        </div>
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white opacity-50"
          title="Available after the API is connected"
        >
          + New Task
        </button>
      </section>

      <section className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-2xl">
          📝
        </div>
        <h2 className="mt-4 text-lg font-semibold text-slate-900">No tasks yet</h2>
        <p className="mt-1 text-sm text-slate-500">
          Task management will be available once the backend API is connected.
        </p>
      </section>
    </div>
  );
}

export default TasksPage;