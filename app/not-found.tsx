import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Not Found</h2>
      <p className="text-gray-600 mb-4">Could not find requested resource</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
