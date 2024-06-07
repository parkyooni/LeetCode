/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function(functions) {
    return new Promise((resolve,reject) => {
      const results = new Array(functions.length);
      let count = 0;

      functions.forEach((fn,i) => {
        fn()
            .then(res => {
                results[i] = res;
                count++;

                if(count === functions.length) resolve(results);
            })
            .catch (error => reject(error));
        })
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */