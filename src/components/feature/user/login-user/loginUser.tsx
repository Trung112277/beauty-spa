import { Link } from 'react-router-dom';

export function LoginUser() {
  return (
    <nav>
      <Link to="/login" className='uppercase font-bold hover:text-primary px-2 py-1 bg-black/10 block rounded-md hover:bg-secondary'>Login</Link>
    </nav>
  );
}
