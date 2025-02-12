import supabase from '../helper/supabaseClient';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if(error) throw error;
    navigate('/login');
  }
  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Hello, you are logged in.</h3>

      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default Dashboard;