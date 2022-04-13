export function compareComponentTypes(a: any, b: any) {
  // TODO: Using `displayName` here is a result of a bug in HMR:
  // https://github.com/gaearon/react-hot-loader/issues/304
  if (!a || !b) {
    return false
  }
  const aName = unnestHmrType(a)
  const bName = unnestHmrType(b)
  return aName === bName
}

function unnestHmrType(type: any) {
  return type.name === 'ProxyFacade' ? type.displayName : type.name
}
