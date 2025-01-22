import Link from "next/link";
export const metadata = {
  title: "Tienda oficial"
};
export default function TiendaLayout( {children} ) {
  return <> 
    <nav>
      <h2>Sección tienda</h2>
      <ul>
        <li><Link href="/tienda/categorias">Categorias</Link></li>
        <li><Link href="/tienda/categorias/computadoras">Computadoras</Link></li>
      </ul>
    </nav>
    {children}
  </>
}