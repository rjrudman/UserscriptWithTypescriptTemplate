// tslint:disable-next-line:quotemark
import { DoIt } from "./TestDependancy";

DoIt();

// I can call this function, because we've provided a typing file
// We expect isModerator to be available on the global scope
// Be aware that this is not referencing any code, it's simply providing typings

// If we actually want to reference https://github.com/samliew/SO-mod-userscripts/blob/master/lib/common.js
// Then simply put that as a dependency in UserScriptDeclaration.
const amIAModerator = isModerator();

// I can also use jquery, because we've installed the jquery typings file.
// Again, we expect $ to be available on the global scope
const something = $('#someSelector');

console.log(amIAModerator);
console.log(something);
