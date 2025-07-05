import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, onClose, items }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-4">
      <button onClick={onClose} className="self-end mb-4">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.96928 3.03092L6.93916 8.00058L1.96928 12.9702L3.02991 14.0309L7.99984 9.06122L12.9698 14.0309L14.0304 12.9702L9.06052 8.00058L14.0304 3.03092L12.9698 1.97024L7.99984 6.93995L3.02991 1.97024L1.96928 3.03092Z"></path>
        </svg>
      </button>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="py-2 text-base font-semibold hover:text-gray-600"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default MobileMenu;