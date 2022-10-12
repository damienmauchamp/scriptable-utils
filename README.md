# scriptable-utils

Import a module with [this script](https://gist.github.com/damienmauchamp/475ca53df1a3d75b0200314ac161ff96).

Then import a module from URL like this :

```javascript
const moduleHelper = importModule('moduleImport');

// creates directory "modules" and file "modules/draw.js"
const moduleDraw = await moduleHelper.importFormUrlWithFolder('modules', 'draw', 'https://raw.githubusercontent.com/damienmauchamp/scriptable-utils/main/draw.js');
```
