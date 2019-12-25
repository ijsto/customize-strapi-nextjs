import Jumbo from '../components/dataDisplay/Jumbo';
import QuerySample from '../components/QuerySample';
import MutationSample from '../components/MutationSample';

export default () => {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto' }}>
      <Jumbo>
        <h1>Next.js with GraphQL Apollo Client</h1>
      </Jumbo>

      <QuerySample />
      <MutationSample />
      <a
        href="https://ijs.to/courses/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>Learn code on iJS.to</h2>
      </a>
      <ul>
        <li>
          <a
            href="https://ijs.to/courses/nextjs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/react"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/graphql"
            rel="noopener noreferrer"
            target="_blank"
          >
            GraphQL
          </a>
        </li>
        <li>
          <a
            href="https://ijs.to/courses/"
            rel="noopener noreferrer"
            target="_blank"
          >
            and other courses
          </a>
        </li>
      </ul>
    </div>
  );
};
