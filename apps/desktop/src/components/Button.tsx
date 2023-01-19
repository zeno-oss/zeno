type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary" | "outlined";
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  const {
    variant = "primary",
    title,
    className: overrideClassName,
    disabled,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`text-gray-950 m-5 cursor-pointer rounded-md py-1 px-3 text-lg font-semibold ${
        variant === "primary" && "bg-lemon-400 hover:bg-lemon-200"
      } ${variant === "secondary" && "bg-white hover:bg-gray-200"} ${
        variant === "outlined" &&
        "border-lemon-400 hover:border-lemon-200 border-2 font-normal text-gray-50"
      } ${
        disabled && "cursor-not-allowed bg-gray-200/70"
      } ${overrideClassName}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
