# EcommerceApp

A modern e-commerce application built with Angular 19.2.0 and Bootstrap 5.3.5.

## Features

- Product catalog display with dynamic filtering
- Responsive design using Bootstrap
- Real-time inventory tracking
- Last item notifications

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure

- `src/app/components/` - Contains all Angular components
  - `header` - Navigation bar component
  - `products` - Product listing component
  - `footer` - Site footer component

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Dependencies

- Angular 19.2.0
- Bootstrap 5.3.5
- RxJS 7.8.0

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
