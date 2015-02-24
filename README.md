jquery-labelfor
===============

jQuery extension to automatically associate label elements with nearby inputs.

Within the 'for' tag of a label '_next' or '_prev' to link either the next or previous html element. Add a css expression to the 'for' tag to search _within_ the next or previous element.

Examples:

Simple - This will associate _any_ next element.

```html
<label for="_next">Username</label><input type="text">
```

```javascript
//find all labels within body
$('body').labelFor();
```

Within - This will find elements matching the css expression following '_next' within the element immediately following the label.

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