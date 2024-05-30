const recipes = {
    alfajores: {
        title: "Alfajores de Maicena",
        ingredients: [
            "200g de mantequilla",
            "150g de azúcar",
            "3 yemas de huevo",
            "1 cucharadita de esencia de vainilla",
            "300g de maicena",
            "200g de harina",
            "1 cucharadita de polvo de hornear",
            "Ralladura de un limón",
            "Dulce de leche para el relleno",
            "Coco rallado para decorar"
        ],
        instructions: [
            "Precalentar el horno a 180°C.",
            "Batir la mantequilla con el azúcar hasta obtener una mezcla cremosa.",
            "Agregar las yemas de huevo y la esencia de vainilla, y mezclar bien.",
            "Tamizar la maicena, la harina y el polvo de hornear, e incorporar a la mezcla anterior.",
            "Agregar la ralladura de limón y mezclar hasta formar una masa homogénea.",
            "Estirar la masa y cortar medallones con un cortapastas.",
            "Colocar en una bandeja para horno y hornear durante 10-12 minutos.",
            "Dejar enfriar, rellenar con dulce de leche y unir de a dos.",
            "Pasar los bordes por coco rallado."
        ]
    },
    bizcochuelo: {
        title: "Bizcochuelo",
        ingredients: [
            "4 huevos",
            "200g de azúcar",
            "200g de harina",
            "1 cucharadita de esencia de vainilla",
            "1 cucharadita de polvo de hornear"
        ],
        instructions: [
            "Precalentar el horno a 180°C.",
            "Batir los huevos con el azúcar hasta que la mezcla triplique su volumen.",
            "Añadir la esencia de vainilla y mezclar.",
            "Tamizar la harina con el polvo de hornear e incorporar de manera envolvente.",
            "Verter en un molde enmantecado y enharinado.",
            "Hornear durante 30-35 minutos o hasta que al insertar un palillo, éste salga limpio.",
            "Dejar enfriar antes de desmoldar."
        ]
    },
    facturas: {
        title: "Facturas",
        ingredients: [
            "500g de harina",
            "50g de azúcar",
            "10g de sal",
            "25g de levadura fresca",
            "250ml de leche tibia",
            "50g de mantequilla",
            "2 huevos"
        ],
        instructions: [
            "Disolver la levadura en la leche tibia con una cucharadita de azúcar y dejar reposar hasta que espume.",
            "Mezclar la harina con el azúcar y la sal.",
            "Agregar la levadura, los huevos y la mantequilla derretida, y amasar hasta obtener una masa suave.",
            "Dejar reposar en un lugar cálido hasta que doble su tamaño.",
            "Estirar la masa y cortar triángulos para hacer medialunas o formar las facturas deseadas.",
            "Colocar en una bandeja y dejar reposar nuevamente.",
            "Precalentar el horno a 180°C y hornear hasta que estén doradas."
        ]
    }
};

function showRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    const recipeContent = document.getElementById('recipe-content');
    recipeContent.innerHTML = `
        <h3>${recipe.title}</h3>
        <h4 class="ingredients-title">Ingredientes:</h4>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h4>Instrucciones:</h4>
        <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
    `;
    document.getElementById('recipes-list').classList.add('hidden');
    document.getElementById('recipe-details').classList.remove('hidden');
}

function hideRecipe() {
    document.getElementById('recipes-list').classList.remove('hidden');
    document.getElementById('recipe-details').classList.add('hidden');
}
