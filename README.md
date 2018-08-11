# Made With Love

[![npm](https://img.shields.io/npm/v/angular-made-with-love.svg?colorB=brightgreen)](https://www.npmjs.com/package/angular-made-with-love)
[![Package Version](https://img.shields.io/github/package-json/v/nitayneeman/made-with-love.svg)](https://github.com/nitayneeman/made-with-love)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nitayneeman/made-with-love/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![demo: stackblitz](https://img.shields.io/badge/demo-stackblitz-purple.svg)](https://stackblitz.com/edit/made-with-love)

<p align="center">
  <img src="https://raw.githubusercontent.com/nitayneeman/made-with-love/master/preview.png" width="400" style="text-align: center" />
</p>

A project that demonstrates how to build an Angular Package which provides a simple Angular Element. Also, it demonstrates how to make it addable with `ng add` using Schematics.

Check out [this](http://nitayneeman.com/posts/making-an-addable-angular-package-using-schematics) article for getting more information about the project.

## How to Install

To Install using Angular, simply do:

```
ng add angular-made-with-love
```

This command will:

- Add `@angular/elements`, `@webcomponents/custom-elements` and `angular-made-with-love` into `package.json`.
- Run `npm install`.
- Import `MadeWithLoveModule` into the root module of your host application.
- Inject the polyfill’s script file into the `scripts` of your host application.

In case you want to do it manually, there are available CLI parameters for skipping the steps above: `skipPackageJson`, `skipModuleImport` and `skipPolyfill`.

## How to Use

Apply `CUSTOM_ELEMENTS_SCHEMA` on your host module:

```javascript
@NgModule({
  imports: [...],
  declarations: [...],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HostModule {}
```

Insert the following line into a template:

```html
<made-with-love name="Nitay Neeman" url="http://nitayneeman.com" size="1.5" color="red"></made-with-love>
```

## Disclaimer

This package is intended to be used inside Angular applications. In case you want to use it as part of an non-Angular application - go to [this](https://github.com/nitayneeman/made-with-love/tree/release/v1.1.0) branch.

<br>
This README was written with ❤️.
