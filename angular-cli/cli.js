const fs = require('fs');
const path = require('path');

// console.log(...process.argv.slice(2));

if (process.argv.length < 3) {
    console.log('You should specify command! Type `help` to show list of commands');
    process.exit();
}

const command = process.argv[2];

if (command === 'generate') {
    const componentName = process.argv[3];

    if (process.argv.length < 4) {
        console.log('You should specify component name!');
        process.exit();
    }
    
    fs.readFile(path.join(__dirname, './angular.json'), { encoding: 'utf-8' }, (err, data) => {
        const jsonData = JSON.parse(data);
        const prefix = jsonData ? jsonData.prefix : 'default';

        const componentCode = `@Component({
    selector: '${prefix}-${componentName}',
    templateUrl: './${componentName}.component.html',
})
export class MyComponent {}
`;
        
            fs.mkdir(path.join(__dirname, componentName), () => {
                fs.writeFile(path.join(__dirname, `./${componentName}/${componentName}.component.ts`), componentCode, () => {});
                fs.writeFile(path.join(__dirname, `./${componentName}/${componentName}.component.html`), '', () => {});
            });
    })


}
