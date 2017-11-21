# Font Awesome Stacked Icon
The Font Awesome Stacked Icons as Bower Dependency

## Why?
This is a little tiny helper that helps you to use the Font Awesome [stacked icons](http://blog.fontawesome.io/2014/09/25/custom-file-types-with-stacked-icons/) and to include them in your own project by using NPM, Bower or just download and including them.
 
## What's included?

- CSS Mnified
- CSS
- LESS
- SASS

## What's inisde?
```CSS
.fa-stack-1x { 
	top: .25em; 
}
.fa-stack {
	font-size: .5em;
	vertical-align: -16%;
}
.filetype-text {
	font-size: .7em;
	font-weight: 700;
	font-family: 'Oswald';
}
```

## How do I use it?
Included it in your project and use the following HTML as described [here](http://blog.fontawesome.io/2014/09/25/custom-file-types-with-stacked-icons/) and [here](http://blog.fontawesome.io/2014/05/19/stacking-text-and-icons/)
```HTML
<i class="fa fa-file-audio-o"></i>
<span class="fa-stack">
	<i class="fa fa-gear fa-stack-1x"></i>
	<i class="fa fa-file-o fa-stack-2x"></i>
</span>
<span class="fa-stack">
	<span class="fa-stack-1x filetype-text">PSD</span>
	<i class="fa fa-file-o fa-stack-2x"></i>
</span>
```
You can also use the [Main Bower Files](https://github.com/ck86/main-bower-files) to include the minified css in your project with your favorite task runner.
