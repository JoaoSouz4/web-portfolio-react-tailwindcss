export function ButtonRoot({ children, style, action }) {
  const handleClick = () => {
    if (action) action();
  };
  return (
    <button
      className={
        style == 'leaked'
          ? 'bg-transparent border-2 border-primary rounded-xl px-4 py-2 hover:bg-backgroundhover h-10 items-center flex justify-center py-6'
          : 'h-10 bg-primary rounded-md px-9 py-2 hover:duration-200 hover:ease hover:bg-[#1E8D76] flex items-center justify-center rounded-xl py-6'
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
