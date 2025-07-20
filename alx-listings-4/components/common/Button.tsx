import Link from "next/link";
import { ButtonProps } from "@/interfaces";

type SmartButtonProps = ButtonProps & {
  href?: string;
};

const Button: React.FC<SmartButtonProps> = ({ label, onClick, type = "button", href }) => {
  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-50 text-gray px-4 py-2 rounded-md hover:bg-blue-300 transition"
    >
      {label}
    </button>
  );

  return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
};

export default Button;
