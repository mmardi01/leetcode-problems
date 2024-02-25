type Fn<T> = () => Promise<T>


function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    let res : any[] = [];
    let j = 0;
    return new Promise(async (resolve, rej) => {
       for(let i = 0; i < functions.length; i++) {
            functions[i]().then(r => {
                res[i] = r;
                j++;
                if (j === functions.length)
                    resolve(res);
            }).catch(e => {
                rej(e);
            })
                
       }
    })
    
};

let functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

async function f() {
    const res = await promiseAll(functions);
    console.log(res);
}

f();