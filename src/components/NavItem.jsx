import { Link } from 'react-router-dom';

function NavItem({ label, to, type, isOpen, toggle }) {
  if (type === 'link') {
    return (
      <Link to={to} className="hover:text-gray-600 transition-colors duration-200">
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={toggle}
      className={`hover:text-gray-600 transition-colors duration-200 ${
        isOpen ? 'text-gray-800 font-bold' : ''
      }`}
    >
      {label}
    </button>
  );
}

export default NavItem;