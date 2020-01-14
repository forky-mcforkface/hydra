(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{182:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"rightToc",(function(){return c})),n.d(a,"metadata",(function(){return o})),n.d(a,"default",(function(){return d}));var t=n(1),r=n(9),p=(n(0),n(185)),i={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},c=[],o={id:"version-0.11/advanced/app_packaging",title:"Application packaging",description:"You can package your Hydra application along with its configuration.",source:"@site/versioned_docs/version-0.11/advanced/packaging.md",permalink:"/docs/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/advanced/packaging.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1579035234,sidebar_label:"Application packaging",sidebar:"version-0.11/Docs",previous:{title:"Colorlog plugin",permalink:"/docs/plugins/colorlog"},next:{title:"Config search path",permalink:"/docs/advanced/search_path"}},l={rightToc:c,metadata:o},s="wrapper";function d(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)(s,Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("p",null,"You can package your Hydra application along with its configuration.\nThere is a working example ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/examples/advanced/hydra_app_example"}),"here"),"."),Object(p.b)("p",null,"You can run it with:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(p.b)("p",null,"To install it, use:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-text"}),"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),Object(p.b)("p",null,"Run the installed app with:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),Object(p.b)("p",null,"The installed app will use the packaged configuration files."))}d.isMDXComponent=!0},185:function(e,a,n){"use strict";n.d(a,"a",(function(){return c})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t),p=r.a.createContext({}),i=function(e){var a=r.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},c=function(e){var a=i(e.components);return r.a.createElement(p.Provider,{value:a},e.children)};var o="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,c=e.parentName,o=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),d=t,u=s[c+"."+d]||s[d]||l[d]||p;return n?r.a.createElement(u,Object.assign({},{ref:a},o,{components:n})):r.a.createElement(u,Object.assign({},{ref:a},o))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,i=new Array(p);i[0]=s;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c[o]="string"==typeof e?e:t,i[1]=c;for(var d=2;d<p;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);