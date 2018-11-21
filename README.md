```
┓┏┓┏┓┃
┛┗┛┗┛┃ ⟍ ○⟋
┓┏┓┏┓┃   ∕    jumper
┛┗┛┗┛┃ ノ)     message
┓┏┓┏┓┃
┃┃┃┃┃┃
┻┻┻┻┻┻
```

## Usage

```js
const jumperMessage = require('jumper-message');
console.log(jumperMessage('message'));
```

## API

### jumperMessage(message, [options])

#### message
Type: `string`

The string to use as the message.

#### options
Type: `Object`

##### buildingStyle
Type: `string`<br>
Set the style of the bulding to a [chalk style](https://github.com/chalk/chalk#styles). Defaults to `gray`.

##### compact
Type: `boolean`<br>
Remove the padding between the message lines. Defaults to `false`.

##### extraFloors
Type: `Number`<br>
Add extra floors to the building below the message. Defaults to `0`.

##### gradient
Type: `string`<br>
Set the style of the message to be a gradient, using the built-in gradients from [gradient-string](https://github.com/bokub/gradient-string#available-built-in-gradients). Overrides the color set with `messageColor`. Defaults to `pastel` if the specified gradient isn’t valid.

##### messageStyle
Type: `string`<br>
Set the style of the message to a [chalk style](https://github.com/chalk/chalk#styles). Defaults to `bold.white`. Overridden when the `gradient` option is used.

##### personStyle
Type: `string`<br>
Set the style of the jumper to a [chalk style](https://github.com/chalk/chalk#styles). Defaults to `white`.

## Related

* [jumper-message-cli](https://github.com/bdougherty/jumper-message-cli) - CLI for this module
* [chalk](https://github.com/chalk/chalk)
* [gradient-string](https://github.com/bokub/gradient-string)
* [Friday deploy script for Capistrano](https://gist.github.com/exAspArk/4f18795bc89b6e2666ee)

## License

MIT © [Brad Dougherty](https://brad.is)
