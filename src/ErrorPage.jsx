import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      class="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div class="text-center bg-white shadow-md rounded-lg p-8">
        <h1 class="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p class="text-lg text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p class="text-sm text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <a
          href="/"
          class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
