function getUserRole(name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access.`
        
        case "subadmin":
            return `${name} is subadmin access to create and delete courses.`
        
        case "testprep":
            return `${name} is testprep with access to create and delete tests.`
        
        case "user":
            return `${name} is user with access to view content.`
        
        case "admin":
            return `${name} is a trial user.`
            
    
        default:
            break;
    }

}

console.log(getUserRole('gayathri', 'testprep'));