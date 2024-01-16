import { Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { NAVIGATIONS } from "./Header";

const HeaderDesktop = () => {
  return (
    <header className="tw-hidden md:tw-flex tw-justify-between tw-items-center tw-px-8 tw-py-7 ">
      <div className="tw-flex tw-items-center tw-gap-x-10">
        <h1 className="tw-text-2xl tw-text-[#252B42] tw-font-bold">Inspire</h1>
        <nav className="tw-flex tw-gap-x-4 ">
          {NAVIGATIONS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="tw-no-underline tw-text-[#737373] hover:tw-cursor hover:tw-text-[#434343]"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="tw-flex tw-gap-x-4">
        <Search />
        <ShoppingCart />
        <Menu />
      </div>
    </header>
  );
};

export default HeaderDesktop;
