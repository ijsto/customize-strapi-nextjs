import { useMutation } from '@apollo/client';
import LOGIN_MT from '../../api/mutations/LOGIN_MT';

const Authentication = () => {
  const [login] = useMutation(LOGIN_MT);

  const currentToken =
    typeof window !== 'undefined' && localStorage.getItem('jwt');
  const handleLogin = async e => {
    e.preventDefault();

    const { data } = await login();
    const { jwt } = data.login;
    localStorage.setItem('jwt', jwt);
    location.reload();
  };

  return !currentToken ? (
    <form onSubmit={handleLogin}>
      <button type="submit">Log in</button>
    </form>
  ) : (
    <form onSubmit={handleLogin}>
      <button type="submit">Log in</button>
    </form>
  );
};

export default Authentication;
