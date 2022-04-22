import { createStore, Store } from "redux";
import rootReducers from "./ducks/rootReducer";

import { InterfaceType } from "./ducks/interface/types";


export interface StoreTypes {

  Interface: InterfaceType;

}

const store: Store<StoreTypes> = createStore(rootReducers);

export default store;
