export const About = () => {
  return (
    <div>
      <h1>Strapi with Next.js</h1>
      <p>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{' '}
        is a framework that makes it easy to create Universal web apps in React.
      </p>
      <p>
        <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">
          Strapi
        </a>{' '}
        - you already know... Hopefully, heh.
      </p>
      <p>
        This is a Next.js starter project for the Strapi Conf 2021 lightning
        talk where Mr Donald Duck goes to Scranton to get crisps.
      </p>
      <h2>Get Started (3 minutes)</h2>
      <ul>
        <li>
          1. Clone the the{' '}
          <a href="https://github.com/ijsto/strapi-conf-nextjs">starter repo</a>
          <p>
            <code>git clone git@github.com:ijsto/strapi-conf-nextjs.git</code>
          </p>
        </li>
        <li>
          2. Enter the directory
          <p>
            <code>cd strapi-conf-nextjs</code>
          </p>
        </li>
        <li>
          3. Install project dependencies
          <p>
            <code>yarn</code> or <code>npm i</code> or <code>npm install</code>
          </p>
        </li>
        <li>
          To run the project locally:
          <p>
            <code>yarn dev</code> or <code>npm run dev</code>
          </p>
        </li>
        <li>
          Starter project is live at:{' '}
          <a href="http://localhost:3000">http://localhost:3000</a>
        </li>
      </ul>

      <h2>The starter is now ready - have fun!</h2>
      <p>
        For video tutorials visit{' '}
        <a
          href="https://ijs.to/classroom"
          rel="noopener noreferrer"
          target="_blank"
        >
          ijs.to/classroom
        </a>
      </p>
    </div>
  );
};

export default About;
