export interface BaseObject {
  [props: string]: any;
}

export interface SetState {
  (data: any): any;
}

export interface GetState {

}

export interface Module {
  state: BaseObject;
  mutations: {
    [props: string]: (setState: SetState, getState: GetState) => any
  };
}


export interface ModuleItem extends Module {
  reducerName?: ReducerName;
}

export interface Modules {
  [props: string]: ModuleItem;
}

export interface Action {
  type?: Type;
  reducerName?: ReducerName;
  data?: object;

}

export type ReducerName = string;
export type Type = string;

export interface Reducers {
  [props: string]: (state: BaseObject, action: BaseObject) => any;
}

export interface MapMutations {
  [props: string]: {
    [props: string]: () => any,
  }
}