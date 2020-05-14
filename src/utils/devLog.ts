export function devLog(message?: any, ...optionalParams: any[]) {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log(message, ...optionalParams);
  }
}

export function devLogError(message?: any, ...optionalParams: any[]) {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.error(message, ...optionalParams);
  }
}
