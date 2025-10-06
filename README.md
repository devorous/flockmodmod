# Flockmod app compiled with Tauri

Based on the offline version of Flockmod, this updated Flockmod app can run any modified files automatically without the use of overrides.
I have embedded the HTML files normally served from flockmod's servers directly into flockmod.js in an object called EmbeddedHTML.
Other files (js, css, images,forms, sounds, etc) are served locally as well and can be found in the /src folder.
The only outgoing connection is to the Flockmod websocket server which seems to work perfectly fine.


Tauri leverages the builtin Webview2 (edge) browser on Windows which allows for a small executable size as well as great performance.
If you wish to build it yourself, you'll need to ensure you have rust and Node.js installed locally.
After you clone the project and modify anything, you can just run "npm install" and "npm run tauri build" to build the .exe/installer.
