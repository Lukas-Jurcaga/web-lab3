const getCatalogue = (request, response) => {
    const catalogServices = require('../services/productServices');
    catalogServices.searchService(function (err, rows) {
        response.render('catalogue', {products: rows})
    });
};

const getProductByID = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.url.slice(13);
    console.log(reference.length)
    if (reference.length <= 6) {
        catalogServices.searchIDService(reference, function (err, rows) {
            response.render('article', {article: rows})
        });
    } else {
        console.log(reference)
        let fileExt = reference.slice(4)
        console.log(fileExt)
        response.sendFile(`C:\\Users\\ljurc\\WebstormProjects\\web-lab3\\public\\hwu.${fileExt}`)
    }
};

const getProductsByCategory = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.params.category;
    catalogServices.searchCategoryService(category, function (err, rows) {
        response.json(rows);
        response.end();
    });
};

module.exports = {
    getCatalogue,
    getProductByID,
    getProductsByCategory
};