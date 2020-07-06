Vaidya Ccommerce - Step by Step setup for projects
==================================================

Development Setup tools require
--------------------------------
- Download from [Visual Code](https://code.visualstudio.com/download)
 -- install Plugin [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Download from [Node](https://nodejs.org/en/)
- Download from [browser - Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=Cj0KCQjwl4v4BRDaARIsAFjATPnAbu4TpXtUJIYBiVYlyqbkpX72BHz7HjhRcJ4pbLZb6koOpTTWjTYaAmOYEALw_wcB&gclsrc=aw.ds)
- Download from [Git](https://git-scm.com/downloads)


Environment setup for development
---------------------------------
- First, [clone the jQuery git repo](https://github.com/naresh699/vaidya).
- Clone repository
```bash
  git clone https://github.com/naresh699/vaidya
```

- Then, enter the 'Vaidya' directory and run the node module installation script:
```bash
 npm run i
```

- Now by running the `grunt` command, in the jquery directory, you can build a full version of jQuery, just like with an `npm run build` command:
```
grunt watch
```