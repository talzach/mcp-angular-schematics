# Angular Schematics MCP Server 🅰️

A Model Context Protocol server that provides Angular CLI schematics and workspace automation capabilities. This server enables LLMs and agents to interact with Angular projects, generate components/services, add packages, create new workspaces, and run custom architect targets via the Angular CLI.

## Features

- Run `ng generate` to scaffold Angular artifacts (components, services, etc.)
- Run `ng add` to add packages to your Angular workspace
- Run `ng new` to create new Angular workspaces
- Run `ng run` to execute custom architect targets
- All via the Model Context Protocol (MCP) for agent/LLM integration

## Installation

You can install the package globally using npm:

```bash
npm install -g @talzach/mcp-angular-schematics
```

Or use it locally in your project:

```bash
npm install --save-dev @talzach/mcp-angular-schematics
```

## Usage

You can run the server directly:

```bash
npx @talzach/mcp-angular-schematics
```

Or, if you want to use it as a custom MCP server in your agent or tool, configure it like this:

### Example MCP Configuration

```json
{
  "mcpServers": {
    "angular-schematics": {
      "command": "npx",
      "args": ["-y", "@talzach/mcp-angular-schematics"]
    }
  }
}
```

## Example Tool Usage

- **Generate a component:**
  ```json
  {
    "schematic": "component",
    "name": "my-component",
    "projectRoot": "/absolute/path/to/your/angular/project"
  }
  ```
- **Add a package:**
  ```json
  {
    "package": "@angular/material",
    "projectRoot": "/absolute/path/to/your/angular/project"
  }
  ```
- **Create a new workspace:**
  ```json
  {
    "name": "my-workspace",
    "directory": "/absolute/path/to/where/you/want/it"
  }
  ```
- **Run a custom architect target:**
  ```json
  {
    "target": "app:build:production",
    "projectRoot": "/absolute/path/to/your/angular/project"
  }
  ```

---

**Star this repo if you find it useful!**
