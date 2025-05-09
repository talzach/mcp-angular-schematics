import type { Tool } from "@modelcontextprotocol/sdk/types.js";

export function createToolDefinitions() {
  return [
    {
      name: "ng_generate",
      description:
        "Run 'ng generate' to create a new Angular artifact (component, service, etc.)",
      inputSchema: {
        type: "object",
        properties: {
          schematic: {
            type: "string",
            description: "The schematic to generate (e.g., component, service)",
          },
          name: {
            type: "string",
            description: "The name of the artifact to generate",
          },
          path: {
            type: "string",
            description: "The path where the artifact should be created",
            default: "src/app",
          },
          options: {
            type: "object",
            description: "Additional options for the schematic",
            additionalProperties: { type: "string" },
          },
          projectRoot: {
            type: "string",
            description:
              "The root directory of the Angular project (where angular.json is located)",
          },
        },
        required: ["schematic", "name"],
      },
    },
    {
      name: "ng_add",
      description: "Run 'ng add' to add a package to the Angular workspace",
      inputSchema: {
        type: "object",
        properties: {
          package: {
            type: "string",
            description: "The npm package to add (e.g., @angular/material)",
          },
          options: {
            type: "object",
            description: "Additional options for ng add",
            additionalProperties: { type: "string" },
          },
          projectRoot: {
            type: "string",
            description:
              "The root directory of the Angular project (where angular.json is located)",
          },
        },
        required: ["package"],
      },
    },
    {
      name: "ng_new",
      description: "Run 'ng new' to create a new Angular workspace",
      inputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the new workspace",
          },
          directory: {
            type: "string",
            description: "The directory to create the workspace in",
          },
          options: {
            type: "object",
            description: "Additional options for ng new",
            additionalProperties: { type: "string" },
          },
          projectRoot: {
            type: "string",
            description: "The root directory to run ng new in (optional)",
          },
        },
        required: ["name"],
      },
    },
    {
      name: "ng_run",
      description: "Run 'ng run' to execute a custom architect target",
      inputSchema: {
        type: "object",
        properties: {
          target: {
            type: "string",
            description: "The target to run (e.g., app:build:production)",
          },
          options: {
            type: "object",
            description: "Additional options for ng run",
            additionalProperties: { type: "string" },
          },
          projectRoot: {
            type: "string",
            description:
              "The root directory of the Angular project (where angular.json is located)",
          },
        },
        required: ["target"],
      },
    },
  ] as const satisfies Tool[];
}
