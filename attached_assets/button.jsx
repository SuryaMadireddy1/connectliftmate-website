export const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`transition px-4 py-2 rounded-md font-semibold ${className}`}
  >
    {children}
  </button>
);
