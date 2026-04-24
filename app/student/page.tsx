'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Student() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex font-sans bg-gray-900 w-full h-screen text-white">
      
      {/* SIDEBAR */}
      <div className="flex flex-col h-screen w-64 bg-slate-800 p-4 shrink-0">
        <h2 className="text-2xl font-bold mb-8 px-2 text-blue-400">College One</h2>
        
        <nav className="flex flex-col space-y-2">
            <Link 
                href="/visitors" 
                className="p-3 rounded-md bg-slate-700 transition-colors" 
            >
                Main Page
            </Link>
            <Link 
                href="/student/class-registration" 
                className="p-3 rounded-md transition-colors" 
            >
                Class Registration
            </Link>
            <Link 
                href="/student/help" 
                className="p-3 rounded-md transition-colors" 
            >
                Help Page
            </Link>
        </nav>
        
        <div className="mt-auto">
          <button className="w-full text-left p-3 rounded-md hover:bg-red-500 transition-colors">
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10"> 
        <div className="flex justify-between items-end mb-8">
            <div>
            <h1 className="text-3xl font-bold">Student Page</h1>
            <p className="text-gray-400">Here's what's on your itinerary</p>
            </div>
            
            {/* TIME & SEMESTER STATUS */}
            <div className="text-right">
            <div className="text-xl font-mono text-blue-400">10:45 AM</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">
                 Mid-Semester
            </div>
            </div>
        </div>

        {/* CLASSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Advanced Mathematics', 'Computer Science 101', 'Digital Marketing', 'Ethics in AI'].map((course) => (
            <div key={course} className="p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-semibold mb-1">{course}</h3>
                <p className="text-sm text-gray-400">Room 302 • Mon/Wed/Fri</p>
            </div>
            ))}
        </div>

      </main>
      


      {/* CHAT INTERFACE */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end">
        {isOpen && (
          <div className="w-80 h-96 bg-blue-950 rounded-lg shadow-2xl mb-4 flex flex-col overflow-hidden border border-gray-600">
            {/* Chat Header */}
            <div className="bg-blue-950 p-4 text-white font-bold flex justify-between items-center">
              <span>AI Assistant</span>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">✕</button>
            </div>
            
            <div className="flex-1 p-4 text-gray-800 overflow-y-auto bg-blue-900 text-sm">
              <p className="bg-blue-100 p-2 rounded-lg mb-2 self-start">
                Hello! How can I help you today?
              </p>
            </div>

            <div className="p-3 border-t">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="w-full p-2 border rounded-md text-white focus:outline-blue-400"
              />
            </div>
          </div>
        )}


        <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform active:scale-95">
          {isOpen ? (
            <span className="font-bold">Close Chat</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
          )}
        </button>
      </div>
    </div>
  );
}