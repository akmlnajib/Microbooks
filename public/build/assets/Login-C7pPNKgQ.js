import{W as f,r as j,j as e,Y as h,a as o}from"./app-CeoLcuCZ.js";import{C as g}from"./Checkbox-CF3lql9R.js";import{G as w}from"./GuestLayout-DVz-lbPp.js";import{T as l,I as i}from"./InputError-B9ej-OR8.js";import{I as n}from"./InputLabel-XutIzdSG.js";import{P as b}from"./PrimaryButton-BSBI4q-q.js";import{F as v}from"./FormAlert-B2r-hAIP.js";import"./ApplicationLogo-DHQhrd8-.js";import"./clsx-B-dksMZM.js";function P({status:t,canResetPassword:c}){const{data:a,setData:r,post:d,processing:u,errors:m,reset:p}=f({email:"",password:"",remember:!1});j.useEffect(()=>()=>{p("password")},[]);const x=s=>{s.preventDefault(),d(route("login"))};return e.jsxs(w,{children:[e.jsx(h,{title:"Log in"}),t&&e.jsx(v,{message:t}),e.jsxs("form",{onSubmit:x,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(i,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>r("password",s.target.value)}),e.jsx(i,{message:m.password,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx(g,{name:"remember",checked:a.remember,onChange:s=>r("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-foreground",children:"Remember me"})]}),c&&e.jsx(o,{href:route("password.request"),className:"btn-link",children:"Forgot your password?"})]}),e.jsx("div",{className:"flex",children:e.jsx(b,{className:"w-full",disabled:u,children:"Log in"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(o,{href:route("register"),className:"btn-link",children:"Don't have an account?"})})]})]})}export{P as default};
