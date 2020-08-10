import {
  ErrorDrawMethodUndefined,
  ErrorLocationType,
  ErrorPropsType,
  ErrorSelectorType,
  ErrorTopojsonType
} from './errorClasses';

import d3 from '../utils/d3';
import merge from 'lodash/merge';

class ChartComponent {
  constructor(selector) {
    this.selection(selector);
  }

  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */
  selection(selector) {
    if (!selector) return this._selection;

    if (!(selector instanceof Element) && typeof selector !== 'string') {
      throw new ErrorSelectorType(this.constructor.name);
    }

    this._selection = d3.select(selector);
    return this;
  }

  /**
   * Default props
   * @type {Object}
   */
  defaultProps = {}

  /**
   * Getter/setter for props object
   * @param  {Object} obj props
   */
  props(obj) {
    if (!obj) return this._props || this.defaultProps;

    if (!(obj instanceof Object)) {
      throw new ErrorPropsType(this.constructor.name);
    }

    this._props = merge(this._props || this.defaultProps, obj);
    return this;
  }

  /**
   * Default data
   * @type {Array}
   */
  defaultData = []

  /**
   * Getter/setter for chart location
   * @param  {Array} arr data
   */
  location(arrStringOrNull, overrideCentroid = null) {
    if (arrStringOrNull === undefined) return this._location;

    this._overrideCentroid = overrideCentroid;

    if (
      !(arrStringOrNull instanceof Array) &&
      !(typeof arrStringOrNull === 'string') &&
      arrStringOrNull !== null
    ) {
      throw new ErrorLocationType(this.constructor.name);
    }

    this._location = arrStringOrNull;
    return this;
  }

  /**
   * Getter/setter for chart topojson
   * @param  {Object} obj topology
   */
  topojson(obj) {
    if (!obj) return this._topojson || {};
    if (typeof obj !== 'object') {
      throw new ErrorTopojsonType(this.constructor.name);
    }

    this._topojson = obj;
    return this;
  }

  draw() {
    throw new ErrorDrawMethodUndefined(this.constructor.name);
  }
}

export default ChartComponent;
