export function requireImage(path: string) {
  // eslint-disable-next-line import/no-dynamic-require
  return require(`@src/assets/images/${path}`).default as string;
}
