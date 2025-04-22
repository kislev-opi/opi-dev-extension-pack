#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// Load .env file if exists
const dotEnvPath = path.join(__dirname, ".env");
const envVars = {};
if (fs.existsSync(dotEnvPath)) {
  const envContent = fs.readFileSync(dotEnvPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  });
}

// Parse command line arguments
const args = process.argv.slice(2);
const buildVSCode = !args.includes("--cursor-only");
const buildCursor = !args.includes("--vscode-only");

// Show help if requested
if (args.includes("--help") || args.includes("-h")) {
  console.log(`
Build Script Options:
  --vscode-only     Build only the VS Code extension
  --cursor-only     Build only the Cursor extension
  --help, -h        Show this help message
  
Environment variables (can be set in .env file):
  VSCODE_VERSION    VS Code version (default: 1.99.3)
  CURSOR_VERSION    Cursor version (default: 1.99.2)
  `);
  process.exit(0);
}

// Path to package.json
const packageJsonPath = path.join(__dirname, "package.json");

// Read the original package.json
const originalPackageJson = fs.readFileSync(packageJsonPath, "utf8");
const packageData = JSON.parse(originalPackageJson);

// Versions to build
const versions = [];

// Add VS Code version if needed
if (buildVSCode) {
  const vscodeVersion = envVars.VSCODE_VERSION || "1.99.3";
  versions.push({
    version: vscodeVersion,
    fileName: `opi-dev-extension-pack-vscode-${vscodeVersion}.vsix`,
    type: "VS Code",
  });
}

// Add Cursor version if needed
if (buildCursor) {
  const cursorVersion = envVars.CURSOR_VERSION || "1.99.2";
  versions.push({
    version: cursorVersion,
    fileName: `opi-dev-extension-pack-cursor-${cursorVersion}.vsix`,
    type: "Cursor",
  });
}

// Function to restore the original package.json
function restoreOriginal() {
  console.log("Restoring original package.json...");
  fs.writeFileSync(packageJsonPath, originalPackageJson);
}

// Make sure to restore the original package.json even if the script crashes
process.on("uncaughtException", (err) => {
  console.error("An error occurred:", err);
  restoreOriginal();
  process.exit(1);
});

// Build for each version
try {
  if (versions.length === 0) {
    console.log("No versions specified to build. Use --help for options.");
    process.exit(0);
  }

  versions.forEach(({ version, fileName, type }) => {
    console.log(`Building extension for ${type} version ${version}...`);

    // Update package.json with the current version
    packageData.engines.vscode = `>=${version}`;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2));

    // Build the extension
    console.log(`Running vsce package as ${fileName}...`);
    // Execute vsce from the directory containing package.json
    execSync(`npx vsce package -o ${fileName}`, { cwd: __dirname });

    console.log(`Successfully built ${fileName}\n`);
  });

  // Restore the original package.json at the end
  restoreOriginal();

  console.log("All builds completed successfully!");
} catch (error) {
  console.error("Error during build:", error);
  restoreOriginal();
  process.exit(1);
}
