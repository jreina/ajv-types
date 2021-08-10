import {
  ArraySchema,
  FormatSchema,
  IntegerSchema,
  ObjectSchema,
  Schema,
  StringSchema
} from "./types";

export function Array(options: Omit<ArraySchema, "type"> = {}): ArraySchema {
  return {
    ...options,
    type: "array"
  };
}

export function Integer(
  options: Omit<IntegerSchema, "type"> = {}
): IntegerSchema {
  return {
    ...options,
    type: "integer"
  };
}

export function Number(
  options: Omit<IntegerSchema, "type"> = {}
): IntegerSchema {
  return {
    ...options,
    type: "integer"
  };
}

export const Object = <TProperties extends Record<string, Schema<any>>>(
  definition: Omit<ObjectSchema<TProperties>, "type"> = {}
): ObjectSchema<TProperties> => {
  return {
    ...definition,
    type: "object"
  };
};

export function String(options: Omit<StringSchema, "type"> = {}): StringSchema {
  return {
    ...options,
    type: "string"
  };
}

export function Not(options: Schema<any>): { not: Schema<any> } {
  return {
    not: options
  };
}

export function OneOf(
  options: Array<Schema<any>>
): { oneOf: Array<Schema<any>> } {
  return {
    oneOf: options
  };
}

export function AnyOf(
  ...options: Array<Schema<any>>
): { anyOf: Array<Schema<any>> } {
  return {
    anyOf: options
  };
}

export function AllOf(
  options: Array<Schema<any>>
): { allOf: Array<Schema<any>> } {
  return {
    allOf: options
  };
}

export function IfThenElse(
  ifValue: Schema<any>,
  thenValue: Schema<any>,
  elseValue: Schema<any>
): { if: Schema<any>; then: Schema<any>; else: Schema<any> } {
  return {
    if: ifValue,
    then: thenValue,
    else: elseValue
  };
}

export const Format = {
  Date: { type: "string", format: "date" } as FormatSchema,
  DateTime: { type: "string", format: "date-time" } as FormatSchema,
  Email: { type: "string", format: "email" } as FormatSchema,
  Hostname: { type: "string", format: "hostname" } as FormatSchema,
  IPv4: { type: "string", format: "ipv4" } as FormatSchema,
  IPv6: { type: "string", format: "ipv6" } as FormatSchema,
  RegEx: { type: "string", format: "regex" } as FormatSchema,
  URI: { type: "string", format: "uri" } as FormatSchema
};

export default {
  AnyOf,
  AllOf,
  Array,
  Format,
  IfThenElse,
  Integer,
  Not,
  Number,
  Object,
  OneOf,
  String
};

export {
  AnyOfSchema,
  ArraySchema,
  BooleanSchema,
  FormatSchema,
  IntegerSchema,
  MultipleTypeSchema,
  NumberSchema,
  NullSchema,
  ObjectSchema,
  Schema,
  StringFormat,
  StringSchema
} from "./types";
