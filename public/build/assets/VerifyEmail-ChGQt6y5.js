import{W as r,j as e,Y as a,a as d}from"./app-CeoLcuCZ.js";import{G as l}from"./GuestLayout-DVz-lbPp.js";import{P as u}from"./PrimaryButton-BSBI4q-q.js";import"./ApplicationLogo-DHQhrd8-.js";function x({status:t}){const{post:i,processing:o}=r({}),s=n=>{n.preventDefault(),i(route("verification.send"))};return e.jsxs(l,{children:[e.jsx(a,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-foreground",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:s,children:e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsx(u,{disabled:o,children:"Resend Verification Email"}),e.jsx(d,{href:route("logout"),method:"post",as:"button",className:"rounded-md text-sm text-foreground underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Log Out"})]})})]})}export{x as default};
