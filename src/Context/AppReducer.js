export default (state,action)=>{
    switch (action.type){
        case "REMOVE_USER":
            return {
                users: state.users.filter(user=>{
                    return user.key !== action.payload
                })
            }
        case "ADD_USER":
            localStorage.setItem("state",JSON.stringify([action.payload,...state.users]))
            return {
                users : [action.payload,...state.users],

            }
        case "EDIT_USER":
            const updatedUser = action.payload;
            const updateUsers = state.users.map(user=>{
                if(user.key === updatedUser.key){
                    return updatedUser;
                }
                return user
            })
            return {
                users:updateUsers
            }
        default:
            return state
    }
}