#Hay River Web Site
##Installation
1. Download and install the [Node JavaScript Runtime](https://nodejs.org/en/) from https://nodejs.org/en/.

2. From the command line/terminal using the [NPM JavaScript Package Manager](https://www.npmjs.com/) to install the site's javascript development dependencies. This command will fetch all JS Development Dependencies listed in the package.json file. Dependencies will be placed in the node_modules directory.

```
$ npm install
```

##Usage

With the NodeJS Runtime and all JavaScript Development Dependencies installed, use the Gulp Task Runner to start the web server from the root directory.
```
$ gulp
```

Once the Web Server is started, open the browser and view the site on "http://localhost:8000".

Keep the WebServer running, and make edits to any HTML, CSS, and JS files outside of the "dist/" directory. After saving the changed file, the web server will re-minify the application into the "dist/" directory and the changes will be reflected immediately in the browser.


##DIRECTORY STRUCTURE

### README.md
* Describes installation, site architecture and usage.

### about.html
* About the company.

### css/

### data/
* Contains JSON data for individual property listings.

### dist/
* Minified production ready files. Upload these files to the web.

### form.html
* Contains link and verbiage link to secure forms.

### gulpfile.js
* Task runner to automate transform development files into production files.
  * Provides HTML, CSS, JavaScript file minification
  * Provides file concatenation
  * Provides auto CSS Prefixing
  * Starts Node WebServer
  * Provides File Watching and Live Server Reloading

### img/
* Contains all site images.

### index.html
* Main page.

### js/
#### js/controllers.js
    Controllers content rendering
#### js/main.js
    Initiates the JavaScript code.
#### js/maps.js
    Renders Google Maps
#### js/models.js
    JavaScript objects used for content rendering
#### js/modernizer.js

### node_modules/
* JavaScript library dependencies needed for development.

### package.json
* Manifest of all JavaScript Library Dependencies

