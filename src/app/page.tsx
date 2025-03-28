import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          LinguaLearn
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Master new languages with our AI-powered learning platform. Practice speaking, reading, and writing with personalized lessons.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/login" 
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out flex items-center justify-center space-x-2"
          >
            <span>Sign In</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link 
            href="/register" 
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-50 border-2 border-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out flex items-center justify-center space-x-2"
          >
            <span>Create Account</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Link>
        </div>
        <div className="mt-12 text-gray-600">
          <p className="text-sm">Start your language learning journey today!</p>
        </div>
      </div>
    </main>
  );
}
