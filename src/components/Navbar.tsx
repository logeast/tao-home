import { useState } from "react";
import { Button } from "./Button";
import { IconClose } from "./IconClose";
import { IconMenu } from "./IconMenu";
import { Logo } from "./Logo";
import NavMenu, { NavMenuProps } from "./NavMenu";
import cx from "classnames";

const NAV_MENU_DATA: NavMenuProps["data"] = [
  { key: "1", url: "#home", name: "首页" },
  { key: "2", url: "#paths", name: "学习路线" },
  { key: "3", url: "#tools", name: "工具" },
  { key: "4", url: "#about", name: "关于我们" },
  { key: "5", url: "#help", name: "帮助" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 max-md:hidden">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Logo />
            <NavMenu data={NAV_MENU_DATA} />
          </div>
          <div className="flex items-center gap-4">
            <Button>登录</Button>
            <Button type="primary">注册</Button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-8 max-md:visible md:hidden">
        <div className="h-16 flex items-center justify-between gap-4">
          <Logo />
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <IconClose className="w-6 h-6" />
            ) : (
              <IconMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={cx({
            hidden: !open,
          })}
        >
          <NavMenu data={NAV_MENU_DATA} />
          <div className="py-4 flex flex-col gap-4">
            <Button>登录</Button>
            <Button type="primary">注册</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
