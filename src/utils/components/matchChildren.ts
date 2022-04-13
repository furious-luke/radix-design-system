import * as React from 'react'

import {compareComponentTypes} from './compareComponentTypes'

export function matchChildren(
  children: React.ReactNode,
  types: React.ReactNode[],
  // defaults: {[key: string]: React.Component} = {},
) {
  const results = new Array(types.length)
  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return
    }
    for (let ii = 0; ii < types.length; ii += 1) {
      const Component = types[ii]
      if (compareComponentTypes(child.type, Component)) {
        console.assert(results[ii] === undefined, 'Duplicate child component type in matchChildren')
        results[ii] = child
        break
      }
    }
  })
  // for (let ii = 0; ii < results.length; ii += 1) {
  //   if (!results[ii]) {
  //     results[ii] = getDefault(types[ii], defaults)
  //   }
  // }
  return results
}

// function getDefault(
//   type: React.Component,
//   defaults: {[key: string]: React.Component},
// ) {
//   if (defaults[type] !== undefined) {
//     if (defaults[type]) {
//       return defaults[type]()
//     }
//     return defaults[type]
//   }
//   return React.createElement(type)
// }

// export function filterChildren(children, component) {
//   const matched = []
//   React.Children.forEach(children, child => {
//     if (compareComponentTypes(child.type, component)) {
//       matched.push(child)
//     }
//   })
//   return matched
// }
