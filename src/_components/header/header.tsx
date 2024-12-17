import { FC } from "react";
import { Github } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/ryokatsuse/emo-lan"
          className="text-white hover:text-gray-300 transition-colors"
        >
          emo-lan
        </Link>
        <Link
          href="https://github.com/ryokatsuse/emo-lan-playground"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
    </header>
  );
};
