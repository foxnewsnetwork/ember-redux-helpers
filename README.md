# ember-redux-helpers
[![CircleCI](https://circleci.com/gh/foxnewsnetwork/ember-redux-helpers.svg?style=svg)](https://circleci.com/gh/foxnewsnetwork/ember-redux-helpers)
exposes the `dispatch` helper in your templates

## Example
```javascript
const modelChanged = (key, value) => ({
  type: 'MODEL_CHANGED',
  payload: { key, value }
});
```
```handlebars
{{one-way-input model.myFieldName update=(dispatch modelChanged 'myFieldName')}}
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-redux-helpers`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
