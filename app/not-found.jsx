import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Página no encontrada</p>
      <Link href="/"></Link>
    </div>
  );
}