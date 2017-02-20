# Vue Pagination

Note: This package is for use with Vuejs 1.
For version 2 please use [vue-pagination-2](https://www.npmjs.com/package/vue-pagination-2) instead.

Simple, generic and non-intrusive pagination component for Vue.js.
Presentation is based on bootstrap.

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Programmatic Manipulation](#programmatic-manipulation)
- [Computed Properties](#computed-properties)

# Dependencies

* Vue.js (>=1.0). Required.
* Bootstrap (CSS). Optional.

# Installation



Compile the code using `browserify` with the `stringify` transform

    npm install vpaging

Require the script:

    var VuePaging = require('vpaging');



## Register the component

    Vue.use(VuePaging)

HTML:

    <page v-href:vpage :records="500" pagelength="[10,20,30]"></page>

props:

* `records` `number` `required` number of records
* `pagelength` `Array` number of lists contained in one page

When a page is selected an event will be dispatched, using the unique id for the component.
Listen to it and respond accordingly:

      this.$on('vPageChanged', function(page) {
          // display the relevant records using the page param
      });

Just check the source code if you have any problem.it is easy.

# Programmatic Manipulation

To programmatically set the page apply a `v-ref` identifier to the component and use one of the following methods:

* `setPage(page)`
* `next()`
* `prev()` 

If you wanna to use thoese methods in parent scope:
```
this.$refs.vpage.setPage(1);
this.$refs.vpage.next();
this.$refs.vpage.prev();
```


# Computed Properties

* `totalPages`

