import * as Factory from './factory/factory';

export * from '@ActionBuffer/index';
export * from '@Middleware/index';
export * from '@Router/index';
export * from '@Action/index';
export * from '@Types/global';

const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({children}: {children: Factory.R1Node[]}) =>
    Factory.createElement('functional', null, ...children),
};

export default R1IO;
