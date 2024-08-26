import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#091B31] text-white sticky top-0" style={{ zIndex: "999" }}>
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[2px] ring-gray-500 px-2">
        <Image src="/search.png" alt="search-icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search here..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <i className="fa-solid fa-comment text-black"></i>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <i className="fa-solid fa-bullhorn text-black"></i>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm">
            8
          </div>
        </div>
        <div className="flex flex-col cursor-pointer">
          <span className="text-xs leading-3 font-medium">Muhaz Ahmed</span>
          <span className="text-[10px] text-right text-gray-400">Admin</span>
        </div>
        <Image
          className="rounded-full cursor-pointer"
          src="/avatar.png"
          alt="user-icon"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default Navbar;
