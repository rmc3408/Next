import React from "react";
import { useRouter } from "next/router";

const unit = ({ user }) => {
  //console.log(user.email);
  const rt = useRouter();

  return (
    <div>
      <h2>USER {rt.query.id}</h2>
      <p>name : {user.name}</p>
      <p>email : {user.email}</p>
      <p>phone : {user.phone}</p>
    </div>
  );
};
/**
 * If wanna save during building path, save all articles using getStaticProps
 * and get all params ID using getStaticPaths
 *
 * However, you cannot add users, posts, dynamically
 * because it saved during build time
 */
export const getStaticProps = async (context) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await result.json();
  return { props: { user } };
};
export const getStaticPaths = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await result.json();

  const ids = users.map((user) => user.id);
  const paths = ids.map((i) => ({ params: { id: i.toString() } }));

  return {
    paths,
    fallback: false,
  };
  //return { path: { id: '1', id: '2' }} //must get a array of all id is this format
};

/**
 * Everytime enter in the user ID , fetch the user information
 */
// export const getServerSideProps = async (context) => {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
//     const user = await result.json();
//     return { props: { user }}
// }

export default unit;
