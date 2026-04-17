export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="text-sm font-semibold tracking-wider text-gray-400">404</div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
