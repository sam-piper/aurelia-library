This is an ASP.NET Core 2 / Aurelia CLI solution that attempts to link a shared TypeScript library into an Aurelia project which is also running as an ASP.NET Core server application.

The Aurelia.App project is a fairly boilerplate Aurelia CLI app scaffolded using **au new --here** for ASP.NET Core / TypeScript / SASS / RequireJS.

The Shared.Lib project is a Node.js project targetting TypeScript 2.6.2, using the CommonJS module format.

A symbolic link is created to the **my-shared-lib** package represented by the Shared.Lib project, so that it can be referenced from node_modules, as the package is local to the solution and will not be published to NPM.

# What's Working
* References to exported types from Shared.Lib in Aurelia.App are compiling fine in TypeScript.
* **au build** is working fine, no reported errors

# What's Not Working
The application is not loading, because the browser is trying to load all the exports from my-shared-lib as separate script requests which result in 404s. It looks like the output JS for my-shared-lib needs to be packaged in AMD format to be compatible with RequireJS and the Aurelia bootstrapper, but I've only been able to get the shared exports working in TypeScript using the CommonJS format. I need help trying to get this all working correctly.

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