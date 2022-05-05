# `Next-js`
* it's a ReactJs framework
* it's written in React code(like props, components etc)
* Next.Js provides us with own employment with a lot of features to make it easy and fast for us to work.
* we can also use third party apps but Next.Js provides us with almost all features in-built
* Next.Js helps us create production ready apps
* hybrid apps. code once and optimize for all sorts of devices easily.

`Special Ability of Next.Js`
* Next.Js enables us to build super fast and extremely user-friendly status and dynamic websites, as well as full fledged production ready web applications using ReactJs
* in fact, thanks to automatic static optimization 'static' and 'dynamic' has become one now.
* this feature allows NextJs to build hybrid applications that contain both server rendered and statically generated pages.

`How NextJs makes it easy`
* file based routing 
* support for css module
* pre-rendering.
* image optimization
* API Routes
* TypeScript support
* Live editing experience
* Development and Production build.

# `Installation`
* npx create-next-app 'app name'
# or
yarn create next-app
# or
pnpm create next-app

If you want to start with a TypeScript project you can use the --typescript flag:

npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
# or
pnpm create next-app -- --typescript

After the installation is complete:

Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000
Visit http://localhost:3000 to view your application
Edit pages/index.js and see the updated result in your browser


# `ReactJs Routing`
- file based routing
- After creating a new file in the pages folder it automatically becomes available as a route
- By mixing and matching file names with a nested folder, it is possible to define the most common routing pattern

`file/page based routing`
- just create a file in the pages folder and it will make automatically available as a route by the file name

`nested routing`
- to make a nested route we should create a folder with the same name as the root route. then root route name should be index.js. then create others file and it will make automatically available as a route
- users/first.... users/second.......

`useRouter hook dynamic routing`
- make a file [filename].js and keep it root folder.
- make a function and using useRouter hook we can get the endpoint from the browser.