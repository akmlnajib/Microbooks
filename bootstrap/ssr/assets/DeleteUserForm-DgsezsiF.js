import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { T as TextInput, I as InputError } from "./InputError-DMEJWwuX.js";
import { I as InputLabel } from "./InputLabel-BGYyLxCX.js";
import { M as Modal } from "./Modal-DiCRk7y7.js";
import { useForm } from "@inertiajs/react";
import "@headlessui/react";
function DangerButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `btn btn-danger ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function SecondaryButton({
  type = "button",
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `btn btn-secondary ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({
  className = ""
}) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef(null);
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
        var _a;
        return (_a = passwordInput.current) == null ? void 0 : _a.focus();
      },
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-foreground", children: "Delete Account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-secondary-foreground", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-foreground", children: "Are you sure you want to delete your account?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-secondary-foreground", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password",
            value: "Password",
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-full sm:w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ms-3", disabled: processing, children: "Delete Account" })
      ] })
    ] }) })
  ] });
}
export {
  DeleteUserForm as default
};
