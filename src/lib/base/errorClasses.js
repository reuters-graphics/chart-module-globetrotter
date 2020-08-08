export default class ChartError extends Error {
  constructor(constructorName = 'Chart component') {
    super(constructorName);
    this.constructorName = constructorName;
    this.name = 'ChartComponentError';
  }
}

export class ErrorDrawMethodUndefined extends ChartError {
  message = `${this.constructorName} should have a draw method`
}

export class ErrorSelectorType extends ChartError {
  message = `${this.constructorName} selector should be a DOM Element or selector string`
}

export class ErrorPropsType extends ChartError {
  message = `${this.constructorName} props should be an Object`
}

export class ErrorTopojsonType extends ChartError {
  message = `${this.constructorName} topojson should be an Object`
}

export class ErrorLocationType extends ChartError {
  message = `${this.constructorName} location should be an Array of lat/lon coordinates or a valid region or country ID`
}
