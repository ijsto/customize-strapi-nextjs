import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

import LOGIN_MT from '../../api/mutations/LOGIN_MT';

const Authentication = () => {
  const [login] = useMutation(LOGIN_MT);

  const handleLogin = async e => {
    e.preventDefault();

    const { data } = await login();
    const { jwt } = data.login;
    Cookies.set('jwt', jwt);
    location.reload();
  };

  return (
    <form onSubmit={handleLogin}>
      <button type="submit">Log in</button>
    </form>
  );
};

export default Authentication;
