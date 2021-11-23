var Arr=["ai","ello","welcome","ok"]

const etfruits=() =>{
    setTimeout(()=>{
        for(var i=0;i<Arr.length;i++)
    console.log(Arr[i])
    },2500)
    
    }
const postfruits =(fruits,callback) =>{
    setTimeout(()=>{
        Arr.push(fruits)
        callback()
    },2000)
}


postfruits("okok",etfruits)