/**
 * @class FullpageNavigation
 */
import React, { PureComponent } from 'react';

import FullpageContext from './FullpageContext';

class FullpageNavigation extends PureComponent {
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <FullpageContext.Consumer>
        { value => (
          <li>
            1,2,3
          </li>
          )
        }
      </FullpageContext.Consumer>
    );
  }
}

export default FullpageNavigation;