# HealthySeeChrome

HealthySee is a Chrome extension that provides the user with a health tip on each new tab opened.

A demo is available to view [here](https://youtu.be/tw6hwJ__h30).

### Use
* Download this repository.
* In Google Chrome, go to `Settings > Extensions > Load unpacked extension...`, then select `HealthySee`
* Make sure the `Enabled` box is checked, then open a new tab!

### Design
#### `manifest.json`
In order to create a Chrome extension, we need to write a `manifest` file to declare metadata of our extension, including the title, version and any default settings that the extension will override. In this case, we are overriding the default `newtab` with our own page, named `healthysee.html`.

#### `healthysee.html`
In the page that is rendered when we load a new tab, there is no hard-coded default text. This HTML document contains three `div`s, two of which will be populated with text using `script.js`.

#### `script.js`
This file contains a script to decide what text will populate our HTML document. First, we set a greeting by determining the time of day. Then, we set the `innerHTML` of the `content_box` by picking a random index of `tips`, an array populated by strings.

#### `healthysee.css`
This file is purely for styling, including font size and style and the positioning of the text.