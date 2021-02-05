import { Optional } from "../../common/types";

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export type DataType<T extends (...args: any) => any> = Optional<
  ThenArg<ReturnType<T>>
>;
