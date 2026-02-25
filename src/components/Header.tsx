import { ArrowLeft } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center h-14 px-6 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4">
        <ArrowLeft className="w-5 h-5 text-gray-600" />
      </button>
      <nav className="flex items-center text-sm text-gray-500">
        <span className="hover:text-gray-900 cursor-pointer">学习中心</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">减速箱三维建模与装配</span>
      </nav>
    </header>
  );
}
