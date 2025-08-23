interface ButtonProps {
  text: string;
  bg?: string; // optional background class (e.g. "bg-[#d6b36b]")
  onClick?: () => void;
  borderLeanr?: string;
}

export default function Button({ text, bg, borderLeanr }: ButtonProps) {
  return (
    <div>
      <button
        className={`text-[16px] cursor-pointer font-bold text-gradient px-8 py-4 rounded-lg ${bg} ${borderLeanr}`}>
        {text}
      </button>
    </div>
  );
}
