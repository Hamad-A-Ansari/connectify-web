import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-gray-300 text-lg max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
