var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, obj, { [key]: value })

}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object,key) { 
    delete object[key];
    return Object.assign({},object,{});
    
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object) 
  delete object[key]
  return Object
}



function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key]
return object
}
