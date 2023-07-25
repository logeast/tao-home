import { Logo } from "./Logo";
import NavMenu, { NavMenuProps } from "./NavMenu";

const NAV_MENU_DATA: NavMenuProps["data"] = [
  { key: "1", url: "#home", name: "首页" },
  { key: "2", url: "#paths", name: "学习路线" },
  { key: "3", url: "#tools", name: "工具" },
  { key: "4", url: "#about", name: "关于我们" },
  { key: "5", url: "#help", name: "帮助" },
];

export function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Logo />
            <NavMenu data={NAV_MENU_DATA} />
          </div>
          <div className="flex items-center gap-4">
            <button>登录</button>
            <button>注册</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
