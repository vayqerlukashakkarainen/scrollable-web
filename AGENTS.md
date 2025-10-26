# Agent Guidelines for scrollable-web

## Commands
- **Dev**: `npm run dev` or `npm start` (opens browser)
- **Build**: `npm run build` (debug mode) or `npm run build-ss` (with sourcemaps)
- **Type check**: `npm run check` (syncs SvelteKit and runs svelte-check)
- **Preview**: `npm run preview`
- **No tests**: Project has no test suite

## Code Style
- **TypeScript**: Strict mode enabled. Use explicit types for function parameters and exports
- **Imports**: Group by external libs, then local modules. Type imports use `import type`
- **Naming**: camelCase for variables/functions, PascalCase for components/types/enums
- **Components**: Svelte files in lowercase (e.g., `navigation.svelte`, `primaryTitle.svelte`)
- **Formatting**: Tabs for indentation, no semicolons, double quotes
- **Types**: Define interfaces/types in `types.ts`, use enums for constants (e.g., `PostType`, `TransitionType`)
- **Error handling**: Minimal - handle edge cases with conditionals, no try-catch unless needed
- **Svelte patterns**: Use `on:event` for custom events, `bind:` for two-way binding, CSS in `<style>` blocks
- **No comments**: Do not add comments unless explicitly requested

## Key Dependencies
- SvelteKit with static adapter, bezier-js, kd-tree-javascript, fast-sort
