import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4">404 Page is not Found</h1>
      <Link to="/" className="underline text-first">
        Home Page
      </Link>
    </div>
  );
}
