import toast from "react-hot-toast";

interface CardProps {
  name: string;
  icon: React.ReactNode;
}

const copyToClipboard = async (txt: string) => {
  try {
    const clipboardItem = new ClipboardItem({
      "text/plain": new Blob([txt], { type: "text/plain" }),
    });
    await navigator.clipboard.write([clipboardItem]);
  } catch (error) {
    await navigator.clipboard.writeText(txt);
  }
  toast("Copied to clipboard!", {
    icon: "🥳",
    style: {
      borderRadius: "10px",
      background: "#121212",
      color: "#fff",
    },
  });
};

const Card = (props: CardProps) => {
  return (
    <div
      title={`Copy ${props.name} to clipboard`}
      className="flex flex-col items-center justify-center py-4 transition duration-200 ease-in-out transform border-2 rounded-md cursor-pointer bg-midgnight border-neutral-800 hover:border-indigo-900"
      onClick={() => copyToClipboard(`<${props.name} />`)}
    >
      {props.icon}
      <p className="mt-2 font-medium text-gray-300">{props.name}</p>
    </div>
  );
};

export default Card;
