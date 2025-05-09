# Angular CLI MCP Server 🅰️

A Model Context Protocol server that provides Angular CLI and workspace automation capabilities. This server enables LLMs and agents to interact with Angular projects, generate components/services, add packages, create new workspaces, and run custom architect targets via the Angular CLI.

## Features

- Run `ng generate` to scaffold Angular artifacts (components, services, etc.)
- Run `ng add` to add packages to your Angular workspace
- Run `ng new` to create new Angular workspaces
- Run `ng run` to execute custom architect targets
- Run `ng update` to update Angular packages and dependencies

- All via the Model Context Protocol (MCP) for agent/LLM integration

## Installation

You can install the package globally using npm:

```bash
npm install -g @talzach/mcp-angular-cli
```

Or use it locally in your project:

```bash
npm install --save-dev @talzach/mcp-angular-cli
```

## Usage

You can run the server directly:

```bash
npx @talzach/mcp-angular-cli
```

Or, if you want to use it as a custom MCP server in your agent or tool, configure it like this:

### Example MCP Configuration

```json
{
  "mcpServers": {
    "angular-cli": {
      "command": "npx",
      "args": ["-y", "@talzach/mcp-angular-cli"]
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
    "appRoot": "/absolute/path/to/your/angular/project"
  }
  ```
- **Add a package:**
  ```json
  {
    "package": "@angular/material",
    "appRoot": "/absolute/path/to/your/angular/project"
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
    "appRoot": "/absolute/path/to/your/angular/project"
  }
  ```

---

**Star this repo if you find it useful!**

## Publishing to npm

To publish a new version of this package to npm, run:

```bash
npm run publish-npm
```

This will automatically build the project and publish it as a public package.

## Develop

If you want to test or develop this server locally, you need to point your MCP server configuration to your local build output. After building the project (e.g., with `npm run build`), set your MCP server file (e.g., `.mcp.json` or similar) to use the local `dist/index.js` file:

```json
{
  "angular-cli": {
    "command": "node",
    "args": ["/path/to/your/mcp-angular-cli/dist/index.js"]
  }
}
```
