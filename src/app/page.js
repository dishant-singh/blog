"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main>
      <h1>Basic Routing | Make New Page</h1>
      <Link href={"/login"}>Go to login Page</Link>
      <br />
      <Link href={"/about"}>Go to About page</Link>
      <br />
      <br />
      <button onClick={() => navigate("login")}>Go to Login Page</button>
      <br />
      <br />
      <button onClick={() => navigate("about")}>Go to About Page</button>
    </main>
  );
}
