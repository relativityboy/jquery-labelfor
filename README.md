jquery-labelfor
===============

jQuery extension to automatically associate label elements with nearby inputs.

Simple:
This will match _any_ next element.

```html
<label for="_next">Username</label><input type="text">
```

```javascript
//find all labels within body
$('body').labelFor();
```

Fancy:
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