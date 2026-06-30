import { useEffect, useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { fetchTalents } from '../../api/tasks';

const TalentsPage = () => {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    fetchTalents()
      .then(({ data }) => setTalents(data))
      .catch(() => alert('Failed to load talents'));
  }, []);

  return (
    <div className="flex min-h-screen" style={{ background: '#050505' }}>
      <Sidebar />

      <main className="ml-[240px] flex-1 px-8 py-8" style={{ maxWidth: 'calc(100vw - 240px)' }}>
        <div className="mb-7 page-section">
          <h1 className="font-display text-[22px] font-semibold tracking-tight"
            style={{ color: '#F0F0F0', fontFamily: 'Poppins, sans-serif' }}>
            Talents
          </h1>
          <p className="mt-0.5 text-[13px]" style={{ color: '#6B7280' }}>
            View all registered talent users in the pipeline.
          </p>
        </div>

        <div className="tasks-container page-section">
          <div className="table-header-bar">
            <h2 className="text-[15px] font-semibold"
              style={{ color: '#E5E2E1', fontFamily: 'Poppins, sans-serif' }}>
              All Talents
            </h2>
            <span className="text-[11px] px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#6B7280',
                border: '1px solid rgba(255,255,255,0.09)',
                fontFamily: 'Inter, sans-serif',
              }}>
              {talents.length} {talents.length === 1 ? 'talent' : 'talents'}
            </span>
          </div>

          {talents.length === 0 ? (
            <div className="py-16 text-center text-text-faint text-[15px]">
              No talents registered yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-bg-surface">
                    <th className="table-th">Name</th>
                    <th className="table-th">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {talents.map((talent) => (
                    <tr key={talent._id} className="border-b border-border last:border-0 hover:bg-bg-hover transition-colors">
                      <td className="table-td">
                        <div className="flex items-center gap-2">
                          <div className="w-[26px] h-[26px] rounded-full avatar-talent flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                            {talent.name?.[0]?.toUpperCase() ?? '?'}
                          </div>
                          <span className="text-text-primary">{talent.name}</span>
                        </div>
                      </td>
                      <td className="table-td text-text-muted">{talent.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TalentsPage;
