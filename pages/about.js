export const About = () => {
  return (
    <div>
      <h1>Strapi with Next.js</h1>
      <p>
        Next.js is a framework that makes it easy to create Universal web apps
        in React.
      </p>
      <p>
        Strapi is an open source Headless CMS that enables you to quickly ship
        REST and/or GraphQL api services.
      </p>
      <p>
        This is a Next.js starter project pre-configured to work with
        Styled-Components, Strapi GraphQL and includes custom layout setup.
      </p>
      <h2>Get Started (3 minutes)</h2>
      <ul>
        <li>
          1. Clone the the{' '}
          <a href="https://github.com/ijsto/istrapi-nextjs">starter repo</a>
          <p>
            <code>git clone git@github.com:ijsto/istrapi-nextjs.git</code>
          </p>
        </li>
        <li>
          2. Enter the directory
          <p>
            <code>cd istrapi-nextjs</code>
          </p>
        </li>
        <li>
          3. Install project dependencies
          <p>
            <code>npm install</code> or <code>npm i</code>
          </p>
        </li>
        <li>
          To run the project locally:
          <p>
            <code>npm run dev</code>
          </p>
        </li>
        <li>
          Starter project is live at:{' '}
          <a href="http://localhost:3000">http://localhost:3000</a>
        </li>
      </ul>

      <h2>The starter is now ready - have fun!</h2>
    </div>
  );
};

export default About;
