# [Made With Love](https://stackblitz.com/edit/made-with-love) &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Made%20With%20Love%20-%20an%20experimental%20custom%20element%20which%20demonstrates%20usage%20of%20Angular%20Elements&url=https://github.com/nitayneeman/made-with-love&hashtags=Angular,AngularElements,WebComponents)

[![npm](https://img.shields.io/npm/v/angular-made-with-love.svg?colorB=brightgreen)](https://www.npmjs.com/package/angular-made-with-love)
[![Package Version](https://img.shields.io/github/package-json/v/nitayneeman/made-with-love.svg)](https://github.com/nitayneeman/made-with-love)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nitayneeman/made-with-love/blob/master/LICENSE)

A [custom element](https://developers.google.com/web/fundamentals/web-components/customelements) that displays a "Made With Love" message.

![Made With Love](https://raw.githubusercontent.com/nitayneeman/made-with-love/master/p.png)

## Disclaimer
This is an experimental project which uses Angular Elements for demonstration purposes. 
**Don't** use this custom element in production!

> _For additional information, check out [this](http://nitayneeman.com/posts/building-a-custom-element-using-angular-elements/)  article._

## Dependencies
Nothing :smirk:

## How to Install
### CDN
Copy the following stylesheet link into your `<head>`:
```html
<link rel="stylesheet" href="https://unpkg.com/angular-made-with-love/dist/made-with-love.css">
```

Copy the following script reference before the closing of your `<body>`:
```html
<script src="https://unpkg.com/angular-made-with-love/dist/made-with-love.js"></script>
```

### npm
Alternatively, you can install this package using npm:
```bash
npm install angular-made-with-love
````
Then, you should load both above files out of `node-modules/angular-made-with-love/dist`.

## How to Use
Insert the following line in your `html` file:
```
<made-with-love name="Nitay Neeman" url="http://nitayneeman.com" size="1.5"></made-with-love>
```

### Parameters
| Parameter | Type | Description |
| --- | --- | --- |
| `name` | String | Mandatory |
| `url` | String | Optional |
| `color` | String | Any valid color format (RGB, Hex, etc.) for the heart |
| `size` | Number | A positive real number |

## Demo
Check out [this](https://stackblitz.com/edit/made-with-love) link.

## License
Released under the [MIT](https://github.com/nitayneeman/made-with-love/blob/master/LICENSE) License.

<br>
This README was written with :heart:.
