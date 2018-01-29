This is an ASP.NET Core 2 / Aurelia CLI solution that links a shared TypeScript library into an Aurelia project which is also running as an ASP.NET Core server application.

The Aurelia.App project is a fairly boilerplate Aurelia CLI app scaffolded using **au new --here** for ASP.NET Core / TypeScript / SASS / RequireJS.

The Shared.Lib project is a Node.js project targetting TypeScript 2.6.2, using the AMD module format.

A symbolic link is created to the **my-shared-lib** package represented by the Shared.Lib project, so that it can be referenced from node_modules, as the package is local to the solution and will not be published to NPM.

# Build Steps

Install dependencies with Yarn:

```sh
$ cd Aurelia.App
$ yarn
$ cd ..\Shared.Lib
$ yarn
```

Link my-shared-lib as a local package:

```sh
$ cd Shared.Lib
$ yarn link
$ cd ..\Aurelia.App
$ yarn link my-shared-lib
```

Run **au build --watch** OR just open in Visual Studio 2017 and hit F5 - there is a default gulp task that builds and watches the source in the Task Runner Explorer on solution startup.