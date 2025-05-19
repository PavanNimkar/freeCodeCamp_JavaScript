const allCreaturesURL =
  "https://rpg-creature-api.freecodecamp.rocks/api/creatures";

const creatureURL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");
const creatureName = document.querySelector("#creature-name");
const creatureId = document.querySelector("#creature-id");
const creatureWeight = document.querySelector("#weight");
const creatureHeight = document.querySelector("#height");
const creatureTypes = document.querySelector("#types");
const creatureHp = document.querySelector("#hp");
const creatureAttack = document.querySelector("#attack");
const creatureDefense = document.querySelector("#defense");
const creatureSpecialAttack = document.querySelector("#special-attack");
const creatureSpecialDefense = document.querySelector("#special-defense");
const creatureSpeed = document.querySelector("#speed");

const fetchAllCreatures = async () => {
  try {
    const res = await fetch(allCreaturesURL);
    const data = await res.json();
    checkInput(data);
  } catch (err) {
    console.error(err);
  }
};

const checkInput = (data) => {
  const creatureDataId = data.map((item) => {
    const { id } = item;
    return id;
  });
  const creatureDataName = data.map((item) => {
    const { name } = item;
    return name;
  });

  if (creatureDataId.includes(parseInt(searchInput.value))) {
    displayCreature(searchInput.value);
  } else if (
    creatureDataName.some((creature) =>
      creature.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  ) {
    displayCreature(searchInput.value.toLowerCase());
  } else {
    alert("Creature not found");
  }
};

const displayCreature = async (nameOrId) => {
  const data = await getCreatureData(nameOrId);
  const { height, weight, id, name, special, stats, types } = data;
  console.log(data);
  // {
  //   const { description, name } = special;
  // }

  const statsbase_stat = stats.map((stat) => {
    const { base_stat } = stat;
    return base_stat;
  });

  const typesArray = types.map((type) => {
    const { name } = type;
    return name;
  });

  creatureName.innerText = `${name}`;
  creatureId.innerText = `${id}`;
  creatureWeight.innerText = `${weight}`;
  creatureHeight.innerText = `${height}`;
  typesArray.forEach((type) => {
    creatureTypes.innerHTML += `<span>${type} </span>`;
  });

  creatureHp.innerText = `${statsbase_stat[0]}`;
  creatureAttack.innerText = `${statsbase_stat[1]}`;
  creatureDefense.innerText = `${statsbase_stat[2]}`;
  creatureSpecialAttack.innerText = `${statsbase_stat[3]}`;
  creatureSpecialDefense.innerText = `${statsbase_stat[4]}`;
  creatureSpeed.innerText = `${statsbase_stat[5]}`;

  console.log(statsbase_stat);
};

const getCreatureData = async (nameOrId) => {
  const res = await fetch(`${creatureURL}${nameOrId}`);
  const data = await res.json();
  return data;
};

searchBtn.addEventListener("click", () => {
  creatureTypes.innerHTML = "";
  fetchAllCreatures();
});
