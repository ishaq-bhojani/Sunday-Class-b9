import Link from "next/link";

export default function Home(props) {
  const {todo} = props;
  if(!todo) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <h1>Todo Detail Page</h1>
      <p>{todo.title}</p>
    </div>
  )
}

export async function getStaticProps ({params}) {
  try {
    const {todoId} = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();
    if(!data) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        todo: data
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      notFound: true
    }
  }

}

export async function getStaticPaths () {
  return {
    paths: [
      {
        params: {
          todoId: '1',
        },
      }
    ],
    fallback: true, // false or "blocking"
  }
}
