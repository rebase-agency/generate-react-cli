export const pathParse = (path: string) => {
  return path[path.length - 1] === "/" ? path.slice(0, path.length - 1) : path
}
