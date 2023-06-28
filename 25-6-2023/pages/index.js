import Link from "next/link";

export default function Home() {
  const customers = [
    {
      name: "",
      id: "",
      projects: [
        {
          name: "",
          detals: ""
        }
      ]
    }
  ];
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Our Costomrs</h2>
      <Link href="/customers">Go to Customers</Link>
    </div>
  )
}
