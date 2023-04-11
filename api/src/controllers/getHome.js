const { Recipe } = require("../db");
const { api_key } = process.env
const axios = require("axios");


const getHome = async () => {
    let aux = await Recipe.findAll()

    let { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&addRecipeInformation=true&number=100`)
    const { results } = data
    let obj = [];
    if (results.length) {
        obj = results.map((element) => {
            return {
                id: element.id,
                title: element.title,
                healthScore: element.healthScore,
                summary: element.summary.replace(/<[^>]+>/g, ''),
                image: element.image,
                diet: element.diets? element.diets: "steps not found"
            }
        })
    }
    return [...aux, ...obj];
}


module.exports = getHome;