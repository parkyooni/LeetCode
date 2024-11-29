/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
  while(stones.length > 1){
    stones.sort((a,b)=>b-a);
    
    let stone1 = stones.shift();
    let stone2 = stones.shift();

    if(stone1 !== stone2){
      stones.push(Math.abs(stone2 - stone1));
    }
  }
  
  return stones.length === 1? stones[0]: 0;
};