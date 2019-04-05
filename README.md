# UserscriptWithTypescriptTemplate
A template to build userscripts using typescript and npm.

## How do I get started?

Simply run the following:

### Dependencies

`npm install -g concat-cli`  
`npm install -g typescript`  
`npm install -g @types`  

### Build

`npm install`  
`typings install`  
`npm run build`   

And you'll have the distributable files found at `/dist/DemoScript.min.user.js` and `/dist/DemoScript.user.js`.

### Test

`npm run build`

## How do I rename the script?

This setup requires a point of entry. By default, it's at `src/DemoScript.ts`. 
If you want to change the name of the source file, you'll you'll need to modify `webpack.config.js`. 
Simply change: `entry: "./src/DemoScript.ts",` to be `entry: "./src/YOUR-ENTRY-SCRIPT-HERE.ts",`

If you want to change the name of your distribution file, you'll need to modify `package.json`.

Find the script:

`"build": "tslint src/**/*.ts{,x} && webpack && concat-cli -f src/UserScriptDeclaration.js dist/out.js -o dist/DemoScript.user.js && concat-cli -f src/UserScriptDeclaration.js dist/out.min.js -o dist/DemoScript.min.user.js",`

Search & Replace 'DemoScript' with the name of your script.

## How do I edit the userscript meta data? 

Simply modify `/src/UserScriptDeclaration.js`. It'll be concatenated to the start of the distributable files verbatim. Note that you *must* require require.js in the header if you're using modules.