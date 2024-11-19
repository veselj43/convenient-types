/**
 * Use in any string enum to allow custom values, but keep suggestions
 */
export type AllowEnumStringValues = string & {}

/**
 * Same as build-in Omit, but with key suggestions
 */
export type OmitTyped<T, K extends keyof T | AllowEnumStringValues> = Pick<T, Exclude<keyof T, K>>

/**
 * Same as build-in Omit, but allows only existing keys
 */
export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
