import { Link } from 'react-router';

const PLACEHOLDER_STATS = [
  { label: 'Total Tasks', accent: 'bg-indigo-500' },
  { label: 'Completed', accent: 'bg-emerald-500' },
  { label: 'In Progress', accent: 'bg-amber-500' },
  { label: 'Pending', accent: 'bg-slate-400' },
];

function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Dashboard</h1>
        <p className="mt-1 text-slate-500">An overview of your tasks and progress.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PLACEHOLDER_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${stat.accent}`} />
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
            <p className="mt-3 text-3xl font-bold text-slate-900">—</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <h2 className="text-lg font-semibold text-slate-900">Your tasks will appear here</h2>
        <p className="mt-1 text-sm text-slate-500">
          Statistics will be calculated from real data once the API is connected.
        </p>
        <Link
          to="/tasks"
          className="mt-4 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Go to Tasks
        </Link>
      </section>
    </div>
  );
}

export default DashboardPage;