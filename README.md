<p align="center">
  <img src="https://raw.githubusercontent.com/nitayneeman/made-with-love/master/preview.png" width="400" alt="Preview" />
</p>

<h1 align="center">Made With Love</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/angular-made-with-love"><img src="https://img.shields.io/npm/v/angular-made-with-love.svg?colorB=cb3837" alt="npm"></a>
  <a href="https://stackblitz.com/edit/made-with-love"><img src="https://img.shields.io/badge/demo-stackblitz-373277.svg" alt="Demo"></a>
  <a href="https://www.npmjs.com/package/angular-made-with-love"><img src="https://img.shields.io/npm/dt/angular-made-with-love?color=blue" alt="Downloads"></a>
  <a href="https://github.com/nitayneeman/made-with-love/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-lightgray.svg" alt="License"></a>
</p>

<p align="center">
  <a href="https://github.com/nitayneeman/made-with-love#-how-to-install">Installation</a> ·
  <a href="https://github.com/nitayneeman/made-with-love#-how-to-use">Usage</a> ·
  <a href="https://github.com/nitayneeman/made-with-love#%EF%B8%8F%EF%B8%8F-disclaimer">Disclaimer</a>
</p>

## ℹ️️ Description

A project that demonstrates how to build an Angular Package which provides a simple Angular Element. Also, it demonstrates how to make it addable with `ng add` using Schematics.

Check out [this](http://nitayneeman.com/posts/making-an-addable-angular-package-using-schematics) article for getting more information about the project.

<br>

## 🔧 How to Install

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

<br>

## 👨🏻‍🏫 How to Use

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

<br>

## ⚠️️ Disclaimer

This package is intended to be used inside Angular applications. In case you want to use it as part of an non-Angular application - go to [this](https://github.com/nitayneeman/made-with-love/tree/release/v1.1.0) branch.

<br>

## 💁🏻 Contributing

This is an open source project. Any contribution would be greatly appreciated!
