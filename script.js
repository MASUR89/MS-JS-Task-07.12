//-------------N1
function random(taskName) {
    const delay = Math.floor(Math.random() * 2000) + 1000; 
    const isResolved = Math.random() > 0.5; 
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isResolved) {
          console.log(`${taskName} resolved after ${delay}ms`);
        } else {
          console.log(`${taskName} rejected after ${delay}ms`);
        }
      }, delay);
    });
  }
  
  random("Task 1")
    .then(result => console.log(result))
    .catch(error => console.log(error));

// -------------N2
function random2(taskName) {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${taskName} resolved after ${delay}ms`);
    }, delay);
  });
}

Promise.all([random2("T1"), random2("T2"), random2("T3")])
  .then(results => {console.log("All tasks resolved:", results)})
  .catch(error => {console.log("One of the tasks failed:", error)});

// -----------N3
function random3(taskName) {
    const delay = Math.floor(Math.random() * 2000) + 1000; 
    return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${taskName} resolved after ${delay}ms`); 
    }, delay);
  })
}

Promise.race([random3("T4"), random3("T5")])
    .then(result => console.log("First resolved task:", result))
    .catch(error => console.log("An error occurred:", error));

// ---------N4
function random4(taskName) {
    const delay = Math.floor(Math.random() * 3000) + 1000; 
    const isResolved = Math.random() > 0.5; 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isResolved) {
                resolve(`${taskName} resolved after ${delay}ms`);
            } else {
                reject(`${taskName} rejected after ${delay}ms`);
            }
        }, delay);
    });
}

const T6 = random4("T6");
const T7 = random4("T7");
const T8 = random4("T8");
const T9 = random4("T9");
const T10 = random4("T10");

Promise.allSettled([T6, T7, T8, T9, T10])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Task ${index + 6}: Success - ${result.value}`);
            } else {
                console.log(`Task ${index + 6}: Failure - ${result.reason}`);
            }
        });
    })
    .catch(error => console.log("An unexpected error occurred:", error));
