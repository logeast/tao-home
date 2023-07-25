export interface NavLinkProps {
  key: string;
  url: string;
  name: string;
}

export function NavLink(props: NavLinkProps) {
  const { url, name } = props;
  return (
    <li>
      <a
        className="h-16 flex items-center px-4 transition hover:bg-gray-100 hover:font-medium hover:text-pink-600"
        href={url}
      >
        {name}
      </a>
    </li>
  );
}

export interface NavMenuProps {
  data: NavLinkProps[];
}

function NavMenu(props: NavMenuProps) {
  const { data } = props;
  return (
    <ul className="flex items-center">
      {data.map((item: NavLinkProps) => (
        <NavLink {...item} />
      ))}
    </ul>
  );
}

export default NavMenu;
