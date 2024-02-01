import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error404">
      <h2 className="error404h2">Sorry Page Not Found</h2>
      <p className="error404p">Could not find requested post</p>
      <Link classname="error404a" href="/">
        Return to the homepage
      </Link>
    </div>
  );
}
