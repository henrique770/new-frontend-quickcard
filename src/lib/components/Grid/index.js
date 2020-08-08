import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

export default function GridComponent({ ...props }) {
  return <Grid {...props} />;
}

GridComponent.propTypes = {
  /**
   * Defines the align-content style property. It's applied for all screen sizes.
   can be:
   'stretch'
| 'center'
| 'flex-start'
| 'flex-end'
| 'space-between'
| 'space-around'
------------------------------
   */
  alignContent: PropTypes.string,
  /**
   * Defines the align-items style property. It's applied for all screen sizes.
   can be:
   'stretch'
| 'flex-start'
| 'center'
| 'flex-end'
| 'stretch'
| 'baseline'
------------------------------

   */
  alignItems: PropTypes.string,
  /**
   * The content of the component.
   * ------------------------------
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * ------------------------------
   */
  classes: PropTypes.objectOf(PropTypes.object),

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   * ------------------------------
   */
  component: PropTypes.elementType,
  /**
   * If true, the component will have the flex container behavior. You should be wrapping items with a container.
   * ------------------------------
   */
  container: PropTypes.bool,
  /**
   * Defines the flex-direction style property. It is applied for all screen sizes.
   * can be:
   * 	'row'
| 'row-reverse'
| 'column'
| 'column-reverse'
------------------------------
   */
  direction: PropTypes.string,
  /**
   If true, the component will have the flex item behavior. You should be wrapping items with a container.
------------------------------
   */
  item: PropTypes.bool,
  /**
   Defines the justify-content style property. It is applied for all screen sizes.
   can be:
   'flex-start'
| 'center'
| 'flex-end'
| 'space-between'
| 'space-around'
| 'space-evenly'
------------------------------
   */
  justify: PropTypes.string,

  /**
   Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden.
   can be:
   false
| 'auto'
| true
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
------------------------------
   */
  lg: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /**
   Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.
   can be:
   false
| 'auto'
| true
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
------------------------------
   */
  md: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /**
   Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden.
   can be:
   false
| 'auto'
| true
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
------------------------------
   */
  sm: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /**
   Defines the number of grids the component is going to use. It's applied for the xl breakpoint and wider screens.
   can be:
   false
| 'auto'
| true
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
------------------------------
   */
  xl: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /**
   Defines the number of grids the component is going to use. It's applied for the xs breakpoint and wider screens.
   can be:
   false
| 'auto'
| true
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
| 11
| 12
------------------------------
   */
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  /**
   Defines the space between the type item component. It can only be used on a type container component.
   can be:
0
| 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 10
------------------------------
   */
  spacing: PropTypes.number,
  /**
   Defines the flex-wrap style property. It's applied for all screen sizes.
   can be:
'nowrap'
| 'wrap'
| 'wrap-reverse'
------------------------------
   */
  wrap: PropTypes.string,
};

GridComponent.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xs: false,
  spacing: 0,
  wrap: 'wrap',
};
