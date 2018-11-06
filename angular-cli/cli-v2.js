const fs = require('fs');
const path = require('path');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

// console.log(...process.argv.slice(2));

async function executeCli() {
    if (process.argv.length < 3) {
        console.log('You should specify command! Type `help` to show list of commands');
        process.exit();
    }
    
    const command = process.argv[2];
    
    if (command === 'generate') {
        return generateComponent();
    }
}

async function generateComponent() {    
    if (process.argv.length < 4) {
        console.log('You should specify component name!');
        process.exit();
    }

    const componentName = process.argv[3];
    
    const componentDir = path.join(__dirname, componentName);
    await mkdirAsync(componentDir);

    const componentTsFilePath = path.join(componentDir, './${componentName}.component.ts');
    const componentHtmlFilePath = path.join(componentDir, './${componentName}.component.html');
    const componentCode = await createComponentCode(prefix);

    await Promise.all([
        writeFileAsync(componentTsFilePath, componentCode),
        writeFileAsync(componentHtmlFilePath, '')
    ]);
}

async function createComponentCode(componentName) {
    const angularJsonPath = path.join(__dirname, './angular.json');

    let angularJson;
    try {
        angularJson = await readFileAsync(angularJsonPath, { encoding: 'utf-8' });
    } catch (err) {
        console.log('You need angular.json file!!!!1111');
    }

    const angularJsonParsed = JSON.parse(angularJson);
    const prefix = angularJsonParsed ? angularJsonParsed.prefix : 'default';

    return `@Component({
    selector: '${prefix}-${componentName}',
    templateUrl: './${componentName}.component.html',
})
export class MyComponent {}
`;
}

executeCli();
