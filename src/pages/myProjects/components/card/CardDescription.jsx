import Balancer from 'react-wrap-balancer';

export function CardDescription({ text }) {
  return (
    <div className=" overflow-y-auto px-2 bg-background border-2 h-[40%] border-dark rounded-2xl w-full">
      <p className="text-[#D4D4D4] text-md lg:text-l p-4">{text}</p>
    </div>
  );
}
