jquery-labelfor
===============

More than one instance of an id on a page? Don't control the entire page? Want your 
forms to be more accessible? LabelFor is for you!


**What is it?** LabelFor is a jQuery extension to automatically associate label elements 
with nearby inputs in an html standards compliant way.


### To use:

**Simple**

The first label will associate with _any_ next element via for="_next". 
The second label will associate with the previous element. 
```html
<label for="_next">Username</label><input type="text">

<input type="text"><label for="_prev">Zip</label>
```
The Javascript. (you can specify any root node(s))
```javascript
//to find all labels within body
$('body').labelFor();
```

**Simple+ CSS** 

This will find elements matching the css expression following '_next' within the element immediately following the label.
```html
<div class='css-username'>
    <label for="_next input">Username</label>
    <div>
        <input type="text">
    </div>
</div>
```

```javascript
//only associate labels within the matched elements
$('.css-username').labelFor();
```

### to include on your page
* If you're including on a very simple web-page you can copy `/dist/main.js` and the `/dist/main.js.map` into your javscript directory and use a \<src> tag to include main.js on your page.
* If you're using an ES5 build system you can `require('jquery-labelfor')` wherever you're doing your other plugins
* If you're using ES2015+ or Babel I'd suggest using `import $lf from 'jquery-labelfor/src/main'` This will help your bundler minimize file sizes. 
You'll also be able to call `$lf(".css-expression"")`


Notes:
* Non invasive: LabelFor is non destructive to existing ids.
* Idempotent: It can be run multiple times over the same set of elements without messing up existing associations.
* This lib is super-mature. It gets security updates. If you want a new feature please submit a PR on github
