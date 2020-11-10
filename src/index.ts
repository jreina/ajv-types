import {
  ArraySchema,
  FormatSchema,
  IntegerSchema,
  ObjectSchema,
  Schema,
  StringFormat,
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

export const Object = (
  definition: Omit<ObjectSchema, "type"> = {}
): ObjectSchema => {
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

export function Not(options: Schema): { not: Schema } {
  return {
    not: options
  };
}

export function OneOf(options: Array<Schema>): { oneOf: Array<Schema> } {
  return {
    oneOf: options
  };
}

export function AnyOf(...options: Array<Schema>): { anyOf: Array<Schema> } {
  return {
    anyOf: options
  };
}

export function AllOf(options: Array<Schema>): { allOf: Array<Schema> } {
  return {
    allOf: options
  };
}

export function IfThenElse(
  ifValue: Schema,
  thenValue: Schema,
  elseValue: Schema
): { if: Schema; then: Schema; else: Schema } {
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
  FormatSchema,
  IntegerSchema,
  NumberSchema,
  ObjectSchema,
  Schema,
  StringFormat,
  StringSchema
} from "./types";
