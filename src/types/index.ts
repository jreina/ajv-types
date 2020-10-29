export type Schema =
  | ArraySchema
  | AnyOfSchema
  | FormatSchema
  | IntegerSchema
  | NumberSchema
  | ObjectSchema
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

export interface AnyOfSchema {
  anyOf: Array<Schema>;
}

export interface ObjectSchema {
  type: "object";
  maxProperties?: number;
  minProperties?: number;
  required?: Array<string>;
  properties?: Record<string, Schema>;
  patternProperties?: Record<string, Schema>;
  additionalProperties?: Boolean | Schema;
  dependencies?: Record<string, Array<string> | Schema>;
  propertyNames?: Schema;
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
  items?: Schema | Array<Schema>;
  additionalItems?: boolean | Schema;
  contains?: Schema;
}

export interface FormatSchema {
  type: 'string';
  format: StringFormat;
}
