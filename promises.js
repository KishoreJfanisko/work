var Arr=["ai","ello","welcome","ok"]

const etfruits=() =>{
    setTimeout(()=>{
        for(var i=0;i<Arr.length;i++)
    console.log(Arr[i])
    },2500)
}
const postfruits= (fruits) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Arr.push(fruits)
            let err=false
            if(!err)
            {
                resolve();
            }
            else
            {
                reject("somthing went wrong");
            }
        },2000)
    })
    
}
const init= async() =>{
    try 
    {
        postfruits("kiwi");
        etfruits();
    }
    catch(err)
    {
        console.log(err)
    }
}
init();