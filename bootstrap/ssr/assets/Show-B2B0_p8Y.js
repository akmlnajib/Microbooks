import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppLayout, C as ChatProvider, a as ChatMessageProvider, M as ModalProvider, S as SidebarMini } from "./SidebarMini-Di7pOyuz.js";
import { S as Sidebar } from "./Sidebar-wHVwDfA2.js";
import { C as Content, S as SidebarRight, P as PopupGallery } from "./PopupGallery-CSkOAjtT.js";
import "@inertiajs/react";
import "clsx";
import "react";
import "@headlessui/react";
import "react-icons/bs";
import "moment";
import "./Modal-DiCRk7y7.js";
import "./InputLabel-BGYyLxCX.js";
import "./InputError-DMEJWwuX.js";
import "./ChatList-CHzDh_U2.js";
import "./BadgeOnline-Crz2lS8N.js";
import "react-intersection-observer";
import "react-icons/fa";
import "emoji-picker-react";
import "react-icons/bi";
import "react-image-gallery";
function Chats() {
  return /* @__PURE__ */ jsx(AppLayout, { title: "Archived Chats", children: /* @__PURE__ */ jsx(ChatProvider, { children: /* @__PURE__ */ jsx(ChatMessageProvider, { children: /* @__PURE__ */ jsxs(ModalProvider, { children: [
    /* @__PURE__ */ jsx(SidebarMini, {}),
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsx(Content, {}),
    /* @__PURE__ */ jsx(SidebarRight, {}),
    /* @__PURE__ */ jsx(PopupGallery, {})
  ] }) }) }) });
}
export {
  Chats as default
};
