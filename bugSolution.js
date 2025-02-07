```javascript
<div class="flex w-full">
  <div class="bg-red-500 p-4 w-1/2"></div>
  <div class="bg-blue-500 p-4 w-1/2"></div>
</div>
```
By adding the `w-full` class to the parent `div`, we ensure that the flex container takes up the full available width. This makes the child elements with `w-1/2` occupy half of this full width, correctly distributing the space.