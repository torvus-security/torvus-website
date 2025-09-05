import { getAudit } from "@/lib/memdb"

export const dynamic = "force-dynamic"

export default function AuditPage() {
  const events = getAudit().slice().reverse().slice(0, 200)

  return (
    <main className="container-page section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="h1">Audit Log</h1>
          <p className="body">Security events and system activity (demo)</p>
        </div>

        <div className="surface--light rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Actor</th>
                  <th className="text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="surface--light divide-y divide-gray-200">
                {events.map((e, i) => (
                  <tr key={i} className="hover:surface--muted transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(e.at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{e.actor}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{e.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {events.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="body">No audit events recorded yet.</p>
            </div>
          )}
        </div>

        <div className="mt-6 small">Showing the most recent {Math.min(events.length, 200)} events</div>
      </div>
    </main>
  )
}
