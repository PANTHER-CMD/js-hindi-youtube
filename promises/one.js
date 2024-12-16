//promises is a object 

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){console.log('async task is completed')
        resolve();
    },1000)

})

promiseOne.then(function(){
    console.log("promises consumed");
    
})


const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username:"Hitesh",domain:"hitesh.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
          resolve({username:"Ved",location:"bhopal"})
        }else{
            resolve("ERROR:something went wrong")
        }
    },1000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username;    
})
.then((username)=>{
  console.log(username);
})
.catch(function (error) {
console.log(error);
})

const promiseFive = new Promise(function (resolve,reject){
    setTimeout(function () {
        let error = false;
        if (!error) {
          resolve({username:"javascript",server:"bhopal"})
        }else{
            resolve("ERROR:something went wrong")
        }
    },1000)
} 
    )

    async function consumepromiseFive() {
        try {
            const response = await promiseFive;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    consumepromiseFive();