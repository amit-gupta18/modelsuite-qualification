import { useEffect, useState } from 'react';
import TalentSidebar from '../../components/talent/TalentSidebar';
import MyTasksList from '../../components/talent/MyTasksList';
import { fetchMyTasks } from '../../api/talent';

const TalentTasksPage = () => {
  const [myTasks, setMyTasks] = useState([]);
  const [error, setError] = useState(null);

  const loadMyTasks = async () => {
    try {
      const { data } = await fetchMyTasks();
      setMyTasks(data);
    } catch {
      setError('Failed to load your tasks');
    }
  };

  // eslint-disable-next-line
  useEffect(() => { loadMyTasks(); }, []);

  return (
    <div className="flex min-h-screen" style={{ background: '#050505' }}>
      <TalentSidebar />

      <main className="ml-[220px] flex-1 px-8 py-8" style={{ maxWidth: 'calc(100vw - 220px)' }}>
        <div className="mb-7 page-section">
          <h1 className="text-[22px] font-semibold tracking-tight"
            style={{ color: '#F0F0F0', fontFamily: 'Poppins, sans-serif' }}>
            My Tasks
          </h1>
          <p className="mt-0.5 text-[13px]" style={{ color: '#6B7280' }}>
            View and submit your claimed tasks.
          </p>
        </div>

        {error && (
          <p className="text-[13px] mb-4 px-4 py-3 rounded-lg"
            style={{ color: '#F87171', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
            {error}
          </p>
        )}

        <section className="page-section">
          <MyTasksList tasks={myTasks} onRefresh={loadMyTasks} />
        </section>
      </main>
    </div>
  );
};

export default TalentTasksPage;
