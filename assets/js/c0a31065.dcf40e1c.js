"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6017],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),p=function(e){return function(n){var a=s(n.components);return r.createElement(e,i({},n,{components:a}))}},s=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(a),m=t,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(h,o(o({ref:n},c),{},{components:a})):r.createElement(h,o({ref:n},c))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9860:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(87462),t=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},d=void 0,c={unversionedId:"plugins/ray_launcher",id:"version-1.0/plugins/ray_launcher",title:"Ray Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/ray_launcher.md",sourceDirName:"plugins",slug:"/plugins/ray_launcher",permalink:"/docs/1.0/plugins/ray_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/plugins/ray_launcher.md",tags:[],version:"1.0",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1645474977,formattedLastUpdatedAt:"2/21/2022",frontMatter:{id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},sidebar:"version-1.0/docs",previous:{title:"Joblib Launcher plugin",permalink:"/docs/1.0/plugins/joblib_launcher"},next:{title:"RQ Launcher plugin",permalink:"/docs/1.0/plugins/rq_launcher"}},p=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"<code>ray_aws</code> launcher",id:"ray_aws-launcher",children:[{value:"Examples",id:"examples",children:[{value:"Manage Cluster LifeCycle",id:"manage-cluster-lifecycle",children:[],level:5}],level:4}],level:3},{value:"<code>ray</code> launcher",id:"ray-launcher",children:[],level:3},{value:"Configure <code>ray.init()</code> and <code>ray.remote()</code>",id:"configure-rayinit-and-rayremote",children:[],level:3}],s={toc:p};function m(e){var n=e.components,a=(0,t.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-ray-launcher/"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-ray-launcher",alt:"PyPI"})),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-ray-launcher",alt:"PyPI - License"}),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-ray-launcher",alt:"PyPI - Python Version"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-ray-launcher"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-ray-launcher.svg",alt:"PyPI - Downloads"})),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher/examples"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),(0,i.mdx)("p",null,"The Ray Launcher plugin provides 2 launchers: ",(0,i.mdx)("inlineCode",{parentName:"p"},"ray_aws")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"ray"),".\n",(0,i.mdx)("inlineCode",{parentName:"p"},"ray_aws")," launches jobs remotely on AWS and is built on top of ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/latest/cluster/launcher.html"},"Ray cluster launcher"),". ",(0,i.mdx)("inlineCode",{parentName:"p"},"ray")," launches jobs on your local machine or existing ray cluster. "),(0,i.mdx)("h3",{id:"installation"},"Installation"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ pip install hydra-ray-launcher --upgrade\n")),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Once installed, add ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=ray_aws")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=ray")," to your command line. Alternatively, override ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/launcher: ray_aws\n")),(0,i.mdx)("h3",{id:"ray_aws-launcher"},(0,i.mdx)("inlineCode",{parentName:"h3"},"ray_aws")," launcher"),(0,i.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},(0,i.mdx)("inlineCode",{parentName:"p"},"ray_aws")," launcher is built on top of ray's ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/latest/cluster/launcher.html"},"cluster launcher cli"),". To get started, you need to\n",(0,i.mdx)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"config your AWS credentials"),".\n",(0,i.mdx)("inlineCode",{parentName:"p"},"ray cluster launcher")," expects your AWS credentials have certain permissions for ",(0,i.mdx)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},(0,i.mdx)("inlineCode",{parentName:"a"},"EC2"))," and ",(0,i.mdx)("a",{parentName:"p",href:"https://aws.amazon.com/iam"},(0,i.mdx)("inlineCode",{parentName:"a"},"IAM")),". Read ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/ray-project/ray/issues/9327"},"this")," for more information."))),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"ray cluster launcher")," expects a yaml file to provide configuration for the EC2 cluster; we've schematized the configs in ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/__init__.py"},(0,i.mdx)("inlineCode",{parentName:"a"},"RayClusterConf")),", "),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Discover ray_aws launcher's config"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py hydra/launcher=ray_aws --cfg hydra -p hydra.launcher\n# @package hydra.launcher\n_target_: hydra_plugins.hydra_ray_launcher.ray_aws_launcher.RayAWSLauncher\nenv_setup:\n  pip_packages:\n    omegaconf: 2.0.5\n    hydra_core: 1.0.4\n    ray: 1.0.1.post1\n    cloudpickle: 1.6.0\n    pickle5: 0.0.11\n    hydra_ray_launcher: 0.1.2\n  commands:\n  - conda create -n hydra_${python_version:micro} python=${python_version:micro} -y\n  - echo 'export PATH=\"$HOME/anaconda3/envs/hydra_${python_version:micro}/bin:$PATH\"'\n    >> ~/.bashrc\nray:\n  init:\n    address: null\n  remote: {}\n  cluster:\n    cluster_name: default\n    min_workers: 0\n    max_workers: 1\n    initial_workers: 0\n    autoscaling_mode: default\n    target_utilization_fraction: 0.8\n    idle_timeout_minutes: 5\n    docker:\n      image: ''\n      container_name: ''\n      pull_before_run: true\n      run_options: []\n    provider:\n      type: aws\n      region: us-west-2\n      availability_zone: us-west-2a,us-west-2b\n      cache_stopped_nodes: false\n      key_pair:\n        key_name: hydra\n    auth:\n      ssh_user: ubuntu\n    head_node:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    worker_nodes:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    file_mounts: {}\n    initialization_commands: []\n    setup_commands: []\n    head_setup_commands: []\n    worker_setup_commands: []\n    head_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --head --redis-port=6379 --object-manager-port=8076\n      --autoscaling-config=~/ray_bootstrap_config.yaml\n    worker_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --address=$RAY_HEAD_IP:6379 --object-manager-port=8076\nstop_cluster: true\nsync_up:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nsync_down:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\n"))),(0,i.mdx)("h4",{id:"examples"},"Examples"),(0,i.mdx)("p",null,"The following examples can be found ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher/examples"},"here"),"."),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Simple app"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py --multirun task=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpqqg4v4i7/job_spec.pkl\n[HYDRA] Saving RayClusterConf in a temp yaml file: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpaa07pq3w.yaml.\n...\n[HYDRA] Output: INFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8265\n(pid=3374) [__main__][INFO] - Executing task 1\n(pid=3374) [__main__][INFO] - Executing task 2\n(pid=3374) [__main__][INFO] - Executing task 3\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] Deleted the cluster (provider.cache_stopped_nodes=false)\n[HYDRA] Running command: ['ray', 'down', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpaa07pq3w.yaml']\n\n"))),(0,i.mdx)("details",null,(0,i.mdx)("summary",null,"Upload & Download from remote cluster"),(0,i.mdx)("p",null,"If your application is dependent on multiple modules, you can configure ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.sync_up")," to upload dependency modules to the remote cluster.\nYou can also configure ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.sync_down")," to download output from remote cluster if needed. This functionality is built on top of ",(0,i.mdx)("inlineCode",{parentName:"p"},"rsync"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"include")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"exclude")," is consistent with how it works in ",(0,i.mdx)("inlineCode",{parentName:"p"},"rsync"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"\n$  python train.py --multirun random_seed=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : random_seed=1\n[HYDRA]        #1 : random_seed=2\n[HYDRA]        #2 : random_seed=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmptdkye9of/job_spec.pkl\n[HYDRA] Saving RayClusterConf in a temp yaml file: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmp2reaoixs.yaml.\n[HYDRA] Running command: ['ray', 'up', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmp2reaoixs.yaml']\n...\n[HYDRA] Output: INFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8265\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\nLoaded cached provider configuration\n...\n[HYDRA] Output: receiving file list ... done\n16-32-25/\n16-32-25/0/\n16-32-25/0/checkpoint/\n16-32-25/0/checkpoint/checkpoint_1.pt\n16-32-25/1/\n16-32-25/1/checkpoint/\n16-32-25/1/checkpoint/checkpoint_2.pt\n16-32-25/2/\n16-32-25/2/checkpoint/\n16-32-25/2/checkpoint/checkpoint_3.pt\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] NOT deleting the cluster (provider.cache_stopped_nodes=true)\n[HYDRA] Running command: ['ray', 'down', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpy430k4xr.yaml']\n"))),(0,i.mdx)("h5",{id:"manage-cluster-lifecycle"},"Manage Cluster LifeCycle"),(0,i.mdx)("p",null,"You can manage the Ray EC2 cluster lifecycle by configuring the two flags provided by the plugin:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Default setting (no need to specify on commandline): Delete cluster after job finishes remotely:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.stop_cluster=true\nhydra.launcher.ray.cluster.provider.cache_stopped_nodes=False\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Keep cluster running after jobs finishes remotely")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.stop_cluster=False\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Power off EC2 instances without deletion")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.ray.cluster.provider.cache_stopped_nodes=true\n")),(0,i.mdx)("h3",{id:"ray-launcher"},(0,i.mdx)("inlineCode",{parentName:"h3"},"ray")," launcher"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"ray")," launcher lets you launch application on your ray cluster or local machine. You can easily config how your jobs are executed by changing ",(0,i.mdx)("inlineCode",{parentName:"p"},"ray")," launcher's configuration here\n",(0,i.mdx)("inlineCode",{parentName:"p"},"~/hydra/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/hydra/launcher/ray.yaml")),(0,i.mdx)("p",null," The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ray_launcher/examples/simple"},"example application")," starts a new ray cluster. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py  --multirun hydra/launcher=ray\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-16-28\n[HYDRA] Initializing ray with config: {}\nINFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8266\n[HYDRA]        #0 : \n(pid=97801) [__main__][INFO] - Executing task 1\n")),(0,i.mdx)("p",null,"You can run the example application on your existing ray cluster as well by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init.address"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py  --multirun hydra/launcher=ray hydra.launcher.ray.init.address=localhost:6379'\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-13-32\n[HYDRA] Initializing ray with config: {'num_cpus': None, 'num_gpus': None, 'address': 'localhost:6379'}\nINFO worker.py:633 -- Connecting to existing Ray cluster at address: 10.30.99.17:6379\n[HYDRA]        #0 : \n(pid=93358) [__main__][INFO] - Executing task 1\n")),(0,i.mdx)("h3",{id:"configure-rayinit-and-rayremote"},"Configure ",(0,i.mdx)("inlineCode",{parentName:"h3"},"ray.init()")," and ",(0,i.mdx)("inlineCode",{parentName:"h3"},"ray.remote()")),(0,i.mdx)("p",null,"Ray launcher is built on top of ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-init"},(0,i.mdx)("inlineCode",{parentName:"a"},"ray.init()"))," and ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-remote"},(0,i.mdx)("inlineCode",{parentName:"a"},"ray.remote()")),". You can configure ",(0,i.mdx)("inlineCode",{parentName:"p"},"ray")," by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.remote"),". Check out an ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_ray_launcher/examples/simple/config.yaml"},"example config"),"."))}m.isMDXComponent=!0}}]);