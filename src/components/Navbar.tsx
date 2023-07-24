export function Navbar() {
  return (
    <nav className="w-full bg-amber-50">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div>logo</div>
            <div>菜单</div>
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
