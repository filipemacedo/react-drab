export type argvType = {
  _: string[];
  [property: string]: any;
};

export type CommandsFunctionType = (args: argvType) => {};
export type CommandTerminatedType = {
  done: boolean;
};
