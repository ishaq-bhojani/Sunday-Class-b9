import { getAll } from "@/services/products";
import Head from "next/head";
import Link from "next/link";

export default function Home(props) {
  const { title, products } = props;
  if (!products) {
    return <div>Loading...</div>
  }
  const productsList = products.map(product => {
    return (<li key={product.id}>
      <p>{product.title}</p>
    </li>)
  })
  return (
    <div>
      <Head>
        <title>My NextJS Page Content2</title>
        <meta name="author" content="Ishaq Bhojani" />
      </Head>
      <h1>{title}</h1>
      {productsList}
    </div>
  )
}

// export async function getServerSideProps (context) {
//   console.log(context);
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   const data = await response.json();
//   return {
//         props: {
//           title: "Hello",
//           todos: data
//         }
//       };
// }

export async function getStaticProps() {
  const data = getAll();
  console.log(data);
  return {
    props: {
      title: "Hello",
      products: data
    }
  };

}