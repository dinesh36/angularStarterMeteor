# angularStarterMeteor

Simple angular bootstrap project to bootstrap your angular meteor application 

This project has the following steps with following branches : 

* **angular-less** - Branch contains the angular and less thigs , Need to add/remove following meteor packages
  * **meteor remove ecmascript** - remove the meteor js compiler
  * **meteor remove blaze**-html-templates - remove the meteor html compiler
  * **meteor add angular** - Add the angular plugin to support the angular file structure
      for angular js files and templates use the .ng.js and .ng.html extentions 
  * **meteor add angularui:angular-ui-router** - To add the route suppport to project
  * **meteor add less** - Add the less file to support the less
* **bootstrap** - adding bootsrap to project
  * **meteor add twbs:bootstrap** - adding the bootstrap package to meteor
* **collections** - setting the collections **Gems** - [collections README.md](https://www.github.com)
  * **meteor add angularui:angular-ui-bootstrap**
* **collections-publish** - collections with using publish and subscribe method
  * **meteor remove autopublish** - remove the autopublish to manually publish the collections
* **collections-paging** - add paging/searching/sorting support to collections
  * **meteor add angularutils:pagination** - add paging support to collections
  * **meteor add tmeasday:publish-counts** - add total_count support to collections 
