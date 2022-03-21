//add to Local storage to database data;
const addDb = (id) => {
    const quantity = localStorage.getItem(id)
    if(quantity){
        console.log('already exist')
        const newQunatity = +quantity + 1;
        localStorage.setItem(id,newQunatity)
    }
    else{
        localStorage.setItem(id,1)
    } 
}
export {addDb}