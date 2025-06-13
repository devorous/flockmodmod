# Flockmod app with Tauri + Vue + TypeScript

This version uses [Tauri](https://tauri.app) to wrap Flockmod in a minimal native shell.
You can open the devtools and implement overrides simply by pressing **F12**.
These overrides do not work automatically, you must open the devtools then refresh the page (ctrl+r) for them to take effect.
Tauri leverages the builtin Webview2 browser on Windows which allows for a very small executable size as well as great performance.
I also ended up using upx to compress the executable to an even smaller size (from 10mb to 3.6mb).

If you wish to build it yourself, you'll need to ensure you have rust and Node.js installed locally.

I am unsure if all Windows computers come packaged with the Webview2 runtime, so if you have any issues you can install it from here:
https://developer.microsoft.com/en-us/microsoft-edge/webview2


## Default readme junk
This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
