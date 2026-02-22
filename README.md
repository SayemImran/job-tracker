## question-01 answer:
- getElementById(id): Returns a single Element (the first element with the matching id) and accepts as input a string that represents the id (omitting the #).
- getElementsByClassName(className): Provides an active HTML document group of elements that accept a string containing the class name (without the dot) as a parameter and have the specified className.
- querySelector(selector): Takes any valid CSS selector  as an argument and returns the first element that matches the CSS selector.
- querySelectorAll(selector) takes any valid CSS selector as an argument and returns a static NodeList of all elements that match the CSS selector.



## question-02 ans:
- Create the element
- Add content or attributes
- Insert into the DOM

## questions-03 answer:
 Event bubbling is a DOM event propagation process in which, following an initial capturing phase from root to target, an event begins at the originating element and then ascends through its ancestors toward the root. By enabling a single handler on a parent to react to events from several children, it facilitates event delegation. StopPropagation() and stopImmediatePropagation() can be used to halt propagation, and event is used to distinguish between the source and handler of an event.target as well as current target.

## questions-04 answer:
 In JavaScript, event delegation is a pattern where a parent element's single event listener uses event bubbling to handle events from its child elements. It is useful because:
 - Performance is improved
 - maintenance is made simpler and dynamically added elements can be handled by checking events.target inside the handler.

## questions-05 answer:
- preventDefault() : stops the dedault browser actions
- stopPropagation() : stops the event from bubbling up to parent elements