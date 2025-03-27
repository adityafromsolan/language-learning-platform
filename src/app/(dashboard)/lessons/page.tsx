import React from 'react';

export default function LessonsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Lessons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">Spanish</h2>
          <p className="text-gray-600">Intermediate</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full w-2/3"></div>
            </div>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded">
            Continue
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">French</h2>
          <p className="text-gray-600">Beginner</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full w-1/4"></div>
            </div>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded">
            Continue
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">German</h2>
          <p className="text-gray-600">Not Started</p>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full w-0"></div>
            </div>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded">
            Start
          </button>
        </div>
      </div>
    </div>
  );
} 