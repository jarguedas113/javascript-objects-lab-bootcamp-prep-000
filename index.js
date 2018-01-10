var recipes = {};
var recipes = { prop: '1'}

function updateObjectWithKeyAndValue(recipes, ingridientName, ingridientDiscrip) {
  return Object.assign({}, recipes, { [ingridientName]: ingridientDiscrip});
}

updateObjectWithKeyAndValue(recipes, "prop", "2");


function destructivelyUpdateObjectWithKeyAndValue(recipes, ingridientName, ingridientDiscrip) {
  delete recipes[ingridientName];
  return recipes;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "prop");

