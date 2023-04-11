const { api_key } = process.env
const { Recipe } = require('../db')
const axios = require("axios");

// Este handler trae a las recetas por ID

module.exports = getRecipeId = async (id) => {
    console.log("***************** dentro de getRecipeId : ", id)
    if (typeof id === "number") {

        let { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}`)
        const result = data


        return ({
            id: result.id,
            title: result.title,
            summary: result.summary.replace(/<[^>]+>/g, ''),
            healthScore: result.healthScore,
            image: result.image,
            dishTypes: result.dishTypes,
            diet: result.diets,
            steps: result.analyzedInstructions[0].steps?.map((element, index) => {
                return `${index + 1} : ${element['step']}`
            }).join(' ')
        })

    } else {
        return await Recipe.findByPk(id)
    }

    // throw Error(`No se encontro el ${id} en la API`)
}