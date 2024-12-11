export function isDocumentVisible() {
  if (typeof document.hidden !== 'undefined') {
    return !document.hidden
    // @ts-ignore
  } else if (typeof document.msHidden !== 'undefined') {
    // @ts-ignore
    return !document.msHidden
    // @ts-ignore
  } else if (typeof document.webkitHidden !== 'undefined') {
    // @ts-ignore
    return !document.webkitHidden
  }

  return document.visibilityState !== 'hidden'
}
