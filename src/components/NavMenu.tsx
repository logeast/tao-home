export interface NavLinkProps {
  key: string;
  url: string;
  name: string;
}

export function NavLink(props: NavLinkProps) {
  const { url, name } = props;
  return (
    <li className="max-md:w-full">
      <a
        className="h-16 max-md:h-10 max-md:rounded-full flex justify-center items-center px-4 transition hover:bg-gray-100 hover:font-medium hover:text-pink-600"
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
    <ul className="flex items-center max-md:flex-col">
      {data.map((item: NavLinkProps) => (
        <NavLink {...item} />
      ))}
    </ul>
  );
}

export default NavMenu;
