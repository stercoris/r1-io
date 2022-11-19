/* eslint-disable @typescript-eslint/naming-convention */
import * as Factory from './factory/factory';

export * from '@ActionBuffer/index';
export * from '@Middleware/index';
export * from '@Router/index';
export * from '@Action/index';
// eslint-disable-next-line import/export
export * from '@Types/global';

const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({children}: {children: any}) =>
    Factory.createElement('functional', null, ...children),
};

export default R1IO;
