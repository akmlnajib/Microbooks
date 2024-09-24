import { jsx } from "react/jsx-runtime";
function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "label",
    {
      ...props,
      className: `block text-sm font-medium text-foreground ` + className,
      children: value ? value : children
    }
  );
}
export {
  InputLabel as I
};
