// eslint-disable-next-line @typescript-eslint/naming-convention
export type anyObj<T = any> = {
  [key: string]: T;
};


// eslint-disable-next-line @typescript-eslint/naming-convention
export type anyFunction = {
  (...params: any): any;
};

export type ObjectWithKey<K extends string, V = any> = { [P in K]: V };

export type Serializable =
  | boolean
  | number
  | string
  | null
  | undefined
  | Serializable[]
  | { [key: string]: Serializable };

export type StrictEqualTypes = string | number | undefined;

export type Dictionary<T = any> = Partial<{ [k: string]: T }>;
