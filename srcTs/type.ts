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
  type?: Type;
}

export interface Modules {
  [props: string]: ModuleItem;
}


export type Type = symbol;

export interface Reducers {
  [props: string]: (state: BaseObject, action: BaseObject) => any;
}

export interface MapMutations {
  [props: string]: {
    [props: string]: () => any,
  }
}