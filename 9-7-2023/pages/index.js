import Head from "next/head";
import Link from "next/link";

export default function Home(props) {
  const {title, todos} = props;
  if(!todos) {
    return <div>Loading...</div>
  }
  const todosList = todos.map(todo => {
    return (<li key={todo.id}>
      <p>{todo.title}</p>
    </li>)
  })
  return (
    <div>
      <Head>
        <title>My NextJS Page Content2</title>
        <meta name="author" content="Ishaq Bhojani" />
      </Head>
      <h1>{title}</h1>
      {todosList}
    </div>
  )
}

export async function getServerSideProps (context) {
  console.log(context);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  return {
        props: {
          title: "Hello",
          todos: data
        }
      };
}

// export async function getStaticProps () {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = await response.json();
//   
// }