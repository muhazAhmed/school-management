import Link from "next/link";
import { menuItems } from "../lib/menuItems";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="mt-3 text-sm">
      {menuItems.map((item: any, index: number) => (
        <div className="flex flex-col gap-2" style={{paddingLeft: "10px"}} key={index}>
          <Link
            href={item?.href}
            className="flex items-center justify-center lg:justify-start gap-4 py-2 text-white"
          >
            <i className={item?.icon} />
            <span className="hidden lg:block">{item?.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
