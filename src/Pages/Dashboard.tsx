import Calendar from '../components/Calendar.tsx';
import Drawer from '../components/drawer.tsx';
import Header from '../components/header.tsx';

function Dashboard() {
  
  return (
    <div>
      <Header />
      <Drawer/>
      <div className="flex">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-800 w-2/3">
          content
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-900 w-1/3">
          <Calendar />
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;