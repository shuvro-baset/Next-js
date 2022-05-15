# `Next-js`
* it's a ReactJs framework for production.
* A fullstack framework for ReactJs
* it's written in React code(like props, components etc)
* Next.Js provides us with own employment with a lot of features to make it easy and fast for us to work.
* we can also use third party apps but Next.Js provides us with almost all features in-built
* Next.Js helps us create production ready apps
* hybrid apps. code once and optimize for all sorts of devices easily.
* NextJs solves common problems and makes building React apps easier.

`key-features`
* server-side-rendering
* file-based Routing
* fullstack capabilities

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
- make a file [filename].js 'userId' and keep it root folder.
- make a function and using useRouter hook we can get the endpoint from the browser.
- If we need to nested more in this nested route. then we will make a directory [userId] and delete previous 'userId' file. in this new directory make a file index.js or any name and paste the previous code. to make nested here create a directory 'name' do the same thing for nested as previous route.
- users/userId/order/orderId

`Link`
- import Link from 'next/Link'
- user Link component and under the href attribute define the route path
- example: <br />
    <Link href="/users"> <br />
        <a>Users List</a> 
    </Link> <br />
- using useRouter.push we can go another route when any eventHandler worked. call a function and under this function call useRouter.push('/path')
- router.push({
    pathname: '';
})
- router.replace()

`404 page not found`
- by default nextJs provide not found page.
- we can customize the default not found page using 404.js file. in this file we can use our own not found page.


`Pre-Rendering and fetching data`
- two types
    - 1. Static Generation
    - 2. Server-Side Rendering
    `Static Generation`
        - it's a method of pre rendering where HTML pages are generated at a build time.
        - The HTML will contain all the website data after we build the application
        - it's a recommended method to pre-render pages whenever possible.
        - The page is built once, cached by a cdn and served to the client almost instantly
        - blog pages, e-commerce, documentation.... 


`Static Props`
- make a async function and fetch api data. 
- return the data in a object and it will pass as a props into the component

`getStaticProps`
- getStaticProps is a server side function
- The function will never run on client side
- The code inside getStaticProps will never be include inside the build JS bundle
- we can write server-side code directly in getStaticProps
- we can access the fs(file system) method or querying a database can be done inside getStaticProps
- we can use getStaticProps only in the pages file. we can not use getStaticProps in components file

`getStaticPaths`
- for dynamic route for unlimited data we should use getStaticPaths() and pass all the id.
- call the API and store data then make a map function and return all the id as props.

    `Server Side Rendering`
        - NextJs allows us to pre-render a page in not build time but in request time
        - The HTML is generated for every request depending on the data
        - only run when user requests

`API Routes`
- NextJs is a full stack framework where we write front end code in react and also write APIs that can be called by the front end
- API routes allows us to create REST endpoints as part of our NextJs application folder structure.
- We have to create a folder "api" within pages folder
- Within "api" folder we can define all the API for our application
- We can add business logic without needing to write any additional custom server code and without having to configure any API routes
- NextJs provides use everything we need to write full stack React+Node application

`Head tag title meta tags `
- nextJs provide default Header meta .. tags. we can customize it calling these components from nextJs 

`image component`
- it makes image loading efficient
- it will load the image size as describe in the style
- when we scroll then that particular image will be loaded.