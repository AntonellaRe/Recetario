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
        instructions: `
            1. Precalentar el horno a 180°C.
            2. Batir la mantequilla con el azúcar hasta obtener una mezcla cremosa.
            3. Agregar las yemas de huevo y la esencia de vainilla, y mezclar bien.
            4. Tamizar la maicena, la harina y el polvo de hornear, e incorporar a la mezcla anterior.
            5. Agregar la ralladura de limón y mezclar hasta formar una masa homogénea.
            6. Estirar la masa y cortar medallones con un cortapastas.
            7. Colocar en una bandeja para horno y hornear durante 10-12 minutos.
            8. Dejar enfriar, rellenar con dulce de leche y unir de a dos.
            9. Pasar los bordes por coco rallado.
        `
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
        instructions: `
            1. Precalentar el horno a 180°C.
            2. Batir los huevos con el azúcar hasta que la mezcla triplique su volumen.
            3. Añadir la esencia de vainilla y mezclar.
            4. Tamizar la harina con el polvo de hornear e incorporar de manera envolvente.
            5. Verter en un molde enmantecado y enharinado.
            6. Hornear durante 30-35 minutos o hasta que al insertar un palillo, éste salga limpio.
            7. Dejar enfriar antes de desmoldar.
        `
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
        instructions: `
            1. Disolver la levadura en la leche tibia con una cucharadita de azúcar y dejar reposar hasta que espume.
            2. Mezclar la harina con el azúcar y la sal.
            3. Agregar la levadura, los huevos y la mantequilla derretida, y amasar hasta obtener una masa suave.
            4. Dejar reposar en un lugar cálido hasta que doble su tamaño.
            5. Estirar la masa y cortar triángulos para hacer medialunas o formar las facturas deseadas.
            6. Colocar en una bandeja y dejar reposar nuevamente.
            7. Precalentar el horno a 180°C y hornear hasta que estén doradas.
        `
    }
};

function showRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    const recipeContent = document.getElementById('recipe-content');
    recipeContent.innerHTML = `
        <h3>${recipe.title}</h3>
        <h4>Ingredientes:</h4>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h4>Instrucciones:</h4>
        <p>${recipe.instructions}</p>
    `;
    document.getElementById('recipes-list').classList.add('hidden');
    document.getElementById('recipe-details').classList.remove('hidden');
}

function hideRecipe() {
    document.getElementById('recipes-list').classList.remove('hidden');
    document.getElementById('recipe-details').classList.add('hidden');
}
