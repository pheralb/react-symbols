import toast from "react-hot-toast";

const Command = () => {
  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        "text/plain": new Blob([txt], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }
    toast("Copied to clipboard", {
      icon: "🚀",
      style: {
        borderRadius: "10px",
        background: "#121212",
        color: "#fff",
      },
    });
  };

  return (
    <button
      onClick={() => copyToClipboard("npm install @react-symbols/icons")}
      className="font-mono text-white rounded hover:text-gray-300"
      title="Copy to clipboard"
    >
      ✌️ npm install @react-symbols/icons
    </button>
  );
};

export default Command;
