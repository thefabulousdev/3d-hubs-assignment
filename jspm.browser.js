SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "assets/": "assets/",
    "3d-hubs-assignment/": "app/"
  },
  bundles: {
    "storage/build.js": [
      "3d-hubs-assignment/main.ts",
      "github:frankwallis/plugin-typescript@4.0.5.json",
      "github:zirafa/bootstrap-grid-only@master/css/grid12.css!github:systemjs/plugin-css@0.1.20/css.js",
      "3d-hubs-assignment/3dHubs.module.ts",
      "3d-hubs-assignment/3dHubs.values.ts",
      "3d-hubs-assignment/3dHubs.config.ts",
      "3d-hubs-assignment/3dHubs.run.ts",
      "3d-hubs-assignment/shared/index.ts",
      "3d-hubs-assignment/components/index.ts",
      "3d-hubs-assignment/3dHubs.component.ts",
      "github:systemjs/plugin-css@0.1.20.json",
      "github:zirafa/bootstrap-grid-only@master.json",
      "github:angular/bower-angular@1.5.3/angular.js",
      "github:thefabulousdev/ngComponentRouter@master/index.js",
      "3d-hubs-assignment/shared/services/index.ts",
      "3d-hubs-assignment/shared/components/index.ts",
      "3d-hubs-assignment/components/home/index.ts",
      "3d-hubs-assignment/components/print/index.ts",
      "3d-hubs-assignment/3dHubs.scss",
      "github:angular/bower-angular@1.5.3.json",
      "github:thefabulousdev/ngComponentRouter@master/angular_1_router.js",
      "github:thefabulousdev/ngComponentRouter@master.json",
      "3d-hubs-assignment/shared/services/generic-collection/index.ts",
      "3d-hubs-assignment/shared/services/event-dispatcher/index.ts",
      "3d-hubs-assignment/shared/services/basket/index.ts",
      "3d-hubs-assignment/shared/components/header/index.ts",
      "3d-hubs-assignment/components/home/home.component.ts",
      "3d-hubs-assignment/components/print/components/index.ts",
      "3d-hubs-assignment/components/print/print.component.ts",
      "github:mobilexag/plugin-sass@0.4.0.json",
      "3d-hubs-assignment/shared/services/generic-collection/generic-collection.service.ts",
      "3d-hubs-assignment/shared/services/event-dispatcher/event-dispatcher.service.ts",
      "3d-hubs-assignment/shared/services/basket/basket-event.service.ts",
      "3d-hubs-assignment/shared/services/basket/basket.service.ts",
      "3d-hubs-assignment/shared/components/header/components/index.ts",
      "3d-hubs-assignment/shared/components/header/header.component.ts",
      "3d-hubs-assignment/components/print/components/basket/index.ts",
      "3d-hubs-assignment/components/print/print.scss",
      "3d-hubs-assignment/shared/services/generic-collection/lib/GenericCollection.ts",
      "3d-hubs-assignment/shared/services/event-dispatcher/lib/EventDispatcher.ts",
      "3d-hubs-assignment/shared/components/header/components/basket-count/index.ts",
      "3d-hubs-assignment/shared/components/header/header.scss",
      "3d-hubs-assignment/components/print/components/basket/components/index.ts",
      "3d-hubs-assignment/components/print/components/basket/basket.component.ts",
      "3d-hubs-assignment/shared/services/event-dispatcher/lib/EventCollection.ts",
      "3d-hubs-assignment/shared/components/header/components/basket-count/basket-count.component.ts",
      "3d-hubs-assignment/components/print/components/basket/components/basket-uploader/index.ts",
      "3d-hubs-assignment/components/print/components/basket/basket.scss",
      "3d-hubs-assignment/shared/components/header/components/basket-count/basket-count.scss",
      "3d-hubs-assignment/components/print/components/basket/components/basket-uploader/basket-uploader.component.ts",
      "npm:bluebird@3.3.4.json",
      "npm:bluebird@3.3.4/js/browser/bluebird.js",
      "3d-hubs-assignment/components/print/components/basket/components/basket-uploader/basket-uploader.scss"
    ]
  }
});