(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{7557:function(e,t,r){Promise.resolve().then(r.bind(r,8812)),Promise.resolve().then(r.bind(r,2145)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.bind(r,1507))},8812:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var a=r(6705),s=r(1865),l=r(3762),n=r(6737),o=r(3904),i=r(8110),d=r(4578);let c=d.Ry({profile_photo:d.Z_().url().nonempty(),name:d.Z_().min(3).max(30),username:d.Z_().min(3).max(30),bio:d.Z_().min(3).max(1e3)});var f=r(6691),u=r.n(f),m=r(955),x=r(102),b=r(306),h=r(2303);let{useUploadThing:g,uploadFiles:p}=(0,h.$)();r(4039),r(470);var v=r(1162),j=(0,v.Z)("d483a39a599a8d2fd426b86fa506fa0dffda8133");(0,v.Z)("23c5795d023633c25ce475851fad9ba51067e9ff"),(0,v.Z)("e82e4a7c4e2240eb49d183568e51ca173bb81e24"),(0,v.Z)("b658fa4707364861a295da40e2f3636bd404ea8c"),(0,v.Z)("d49e57735fd98277e6eec1a646e9b2cd96e8d981");var N=r(4033),k=e=>{let{user:t,btnTitle:r}=e,[d,f]=(0,m.useState)([]),{startUpload:h}=g("media"),p=(0,N.useRouter)(),v=(0,N.usePathname)(),k=(0,s.cI)({resolver:(0,i.F)(c),defaultValues:{profile_photo:(null==t?void 0:t.image)||"",name:(null==t?void 0:t.name)||"",username:(null==t?void 0:t.username)||"",bio:(null==t?void 0:t.bio)||""}}),y=(e,t)=>{e.preventDefault();let r=new FileReader;if(e.target.files&&e.target.files.length>0){let a=e.target.files[0];if(f(Array.from(e.target.files)),!a.type.includes("image"))return;r.onload=async e=>{var r,a;let s=(null===(a=e.target)||void 0===a?void 0:null===(r=a.result)||void 0===r?void 0:r.toString())||"";t(s)},r.readAsDataURL(a)}},w=async function(e){let r=e.profile_photo,a=(0,b.dY)(r);if(a){let t=await h(d);t&&t[0].fileUrl&&(e.profile_photo=t[0].fileUrl)}await j({userId:t.id,bio:e.bio,name:e.name,username:e.username,image:e.profile_photo,path:v}),"/profile/edit"===v?p.back():p.push("/")};return(0,a.jsx)(n.l0,{...k,children:(0,a.jsxs)("form",{onSubmit:k.handleSubmit(w),className:"flex flex-col justify-start gap-10",children:[(0,a.jsx)(n.Wi,{control:k.control,name:"profile_photo",render:e=>{let{field:t}=e;return(0,a.jsxs)(n.xJ,{className:"flex items-center gap-4",children:[(0,a.jsx)(n.lX,{className:"account-form_image-label",children:t.value?(0,a.jsx)(u(),{src:t.value,alt:"Profile photo",width:96,height:96,priority:!0,className:"rounded-full object-contain"}):(0,a.jsx)(u(),{src:"/assets/profile.svg",alt:"Profile photo",width:45,height:45,className:"mt-3 object-contain"})}),(0,a.jsx)(n.NI,{className:"flex-1 text-base-semibold text-gray-200",children:(0,a.jsx)(o.I,{type:"file",accept:"image",placeholder:"Upload a photo",className:"account-form_image-input",onChange:e=>y(e,t.onChange)})}),(0,a.jsx)(n.zG,{})]})}}),(0,a.jsx)(n.Wi,{control:k.control,name:"name",render:e=>{let{field:t}=e;return(0,a.jsxs)(n.xJ,{className:"flex flex-col gap-3 w-full",children:[(0,a.jsx)(n.lX,{className:"text-base-semibold text-light-2",children:"Name"}),(0,a.jsx)(n.NI,{children:(0,a.jsx)(o.I,{type:"text",className:"account-form_input no-focus",...t})}),(0,a.jsx)(n.zG,{})]})}}),(0,a.jsx)(n.Wi,{control:k.control,name:"username",render:e=>{let{field:t}=e;return(0,a.jsxs)(n.xJ,{className:"flex flex-col gap-3 w-full",children:[(0,a.jsx)(n.lX,{className:"text-base-semibold text-light-2",children:"Username"}),(0,a.jsx)(n.NI,{children:(0,a.jsx)(o.I,{type:"text",className:"account-form_input no-focus",...t})}),(0,a.jsx)(n.zG,{})]})}}),(0,a.jsx)(n.Wi,{control:k.control,name:"bio",render:e=>{let{field:t}=e;return(0,a.jsxs)(n.xJ,{className:"flex flex-col gap-3 w-full",children:[(0,a.jsx)(n.lX,{className:"text-base-semibold text-light-2",children:"Bio"}),(0,a.jsx)(n.NI,{children:(0,a.jsx)(x.g,{rows:10,className:"account-form_input no-focus",...t})}),(0,a.jsx)(n.zG,{})]})}}),(0,a.jsx)(l.z,{type:"submit",className:"bg-primary-500",children:"Submit"})]})})}},3762:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(6705),s=r(955),l=r(7256),n=r(6061),o=r(306);let i=(0,n.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:n,asChild:d=!1,...c}=e,f=d?l.g7:"button";return(0,a.jsx)(f,{className:(0,o.cn)(i({variant:s,size:n,className:r})),ref:t,...c})});d.displayName="Button"},6737:function(e,t,r){"use strict";r.d(t,{l0:function(){return u},NI:function(){return v},Wi:function(){return x},xJ:function(){return g},lX:function(){return p},zG:function(){return N}});var a=r(6705),s=r(955),l=r(7256),n=r(1865),o=r(306),i=r(6743),d=r(6061);let c=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.f,{ref:t,className:(0,o.cn)(c(),r),...s})});f.displayName=i.f.displayName;let u=n.RV,m=s.createContext({}),x=e=>{let{...t}=e;return(0,a.jsx)(m.Provider,{value:{name:t.name},children:(0,a.jsx)(n.Qr,{...t})})},b=()=>{let e=s.useContext(m),t=s.useContext(h),{getFieldState:r,formState:a}=(0,n.Gc)(),l=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...l}},h=s.createContext({}),g=s.forwardRef((e,t)=>{let{className:r,...l}=e,n=s.useId();return(0,a.jsx)(h.Provider,{value:{id:n},children:(0,a.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...l})})});g.displayName="FormItem";let p=s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:l,formItemId:n}=b();return(0,a.jsx)(f,{ref:t,className:(0,o.cn)(l&&"text-red-500 dark:text-red-900",r),htmlFor:n,...s})});p.displayName="FormLabel";let v=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:n,formDescriptionId:o,formMessageId:i}=b();return(0,a.jsx)(l.g7,{ref:t,id:n,"aria-describedby":s?"".concat(o," ").concat(i):"".concat(o),"aria-invalid":!!s,...r})});v.displayName="FormControl";let j=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:l}=b();return(0,a.jsx)("p",{ref:t,id:l,className:(0,o.cn)("text-sm text-slate-500 dark:text-slate-400",r),...s})});j.displayName="FormDescription";let N=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e,{error:n,formMessageId:i}=b(),d=n?String(null==n?void 0:n.message):s;return d?(0,a.jsx)("p",{ref:t,id:i,className:(0,o.cn)("text-sm font-medium text-red-500 dark:text-red-900",r),...l,children:d}):null});N.displayName="FormMessage"},3904:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});var a=r(6705),s=r(955),l=r(306);let n=s.forwardRef((e,t)=>{let{className:r,type:s,...n}=e;return(0,a.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-slate-200 border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",r),ref:t,...n})});n.displayName="Input"},102:function(e,t,r){"use strict";r.d(t,{g:function(){return n}});var a=r(6705),s=r(955),l=r(306);let n=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,l.cn)("flex min-h-[80px] w-full rounded-md border border-slate-200 border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",r),ref:t,...s})});n.displayName="Textarea"},306:function(e,t,r){"use strict";r.d(t,{cn:function(){return l},dY:function(){return n}});var a=r(7042),s=r(3986);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m)((0,a.W)(t))}function n(e){return/^data:image\/(png|jpe?g|gif|webp);base64,/.test(e)}}},function(e){e.O(0,[583,222,216,87,93,121,114,744],function(){return e(e.s=7557)}),_N_E=e.O()}]);