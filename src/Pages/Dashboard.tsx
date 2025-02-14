import AITextInput from '../components/AITextInput.tsx';
import Calendar from '../components/Calendar.tsx';
import Chat from '../components/Chat.tsx';
import Header from '../components/header.tsx';

function Dashboard() {
  
  return (
    <div>
      <Header />
      
      <div className="flex">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-800 w-2/3">
          <AITextInput />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-900 w-1/3">
          <Calendar />
          <Chat />
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;