import{j as e}from"./app-CeoLcuCZ.js";import{C as r}from"./ChatList-ChfBqo73.js";import{u as t}from"./SidebarMini-BGUqcwKH.js";import{c as a}from"./clsx-B-dksMZM.js";function h(){const{chats:s}=t();return e.jsxs("div",{className:a("order-1 flex-1 shrink-0 flex-col gap-2 sm:order-2 sm:flex sm:w-[320px] sm:flex-initial sm:border-l sm:border-secondary lg:w-[360px]",route().current("archived_chats.show")?"hidden":"flex"),children:[e.jsx("div",{className:"flex items-center justify-between px-2 pt-2 sm:pb-0",children:e.jsx("h3",{className:"text-2xl font-semibold",children:"Archived Chats"})}),e.jsx(r,{search:"",href:"archived_chats.show"}),s.length===0&&e.jsx("p",{className:"flex h-full flex-1 items-center justify-center",children:"No archived chat yet"})]})}export{h as S};
