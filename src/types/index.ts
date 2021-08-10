export type Schema<TProperties extends Record<string, Schema<TProperties>>> =
  | ArraySchema
  | AnyOfSchema
  | BooleanSchema
  | FormatSchema
  | IntegerSchema
  | MultipleTypeSchema
  | NullSchema
  | NumberSchema
  | ObjectSchema<TProperties>
  | StringSchema;

export type StringFormat =
  | "date"
  | "date-time"
  | "uri"
  | "email"
  | "hostname"
  | "ipv4"
  | "ipv6"
  | "regex";

export type AllowedTypeKeywords =
  | "integer"
  | "number"
  | "string"
  | "boolean"
  | "array"
  | "object"
  | "null";

export interface AnyOfSchema {
  anyOf: Array<Schema<any>>;
}

export interface ObjectSchema<TProperties extends Record<string, Schema<any>>> {
  type: "object";
  maxProperties?: number;
  minProperties?: number;
  required?: Array<keyof TProperties>;
  properties?: TProperties;
  patternProperties?: Record<string, Schema<any>>;
  additionalProperties?: Boolean | Schema<any>;
  dependencies?: Record<string, Array<string> | Schema<any>>;
  propertyNames?: Schema<any>;
  patternRequired?: Array<string>;
  enum?: Array<any>;
  const?: any;
}

export interface IntegerSchema {
  type: "integer";
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  multipleOf?: number;
}

export interface NumberSchema {
  type: "number";
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  multipleOf?: number;
}

export interface StringSchema {
  type: "string";
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

export interface ArraySchema {
  type: "array";
  maxItems?: number;
  minItems?: number;
  pattern?: string;
  uniqueItems?: boolean;
  items?: Schema<any> | Array<Schema<any>>;
  additionalItems?: boolean | Schema<any>;
  contains?: Schema<any>;
}

export interface BooleanSchema {
  type: "boolean";
}

export interface NullSchema {
  type: "null";
}

export interface FormatSchema {
  type: "string";
  format: StringFormat;
}

export interface MultipleTypeSchema {
  type: Array<AllowedTypeKeywords>;
}
