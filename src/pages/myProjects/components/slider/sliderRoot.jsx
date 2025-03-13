export function SliderRoot({ children }) {
  return (

    <div className="h-full">
      <div className="max-w-full h-full overflow-x-auto pb-2 mx-4 snap-x snap-proximity md:m-0 ">
        <div className="h-full flex flex-nowrap justify-start items-center md:items-start gap-2">
          {children}
        </div>
      </div>
    </div>

  );
}
