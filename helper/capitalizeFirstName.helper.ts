function capitalizeFirstName (fullName:String){
    const result = fullName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    return result
}
export{
    capitalizeFirstName
}