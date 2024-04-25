import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This page is not available in website</h1>

      <Link href="/">Click here to go home page</Link>
    </div>
  );
}
