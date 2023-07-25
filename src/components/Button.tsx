import cx from "classnames";

export interface ButtonProps {
  type?: "default" | "primary";
  children: React.ReactNode;
}
export function Button(props: ButtonProps) {
  const { type = "default", children } = props;

  return (
    <button
      className={cx(
        "rounded-full transition duration-300 hover:shadow-xl px-8 h-10 flex items-center justify-center",
        {
          "border border-gray-300 bg-white hover:border-pink-600 hover:text-pink-600":
            type === "default",
          "bg-gradient-to-r from-pink-400 to-pink-600 text-white":
            type === "primary",
        }
      )}
    >
      {children}
    </button>
  );
}
