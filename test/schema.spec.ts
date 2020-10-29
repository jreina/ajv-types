import ajv from "ajv";
import { expect } from "chai";

import A, { AnyOf, Format } from "../src";
import { ObjectSchema } from "../src/types";
const An = A;

describe("Schema functions", () => {
  const validObject = {
    username: "ajv@example.com",
    password: "abcdefghijklmnop",
    profile: {
      birthday: "1940-01-01",
      interests: ["skiing", "hockey", "validation"]
    }
  };
  
  const schema = An.Object({
    additionalProperties: false,
    properties: {
      username: AnyOf(A.Format.Email, A.String({ minLength: 3 })),
      password: A.String({ minLength: 16 }),
      profile: An.Object({
        additionalProperties: false,
        properties: {
          birthday: A.Format.Date,
          interests: An.Array({
            items: A.String()
          })
        }
      })
    }
  });

  it("Should build a valid schema", () => {
    const validator = ajv();
    const validationFunc = validator.compile(schema);

    const result = validationFunc(validObject);
    expect(result).to.eq(true);
    expect(validationFunc.errors).to.be.null;
  });

  it("Should build a schema to reject when username is too short", () => {
    const validator = ajv();
    const validationFunc = validator.compile(schema);
    const input = { ...validObject, username: "x" };

    const result = validationFunc(input);
    expect(result).to.eq(false);
    expect(validationFunc.errors).to.be.an.instanceOf(Array);
  });

  it("Should build a schema to reject when password is too short", () => {
    const validator = ajv();
    const validationFunc = validator.compile(schema);
    const input = { ...validObject, password: "badpass" };

    const result = validationFunc(input);
    expect(result).to.eq(false);
    expect(validationFunc.errors).to.be.an.instanceOf(Array);
  });

  it("Should build a schema to reject when birthday is invalid", () => {
    const validator = ajv();
    const validationFunc = validator.compile(schema);
    const input = { ...validObject, profile: { birthday: "December 1942" } };

    const result = validationFunc(input);
    expect(result).to.eq(false);
    expect(validationFunc.errors).to.be.an.instanceOf(Array);
  });

  it("Should build a schema to reject when interests is invalid", () => {
    const validator = ajv();
    const validationFunc = validator.compile(schema);
    const input = {
      ...validObject,
      profile: { interests: ["the", "number", 7] }
    };

    const result = validationFunc(input);
    expect(result).to.eq(false);
    expect(validationFunc.errors).to.be.an.instanceOf(Array);
  });
});
