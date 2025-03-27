import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6 text-center">LinguaLearn</h1>
      <p className="text-xl mb-8 text-center">
        AI-powered language learning platform
      </p>
      <div className="flex gap-4">
        <Link 
          href="/login" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Login
        </Link>
        <Link 
          href="/register" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
