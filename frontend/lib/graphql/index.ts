import { MutationResult, QueryResult } from "@apollo/client";

export { ALL_PRODUCTS_QUERY } from "./allProducts";
export { CREATE_PRODUCT_MUTATION } from "./createProduct";
export { CURRENT_USER_QUERY } from "./currentUser";
export { DELETE_PRODUCT_MUTATION } from "./deleteProduct";
export { PAGINATION_QUERY } from "./pagination";
export { PRODUCT_QUERY } from "./product";
export { SIGNIN_MUTATION } from "./signin";
export { UPDATE_PRODUCT_MUTATION } from "./updateProduct";
export { SIGN_OUT_MUTATION } from "./signout";

export type CustomQueryHook<T, R extends QueryResult> = (input: T) => R;
export type CustomMutationHook<T, R extends MutationResult> = (input: T) => R;
