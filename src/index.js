/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    //кол-во любовных треугольников
    var loveTriangeCount = 0;
    //чтобы постоянно не вычитать 1 из значения элемента массива - сделаем это сразу для всех элементов preferences
    for (var i = 0; i<preferences.length; i++) {
        preferences[i]--;
    }
    
    for (var i = 0; i < preferences.length; i++) {
        
        var x,y,z = 0;
        x = preferences[i];
        y = preferences[x];
        z = preferences[y];
        if ((x=>0)&&(y>=0)&&(z>=0)) {
            if ((x!=y)&&(x!=z)&&(y!=z)) {
                if (z == i) {
                    loveTriangeCount++;
                }
            }
        }
    }
    
    return loveTriangeCount/3;
  // your implementation
};
//for (var i =)
     
  //   if (preferences[i]<preferences[].length && (preferences[preferences[i]]<preferences[].length))
