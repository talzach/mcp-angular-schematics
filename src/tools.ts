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
            description:
              "The path where the artifact should be created, relative to the appRoot (do not include the app folder itself). For example, if the full path is 'webui/src/app/modules/alerts' and appRoot is 'webui', then path should be 'src/app/modules/alerts'.",
            default: "src/app",
          },
          appRoot: {
            type: "string",
            description:
              "The absolute path to the first folder in the 'path' property. For example, if 'path' is 'webui/src/app/modules/alerts', then 'appRoot' should be the absolute path to 'webui'.",
          },
          options: {
            type: "object",
            description: "Additional options for the schematic",
            properties: {
              defaults: {
                type: "boolean",
                description:
                  "Disable interactive input prompts for options with a default.",
                default: false,
              },
              dryRun: {
                type: "boolean",
                description:
                  "Run through and report activity without writing out results.",
                default: false,
              },
              force: {
                type: "boolean",
                description: "Force overwriting of existing files.",
                default: false,
              },
              help: {
                type: "boolean",
                description:
                  "Shows a help message for this command in the console.",
                default: false,
              },
              interactive: {
                type: "boolean",
                description: "Enable interactive input prompts.",
                default: true,
              },
            },
            additionalProperties: { type: "string" },
          },
        },
        required: ["schematic", "name", "appRoot"],
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
          appRoot: {
            type: "string",
            description:
              "The absolute path to the first folder in the 'path' property. For example, if 'path' is 'webui/src/app/modules/alerts', then 'appRoot' should be the absolute path to 'webui'.",
          },
          options: {
            type: "object",
            description: "Additional options for ng add",
            additionalProperties: { type: "string" },
          },
        },
        required: ["package", "appRoot"],
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
          appRoot: {
            type: "string",
            description:
              "The absolute path to the first folder in the 'path' property. For example, if 'path' is 'webui/src/app/modules/alerts', then 'appRoot' should be the absolute path to 'webui'.",
          },
          options: {
            type: "object",
            description: "Additional options for ng new",
            additionalProperties: { type: "string" },
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
          appRoot: {
            type: "string",
            description:
              "The absolute path to the first folder in the 'path' property. For example, if 'path' is 'webui/src/app/modules/alerts', then 'appRoot' should be the absolute path to 'webui'.",
          },
          options: {
            type: "object",
            description: "Additional options for ng run",
            additionalProperties: { type: "string" },
          },
        },
        required: ["target", "appRoot"],
      },
    },
    {
      name: "ng_update",
      description:
        "Run 'ng update' to update Angular packages and run migrations.",
      inputSchema: {
        type: "object",
        properties: {
          packages: {
            oneOf: [
              {
                type: "string",
                description:
                  "The name of the package to update (e.g., @angular/core)",
              },
              {
                type: "array",
                items: { type: "string" },
                description: "The names of packages to update.",
              },
            ],
          },
          appRoot: {
            type: "string",
            description:
              "The absolute path to the first folder in the 'path' property. For example, if 'path' is 'webui/src/app/modules/alerts', then 'appRoot' should be the absolute path to 'webui'.",
          },
          next: {
            type: "boolean",
            description: "Use the prerelease version, including beta and RCs.",
            default: false,
          },
          force: {
            type: "boolean",
            description: "Ignore peer dependency version mismatches.",
            default: false,
          },
          allowDirty: {
            type: "boolean",
            description:
              "Allow updating when the repository contains modified or untracked files.",
            default: false,
          },
          createCommits: {
            type: "boolean",
            description:
              "Create source control commits for updates and migrations.",
            default: false,
          },
          from: {
            type: "string",
            description:
              "Version from which to migrate from (only with migrate-only and single package).",
          },
          to: {
            type: "string",
            description:
              "Version up to which to apply migrations (only with migrate-only and single package).",
          },
          migrateOnly: {
            type: "boolean",
            description:
              "Only perform a migration, do not update the installed version.",
            default: false,
          },
          name: {
            type: "string",
            description:
              "The name of the migration to run (only with migrate-only and single package).",
          },
          verbose: {
            type: "boolean",
            description:
              "Display additional details about internal operations during execution.",
            default: false,
          },
        },
        required: ["packages", "appRoot"],
      },
    },
  ] as const satisfies Tool[];
}
