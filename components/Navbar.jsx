import Link from 'next/link'
export default function Navbar() {
  return (
    <nav>
        <li>
            <Link href="/">Home</Link>
        </li>
      
      <li><Link href="/about">About</Link></li>
      <li><Link href="/tienda">Tienda</Link></li>
    </nav>
  );
}