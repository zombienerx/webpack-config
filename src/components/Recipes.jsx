import {useState} from "react";
const nerkoRecipe =  {
  letherStripe: 2,
  ironIngot: 1,
  refineMoonstone: 4
};

const nerkoletsRecipe = {
  ...nerkoRecipe,
  leather: 1,
  refineMoonstone: 4,
};

console.log(nerkoRecipe);
console.log(nerkoletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(nerkoRecipe)}>
        Nerko Recipe
      </button>
      <button onClick={() => setRecipe(nerkoletsRecipe)}>
        Nerko Let Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;