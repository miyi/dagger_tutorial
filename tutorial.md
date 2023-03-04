##Welcome to dagger.js

dagger.js is a directive based web framework that is natively supported by the browser. This means that there are no need for apis and compiling which makes for a clean and intuitive way to design the modern web. You can access every dagger functionality through the dagger defined attributes. Let's see how it works and how to use it with a few tutorials.

###State management

The most defining feature of the modern web is the interactiveness of the many elements on a single webpage. Each element may present changing information or be manipuated by user interaction with a seperate element. Behind it all is a state management system that keeps track of all the moving pieces of a website. Dagger manages it's state values through lifecycle directives. Let's see what that looks like in action through creating a task card.

`
  <div +loading="{
  title: 'hello',
  description: 'create the first task card',
  completed: false,
  assignee: 'Ming'
  }">
    <div>
      <a>${scope.title}</a>
      <a>description:</a>
      <a>${scope.description}</a>
      <a>${scope.assignee}</a>
    <div>
  </div>
`

Dagger manages state information through the creation of scope variables via the +loading lifecycle directive. It accepts any javascript object, for functions that resolve into javascript objects. The html tag where +loading is defined acts as natural enclosures for the values defined in scope variable, meaning that these values are accessible anywhere within the closing tags of the element through the ${} markup, even if you define more scope variables nested in another scope.

Note: dagger recursively looks up the property names from it's current scope outwards. So `${scope.title}` can be abbreviated to just `{title}`.

We can manipulate the scope variable to add more interativity to the task card we created. First let's created a button that switches between the completed status of the card. To add some flare, let's show an orange border for incomplete tasks and a green border for completed tasks.

`
  <div +loading="{
  title: 'hello',
  description: 'create the first task card',
  completed: false,
  assignee: 'Ming',
  }">
    <div $style="{'border-color': completed?'green':'orange'}">
      <a>${scope.title}</a>
      <a>description:</a>
      <a>${scope.description}</a>
      <a>${scope.assignee}</a>
      <button +click="completed=!completed">${completed?'complete':'incomplete'}
    <div>
  </div>
`

A simple way to interact with the scope variable is via an event directive like `+click`. The `+click` event directive binds a click event listener to the html element where it's defined, and accepts any javascript statement as it's callback. Here we defined the callback to be a function that manipulates the `completed` value in the scope variable to be the opposite of whatever it was before, so clicking the button allows instantaneous update to the scope variable without any api use. Similarly, dagger.js allows developers to attach many event listener defined by the DOM by using event directives. 

note: Event data returned in the callback can be accessed inside a $event variable in the callback statement.

The border color change is achieved through the use of the control directive `$style`. All control directives watch the state for relevant changes, then self updates to match results. The `$style` control directive accepts string values which are then passed to the style attribute of the host element. 

Lifecycle directives, event directives, and control directives are the three types of directives provided by dagger.js to achieve all the needs of the modern web. The task card example allowed us to initialize scope values, then update and watch for changes to realize some basic interative functions. Next up we will build upon the task card we just created to build more useful tools.

###TODO LIST (Forms, $each, delete, click and drag, intro to abstraction) 


###KANBAN (formal intro to modules, abstractions, dagger configs)

###ROUTING

dagger.js comes with it's own routing!

