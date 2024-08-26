import Link from "next/link";
import { menuItems } from "../lib/menuItems";
import { role } from "@/lib/data";

const Menu = () => {
  return (
    <div className="mt-3 text-sm">
      {menuItems.map((item, index) => {
        if (item.visible.includes(role)) {
          return (
            <div
              className="flex flex-col gap-2"
              style={{ paddingLeft: "10px" }}
              key={index}
            >
              <Link
                href={item.href}
                className="flex items-center justify-center lg:justify-start gap-4 py-2 text-white rounded-md hover:bg-csSkyBlue hover:text-black md:px-2"
              >
                <i className={item.icon} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Menu;
