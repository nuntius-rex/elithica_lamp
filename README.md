# elithica_lamp
Elithica (LAMP) - A modular front-end framework for intuitive web development.


<p>This is the LAMP version of the Elithica Framework.</p>


## Installation Option 1: Elithica CLI

## INSTALL
Note: The CLI uses Git to pull the relevant selections. Make sure you have Git installed.

```
npm install -g @elithica/cli
elithica
```

Follow the onscreen instructions to start and perform installation.
After providing a project name, select option B to install for LAMP.
```
Please select the version you would like to install:
        [A] Node/Express
        [B] LAMP
```
## Installation Option 2: Elithica CLI

If you decide not to use the CLI you may simply download and install from this repository. Once downloaded, run the following within the project directory:

```
npm install
npm start
```


## Recommended Usage

<p>The Elithica CLI is designed to install versions of the Elithica framework. Elithica is a front-end JavaScript Single Page Application (SPA) framework. The following Elithica options are available install:</p>

> Node/Express

> LAMP (Apache/PHP)  (THIS VERSION)

<p>These two structures are similar, but differ with respect to minor routing. For example Apache requires an .htaccess file to direct routes to the single page application (SPA), while the Express install does not need them.</p>

## Framework Structure

<p>The core aspect of Elithica is a uniform structure that allows you to do intuitive ES6 modular development on the front-end without a larger framework. Here is what the general structure looks like:</p>

```
 root_folder
     |-- css
          |-- lib
               |-- (css framework, optional)
     |-- img
          |-- logo  
     |-- js
          |-- config
                |-- main.menu.js
                |-- main.template.js
                |-- routes.js

          |-- lib
               |-- svg
                    |-- icons.js
               |-- (jquery, optional)

          |-- modules
               |-- components
                    |-- (Elithica Components)

               home.mod.js

          |-- utils
               |-- fetch.Util.js
               |-- valid.Util.js

          app_legacy.js
          app.js

     index.html

```

## How to Use and Customize

<p>Once Elithica is installed, you can do what you want. Obviously, familiarity with a framework is key so you will want to take a look around.  After this, we recommend the following steps:</p>

```
1) Edit the index.html Title and Metadata to match your project.
2) Edit the home.mod.js file with your own HTML and JavaScript
3) If you require an overall layout change, edit the js/config/main.template.js with your preferred page structure.
4) Require more pages in your SPA? Edit the js/config/routes.js file, then add a matching module in js/modules. Use the _template.mod.js file to get you started.
5) Further Customizations: By default Elithica comes with the Spectre CSS Framework and jQuery. These are optional tools. If you don't want them, just remove the reference from the index.html page and remove them from the relevant lib folders.
