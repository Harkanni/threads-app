(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{5474:function(e,t,r){Promise.resolve().then(r.t.bind(r,6656,23)),Promise.resolve().then(r.t.bind(r,6208,23)),Promise.resolve().then(r.t.bind(r,8169,23)),Promise.resolve().then(r.t.bind(r,3699,23)),Promise.resolve().then(r.bind(r,8875)),Promise.resolve().then(r.bind(r,2145)),Promise.resolve().then(r.bind(r,3530)),Promise.resolve().then(r.bind(r,1726)),Promise.resolve().then(r.bind(r,1507))},8875:function(e,t,r){"use strict";r.r(t);var n=r(6705),a=r(1865),s=r(3762),o=r(6737),i=r(102),l=r(8110),d=r(4033),u=r(6058),c=r(9612);t.default=e=>{let{userId:t}=e,r=(0,d.useRouter)(),f=(0,d.usePathname)(),m=(0,a.cI)({resolver:(0,l.F)(u.f),defaultValues:{thread:"",accountId:t}}),b=async e=>{await (0,c.gK)({text:e.thread,author:t,communityId:null,path:f}),r.push("/")};return(0,n.jsx)(o.l0,{...m,children:(0,n.jsxs)("form",{onSubmit:m.handleSubmit(b),className:"mt-10 flex flex-col justify-start gap-10",children:[(0,n.jsx)(o.Wi,{control:m.control,name:"thread",render:e=>{let{field:t}=e;return(0,n.jsxs)(o.xJ,{className:"flex flex-col gap-3 w-full",children:[(0,n.jsx)(o.lX,{className:"text-base-semibold text-light-2",children:"Content"}),(0,n.jsx)(o.NI,{className:"no-focus border border-dark-4 bg-dark-3 text-light-3",children:(0,n.jsx)(i.g,{rows:10,className:"account-form_input no-focus",...t})}),(0,n.jsx)(o.zG,{})]})}}),(0,n.jsx)(s.z,{type:"submit",className:"bg-primary-500",children:"Post Thread"})]})})}},3762:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(6705),a=r(955),s=r(7256),o=r(6061),i=r(306);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:d=!1,...u}=e,c=d?s.g7:"button";return(0,n.jsx)(c,{className:(0,i.cn)(l({variant:a,size:o,className:r})),ref:t,...u})});d.displayName="Button"},6737:function(e,t,r){"use strict";r.d(t,{l0:function(){return f},NI:function(){return p},Wi:function(){return b},xJ:function(){return g},lX:function(){return v},zG:function(){return N}});var n=r(6705),a=r(955),s=r(7256),o=r(1865),i=r(306),l=r(6743),d=r(6061);let u=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(l.f,{ref:t,className:(0,i.cn)(u(),r),...a})});c.displayName=l.f.displayName;let f=o.RV,m=a.createContext({}),b=e=>{let{...t}=e;return(0,n.jsx)(m.Provider,{value:{name:t.name},children:(0,n.jsx)(o.Qr,{...t})})},h=()=>{let e=a.useContext(m),t=a.useContext(x),{getFieldState:r,formState:n}=(0,o.Gc)(),s=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...s}},x=a.createContext({}),g=a.forwardRef((e,t)=>{let{className:r,...s}=e,o=a.useId();return(0,n.jsx)(x.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:t,className:(0,i.cn)("space-y-2",r),...s})})});g.displayName="FormItem";let v=a.forwardRef((e,t)=>{let{className:r,...a}=e,{error:s,formItemId:o}=h();return(0,n.jsx)(c,{ref:t,className:(0,i.cn)(s&&"text-red-500 dark:text-red-900",r),htmlFor:o,...a})});v.displayName="FormLabel";let p=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:o,formDescriptionId:i,formMessageId:l}=h();return(0,n.jsx)(s.g7,{ref:t,id:o,"aria-describedby":a?"".concat(i," ").concat(l):"".concat(i),"aria-invalid":!!a,...r})});p.displayName="FormControl";let k=a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:s}=h();return(0,n.jsx)("p",{ref:t,id:s,className:(0,i.cn)("text-sm text-slate-500 dark:text-slate-400",r),...a})});k.displayName="FormDescription";let N=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e,{error:o,formMessageId:l}=h(),d=o?String(null==o?void 0:o.message):a;return d?(0,n.jsx)("p",{ref:t,id:l,className:(0,i.cn)("text-sm font-medium text-red-500 dark:text-red-900",r),...s,children:d}):null});N.displayName="FormMessage"},102:function(e,t,r){"use strict";r.d(t,{g:function(){return o}});var n=r(6705),a=r(955),s=r(306);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-slate-200 border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",r),ref:t,...a})});o.displayName="Textarea"},9612:function(e,t,r){"use strict";r.d(t,{Ho:function(){return s},gK:function(){return a}}),r(4039),r(470);var n=r(1162),a=(0,n.Z)("7d87a73be4ef0115e52728423651f15ba59e8b0c");(0,n.Z)("de7f741c01c14691255988023a64f2247af564ee"),(0,n.Z)("7b05d7ff43b4752fdbed4f666b34a5bbf5ad6e14");var s=(0,n.Z)("2151776ce5b3eee10acbd4dc01788260a71c67ae")},306:function(e,t,r){"use strict";r.d(t,{cn:function(){return s},dY:function(){return o}});var n=r(7042),a=r(3986);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m)((0,n.W)(t))}function o(e){return/^data:image\/(png|jpe?g|gif|webp);base64,/.test(e)}},6058:function(e,t,r){"use strict";r.d(t,{f:function(){return a},g:function(){return s}});var n=r(4578);let a=n.Ry({thread:n.Z_().nonempty().min(3,{message:"Minimum 3 characters."}),accountId:n.Z_()}),s=n.Ry({thread:n.Z_().nonempty().min(3,{message:"Minimum 3 characters."})})},3699:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return a},NoSSR:function(){return s}}),r(1024),r(955);let n=r(7669);function a(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function s(e){let{children:t}=e;return t}}},function(e){e.O(0,[583,216,87,121,114,744],function(){return e(e.s=5474)}),_N_E=e.O()}]);