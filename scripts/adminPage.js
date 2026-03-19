const test = sessionStorage.getItem("activeUser")
const admin = JSON.parse(test)


function areYouAdmin(){

    if(admin === null){
        console.log('Ej inloggad!')
        return
    }

    if(admin.role === "admin"){
        const adminRolePage = document.querySelectorAll('.nav__item');
        console.log('Du är en admin nu syns orderhistoriken i nav-menyn!')

        adminRolePage.forEach(element => {
            element.classList.remove('d-none');
        });
                
        } 
            
        else {
            console.log("Ej administratör!")
        }
}

areYouAdmin()