import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { spawn } from "child_process";

export async function handleToolCall(
  name: string,
  args: any,
  server: any
): Promise<CallToolResult> {
  try {
    let command = "";
    let commandArgs: string[] = [];
    let cwd = args.projectRoot || process.cwd();

    switch (name) {
      case "ng_generate": {
        command = "npx";
        commandArgs = ["ng", "generate", args.schematic, args.name];
        if (args.path) {
          commandArgs.push("--path", args.path);
        }
        if (args.options) {
          for (const [key, value] of Object.entries(args.options)) {
            commandArgs.push(`--${key}`, String(value));
          }
        }
        break;
      }
      case "ng_add": {
        command = "npx";
        commandArgs = ["ng", "add", args.package];
        if (args.options) {
          for (const [key, value] of Object.entries(args.options)) {
            commandArgs.push(`--${key}`, String(value));
          }
        }
        break;
      }
      case "ng_new": {
        command = "npx";
        commandArgs = ["ng", "new", args.name];
        if (args.directory) {
          cwd = args.directory;
        }
        if (args.options) {
          for (const [key, value] of Object.entries(args.options)) {
            commandArgs.push(`--${key}`, String(value));
          }
        }
        break;
      }
      case "ng_run": {
        command = "npx";
        commandArgs = ["ng", "run", args.target];
        if (args.options) {
          for (const [key, value] of Object.entries(args.options)) {
            commandArgs.push(`--${key}`, String(value));
          }
        }
        break;
      }
      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }

    const output = await runCommand(command, commandArgs, cwd);
    return {
      content: [{ type: "text", text: output }],
      isError: false,
    };
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: error instanceof Error ? error.message : String(error),
        },
      ],
      isError: true,
    };
  }
}

function runCommand(
  command: string,
  args: string[],
  cwd: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, { cwd, shell: true });
    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (data) => {
      stdout += data.toString();
    });
    proc.stderr.on("data", (data) => {
      stderr += data.toString();
    });
    proc.on("close", (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(stderr || `Process exited with code ${code}`);
      }
    });
    proc.on("error", (err) => {
      reject(err);
    });
  });
}
