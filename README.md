#React app

## What is the Project?
Here we are going to create a food app in React with a `twist`. 

## What's twist?
We will not use create-react-app command and create my own command and perform  all under the hood work like installing the pacakges and webpack that create-react-app command does automatically.

## What is Npm ?
It is actually node package manager, It is used to install, update, and manage dependencies (packages) for Node.js projects. npm also helps in managing the versions of packages to ensure that your project is using the correct versions

## What is a bundler?
A bundler is a tool used in web development to bundle multiple files and assets into a single file or a few files for efficient loading and distribution. It takes all of the various JavaScript, CSS, images, and other resources that your project depends on and combines them into fewer files, reducing the number of HTTP requests needed to load your application. This process improves performance by minimizing the load time and handling dependencies between modules.

## What is transitive dpendency
When you install a package using npm, additional packages are often installed as well. These additional packages are dependencies that your chosen package relies on to function correctly. Even though these dependencies are not listed in your project's `package.json`, they are installed automatically because your selected package requires them. These indirectly installed dependencies are known as *transitive dependencies*.

## What is Babel
Babel is an compiler used in bundler, that actually transform javascript modern code into backward compatible version for older browser to make sure that it will work in older browser and nothing break

## Named export vs default export
  named export is exported by keyword 'export' however default export is exported by 'export default' when 
  when we import an named export, have to use in curly braces and name should be same strictly, while default export can be 
   exported without curly braces and with any name.

## Transpile vs Polyfils 

## What is HMR 

## WHAT is tree shaking

## what is package.lock json


## npm vs npx command

## Function Component
A normal javascript function that return an react element 


# Parcel
-- Created dev build command 
-- Local dev server
-- HMR- HOT module replacement -- parcel uses file watching algo, that is written in c++, as soon as we changed anything in file and save, it builds project in milli seconds
-- Faster Development experince - because of caching
-- image optimization
-- css file optimization
--  minification of files -- combined copule of files into single file or some files
-- Bundle
-- Tree shaking
-- Compressing
-- Consistant hashing
-- code spliting 
-- differential bundling - support older browsers 
-- Error Handling
-- Diagnostics
-- give option to test web app on https/ssl

# React
-- Efficient DOM algorithm
-- Sync Data layer and UI layer
-- Manage the Lifecycle
--Reusable component break
--Single Page application




Step 1- use command npm init
step 2- intall bundler, here installing webapcks
step 3- add node module to .gitignore
