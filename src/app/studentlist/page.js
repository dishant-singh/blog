import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      {/* Make dynamic list of students by creating const arr */}
      <ul>
        <li>
          <Link href="/studentlist/anil">Anil</Link>
        </li>
        <li>
          <Link href="/studentlist/dishant">Dishant</Link>
        </li>
        <li>
          <Link href="/studentlist/jay">Jay</Link>
        </li>
        <li>
          <Link href="/studentlist/yash">Yash</Link>
        </li>
        <li>
          <Link href="/studentlist/sonu">Sonu</Link>
        </li>
      </ul>
    </div>
  );
}
