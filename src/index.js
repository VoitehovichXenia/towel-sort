module.exports = function towelSort (matrix) {
    let sorted = matrix ? matrix
        .map( (arr, index) => {
          
            if(index === 0 || index % 2 === 0) {
                return arr.sort( (a, b) => a - b);
            } else {
                return arr.sort((a, b) => b - a);
            }
        })
        .reduce( (prev, curr) => prev.concat(curr), []) : [];
        
        return sorted;
}
