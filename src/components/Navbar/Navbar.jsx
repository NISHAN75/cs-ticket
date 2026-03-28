
const Navbar = () => {
  return (
    <nav className=" sticky top-0 px-8 py-4 bg-white border-b border-gray-100">
        <div className="container">
            <div className="flex items-center justify-between">
                {/* Left Side: Brand Name */}
                <div className="text-xl font-bold text-slate-900">
                    CS — Ticket System
                </div>

                {/* Right Side: Navigation Links & Button */}
                <div className="flex items-center space-x-8">
                    <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
                    <a href="#" className="hover:text-black transition-colors">Home</a>
                    <a href="#" className="hover:text-black transition-colors">FAQ</a>
                    <a href="#" className="hover:text-black transition-colors">Changelog</a>
                    <a href="#" className="hover:text-black transition-colors">Blog</a>
                    <a href="#" className="hover:text-black transition-colors">Download</a>
                    <a href="#" className="hover:text-black transition-colors">Contact</a>
                    </div>

                    {/* New Ticket Button */}
                    <button type="button" className="flex items-center bg-[#7c4dff] hover:bg-[#6a3fdf] text-white px-5 py-2 rounded-lg font-semibold transition-all shadow-sm cursor-pointer">
                    <span className="mr-2 text-lg">+</span>
                    New Ticket
                    </button>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;