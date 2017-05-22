# React Jockbar

A simple to use loading bar that requires just a few lines of code to call and use. I couldn't find a package that did this for me when the project required it, so I built one.

### Prerequisites

The bar requires you to have jquery in your project.
You can install jquery with the following:

```
npm install jquery --save
```

### Installing

To install the package you will need to in your console:

```
npm install react-jockbar --save
```

Now you've installed the package we can start using it.

## Calling the bar

You can add the bar to your project by using the follow in your React project:

```
var jock = require('react-jockbar');
```

We should take this time to include jquery here in the project too, by doing the following:

```
var $ = require('jquery');
```

## The parameters of the bar

Once the bar has been added, you can start using it. The bar takes four parameters when calling it with a function, which are as follows:

width - default value is 0. This is the starting width of the bar, measured in %

height - default value is 10. This is the height of the bar, measured in px

color - default value is red. This is the color the bar will be, any standard css color will work (i.e. hex or rgb)

time - default value is 5. This is how long the bar will take to extend from starting width to 100% width, measured in seconds

## Using the bar

The bar can be used by calling it with the below function:

```
var width = 0;
var height = 10;
var color = 'red';
var time = 5;
var jockBar = jock.progressBar(width, height, color, time);
```

As this returns the html/css as a string, the bar now needs to be appended to a html id.

Here is our empty div:

```
<div id="jock-bar"></div>
```

And here is our function:

```
$(document).ready(function() {
  $('#jock-bar').html(jockBar);
});
```

This will add the bar as is. It must sit in a document ready function, to ensure it doesn't try and append the html before the div exists. Now we need to execute the 'loading' part of it, to make it extend to full width. We can do this by executing the following function:

```
jock.triggerBar();
```

Here are a few examples of how this can be used:

--- On Window Load ---

```
$(document).ready(function() {
  jock.triggerBar();
});
```

--- On Button Press ---

The Button

```
<button onClick={this.runTimer}>Click Me</button>
```

The Function

```
runTimer(){
  jock.triggerBar();
}
```

### Multiple bars

You should have no problem adding additional bars by just appending them to different html id's.

## Authors

* **Jock Perkins** - [Github Profile](http://www.github.com/Joxxorz)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
