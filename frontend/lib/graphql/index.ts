import { MutationResult, QueryResult } from "@apollo/client";

export { ADD_TO_CART_MUTATION } from "./addToCart";
export { ALL_PRODUCTS_QUERY } from "./allProducts";
export { CREATE_PRODUCT_MUTATION } from "./createProduct";
export { CURRENT_USER_QUERY } from "./currentUser";
export { DELETE_PRODUCT_MUTATION } from "./deleteProduct";
export { PAGINATION_QUERY } from "./pagination";
export { PRODUCT_QUERY } from "./product";
export { REMOVE_FROM_CART_MUTATION } from "./removeFromCart";
export { REQUEST_RESET_MUTATION } from "./requestReset";
export { RESET_MUTATION } from "./reset";
export { SEARCH_PRODUCTS_QUERY } from "./search";
export { SIGNIN_MUTATION } from "./signin";
export { SIGNOUT_MUTATION } from "./signout";
export { SIGNUP_MUTATION } from "./signup";
export { UPDATE_PRODUCT_MUTATION } from "./updateProduct";

export type CustomQueryHook<T, R extends QueryResult> = (input: T) => R;
export type CustomMutationHook<T, R extends MutationResult> = (input: T) => R;
