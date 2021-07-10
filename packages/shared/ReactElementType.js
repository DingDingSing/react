/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type Source = {
  fileName: string,
  lineNumber: number,
};

export type ReactElement = {
  // 用于辨别ReactElement对象
  $$typeof: any,

  // 内部属性
  // 表明节点种类
  // 它的值可以是字符串(代表div,span等 dom 节点), 
  // 函数(代表fuction, class等节点), 
  // 或者 react 内部定义的节点类型(portal, context, fragment等)
  // 在reconciler阶段, 会根据 type 执行不同的逻辑(在 fiber 构建阶段详细解读)
  type: any,
  // key属性在reconciler阶段会用到, 目前只需要知道所有的ReactElement对象都有 key 属性
  //(且其默认值是 null, 这点十分重要, 在 diff 算法中会使用到).
  key: any,
  ref: any,
  props: any,


  // ReactFiber
  // ReactFiber 记录创建本对象的Fiber节点, 还未与Fiber树关联之前, 该属性为null
  _owner: any,

  // __DEV__
  _store: {validated: boolean, ...},
  _self: React$Element<any>,
  _shadowChildren: any,
  _source: Source,
};
