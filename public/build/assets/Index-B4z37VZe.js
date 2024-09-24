import{W as u,r as f,j as e,a}from"./app-CeoLcuCZ.js";import{C as g}from"./Checkbox-CF3lql9R.js";import{T as o,I as m}from"./InputError-B9ej-OR8.js";import{P as h}from"./PrimaryButton-BSBI4q-q.js";import{A as j}from"./ApplicationLogo-DHQhrd8-.js";import{h as b}from"./moment-Cl4UOzQZ.js";import{A as N}from"./index-DSSGJVd7.js";function I({canResetPassword:n,appName:c}){const{data:r,setData:t,post:i,processing:d,errors:l,reset:x}=u({email:"",password:"",remember:!1});f.useEffect(()=>()=>{x("password")},[]);const p=s=>{s.preventDefault(),i(route("login"))};return e.jsxs("div",{className:"mx-auto flex min-h-screen max-w-7xl flex-col gap-8 p-6 font-['Inter'] text-foreground sm:gap-12 sm:p-8",children:[e.jsx("div",{children:e.jsx(a,{href:"/",children:e.jsx(j,{className:"h-10"})})}),e.jsxs("div",{className:"my-auto grid grid-cols-1 sm:grid-cols-2",children:[e.jsxs("div",{className:"space-y-8 sm:w-11/12 sm:space-y-12",children:[e.jsxs("h1",{className:"text-4xl font-bold sm:text-5xl lg:text-7xl",children:[e.jsx("span",{className:"bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 bg-clip-text text-transparent",children:"Hang out"}),e.jsx("br",{}),e.jsx("span",{className:"bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 bg-clip-text text-transparent",children:"anytime,"}),e.jsx("span",{className:"bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 bg-clip-text text-transparent",children:" anywhere"})]}),e.jsx("p",{className:"text-lg sm:text-xl",children:"Messenger makes it easy and fun to stay close to your favorite people."}),e.jsxs("form",{onSubmit:p,className:"flex flex-col gap-4 lg:w-3/4",children:[e.jsxs("div",{children:[e.jsx(o,{id:"email",type:"email",name:"email",value:r.email,className:"w-full border-secondary bg-secondary dark:border-secondary",autoComplete:"username",isFocused:!0,onChange:s=>t("email",s.target.value),placeholder:"Enter your email address"}),e.jsx(m,{message:l.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(o,{id:"password",type:"password",name:"password",value:r.password,className:"w-full border-secondary bg-secondary dark:border-secondary",autoComplete:"current-password",onChange:s=>t("password",s.target.value),placeholder:"Enter your password"}),e.jsx(m,{message:l.password,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"flex items-center",children:[e.jsx(g,{name:"remember",checked:r.remember,onChange:s=>t("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-foreground",children:"Remember me"})]}),n&&e.jsx(a,{href:route("password.request"),className:"btn-link",children:"Forgot your password?"})]}),e.jsx("div",{className:"mt-4 flex",children:e.jsx(h,{className:"w-full",disabled:d,children:"Log in"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(a,{href:route("register"),className:"btn-link",children:"Don't have an account?"})})]})]}),e.jsx("div",{className:"mt-4 flex items-center justify-center sm:mt-0",children:e.jsx("img",{src:"/images/vector.png",alt:"vector.png"})})]}),e.jsxs("div",{className:"mt-auto flex gap-2",children:[e.jsxs(a,{className:"font-medium",href:"/",children:["© ",c," ",b().format("Y"),"."]}),e.jsxs("span",{className:"flex items-center gap-1 text-secondary-foreground",children:["Built with ",e.jsx(N,{className:"text-sm text-danger"})," By Nursandi"]})]})]})}export{I as default};
