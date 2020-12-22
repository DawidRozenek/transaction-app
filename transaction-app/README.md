# TransactionApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Application structure

Application has few main modules.
LayoutModule is a module which contains main layout components such as header or content
TransactionModule which is lazy loaded module(folder is indicated with '+'). I know that it will not bring any value in this case because there is only one translation module, but I wanted to show a good practise to use with a bit larger apps.

TransactionModule components are separated to two folders: components and containers. Components are kind of presentional components, Containers are smart ones, providing data to presentional.

Forms are build with Model Driven Forms(ReactiveForms).

## Bonus tasks

I didn't wanted to spend more time on that Assignment so I skip few of 'em.

i18n - It's quite easy to implement with i18n library and TranslateService(ngx-translate).

Tests coverage - I didn't write unit tests because I didn't have time for that. If I could have some more time I would write tests for sorting and filtering/searching mainly, because it can be quite edgy and for posting transaction.
Unfortunately I was also on vacation and I spent too less time on that Assignment and wanted to send it to you before Xmas.
Hope u will find out everything u need from what I send. Best :)
