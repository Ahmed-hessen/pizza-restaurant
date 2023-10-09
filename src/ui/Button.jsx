import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-widest text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4 ',
    secondary:
      'inline-block text-sm px-4 py-2.5 md:px-6 md:py-3.5 rounded-full border-2 border-stone-300 font-semibold uppercase tracking-widest text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed ',
    small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
    round: base + ' py-1 px-2 md:px-4 md:py-2 text-sm',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
