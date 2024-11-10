import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react'
import { useState } from 'react'


const ProfileSelector = () => (
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src="http://localhost:8080/images/0e985a4b-6944-4dec-b0f7-4a4453592dd0.jpg" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black">
        <h2 className="text-3xl font-bold">Foo Bar, 30</h2>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-600 mb-4">
        I am a software engineer with over 10 years of experience in the
        industry. I am looking for a new job.
      </p>
    </div>
    <div className="p-4 justify-center space-x-4 flex">
      <button className="bg-red-500 rounded-full p-4 hover:bg-red-700 text-white" onClick={()=>console.log("left")}>
        <X size={24} />
      </button>
      <button className="bg-green-500 rounded-full p-4 hover:bg-green-700 text-white" onClick={()=>console.log("right")}>
        <Heart size={24} />
      </button>
    </div>
  </div>
);

const MatchesList = ({ onSelectMatch }) => (
  <div className="rounded-lg shadow-lg p-4">
    <h2 className="text-2xl font-bold mb-4">Matches</h2>
    <ul>
      {[
        {
          id: 1,
          firstName: "Foo",
          lastName: "Bar",
          imageUrl:
            "http://localhost:8080/images/0e985a4b-6944-4dec-b0f7-4a4453592dd0.jpg",
        },
        {
          id: 2,
          firstName: "Baz",
          lastName: "Qux",
          imageUrl:
            "http://localhost:8080/images/0e985a4b-6944-4dec-b0f7-4a4453592dd0.jpg",
        },
      ].map((match) => (
        <li key={match.id} className="mb-2">
          <button
            className="w-full rounded hover:bg-gray-100 item-center flex"
            onClick={onSelectMatch}
          >
            <img
              src={match.imageUrl}
              className="w-16 h-16 rounded-full mr-3 object-cover"
            />
            <span>
              <h3 className="font-bold">
                {match.firstName} {match.lastName}
              </h3>
            </span>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const ChatScreen = () =>{

  const [input, setInput] = useState('');

  const handleSend = () => {
    if(input.trim()){
      console.log(input);
      setInput("");
    }
    setInput("");
  }

  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with Foo Bar</h2>
      <div className="h-[50vh] border rounded overflow-y-auto mb-4 p-2">
        {[
          "Hi",
          "How are you?",
          "I am fine, thank you",
          "What are you doing?",
          "I am working on a new project",
          "That's cool",
          "Yes, it is",
        ].map((message, index) => (
          <div key={index} className="mb-2">
            <p className="p-2 bg-gray-100 rounded-lg inline-block">
              {message}
            </p>
          </div>
        ))
        }
      </div>
      <div className="flex">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 p-2 mr-2 border rounded-l" />
        <button className="bg-blue-500 text-white p-2 rounded-r" onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

function App() {

  const [currentScreen, setCurrentScreen] = useState('profile');

  const renderScreen = () => {
    switch(currentScreen){
      case 'profile':
        return <ProfileSelector />;
      case 'matches':
        return <MatchesList onSelectMatch={() => setCurrentScreen("chat")} />;
      case 'chat':
        return <ChatScreen />;
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto">
        <nav className="flex justify-between mb-4">
          <User onClick={() => setCurrentScreen('profile')}/>
          <MessageCircle onClick={() => setCurrentScreen('matches')}/>
        </nav>
        {renderScreen()}
      </div>
    </>
  );
}

export default App
