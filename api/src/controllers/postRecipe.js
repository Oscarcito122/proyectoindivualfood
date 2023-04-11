const { Diet } = require('../db')
const { Recipe } = require('../db')

const postRecipe = async (title, summary, healthScore, step, score, image, diet) => {
    if (!summary || !title ) throw Error("La propiedad name o summary no tiene valor")

    const result = await Recipe.create({title,
            image,
            summary,
            healthScore,
            step,
            score,
            diet})

    diet.forEach(async (element) => {
            const [d, flag] = await Diet.findOrCreate({
            where: {
                name: element.toLowerCase()
            }
        })
        await result.addDiets(d)
    })
    return result

}
module.exports = postRecipe;