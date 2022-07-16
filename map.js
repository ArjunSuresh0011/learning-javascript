// creating map

let map = new Map()

//adding key and values to map

map.set('name','vyas')
map.set('Roll Number',21)
map.set({"favarite language" :'js',
            "favorite technology":"python"})

for(let [key,value] of map){
    console.log(key," : ",value);
}

console.log("\n===================================================================================\n");
// printing key and values using forEach  loop

map.forEach((value,key) => console.log(key, " : ", value))