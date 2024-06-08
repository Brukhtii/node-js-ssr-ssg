const fs = require('fs');
const getComponentsBlock = require('./components/components').getComponentsBlock;

function createHTMLFile(filename, { componentsQty }) {
    const htmlContent = getComponentsBlock({ componentsQty });

    fs.writeFile(filename, htmlContent, (err) => {
        if (err) throw err;
        console.log('HTML file has been created!');
    });
}

const generateAllHTMLFiles = () => {
    createHTMLFile('./generatedHtml/100.html', { componentsQty: 100 });
    createHTMLFile('./generatedHtml/250.html', { componentsQty: 250 });
    createHTMLFile('./generatedHtml/500.html', { componentsQty: 500 });
    createHTMLFile('./generatedHtml/1000.html', { componentsQty: 1000 });
};

generateAllHTMLFiles();
