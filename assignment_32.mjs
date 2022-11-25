/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */



const current_users = ['Dhoni','Akmal','Afridi','Warner','Inzimam','Tendulkar','dummy'];


const new_users = ['Dhoni','Babbar','Kohli','Williamson','Afridi','Akmal','Zamaan','tendulkar','deveilliers','Imran Khan','Wasim Akram','Inzimam'];


const check_users = ()=>{
    let emp;
new_users.forEach(element=>{
    emp = true;
    current_users.forEach((subElement,subIndex)=>{
        if(subElement.toUpperCase() == element.toUpperCase()){
            console.log(`This ${subElement} username, has already been used`);
            emp = false;
        }

        else if(subIndex == current_users.length-1 && emp == true){
            console.log(`This ${element} username, is available`);
        }
    });
})

console.log('\n');

}


check_users();


const checked_users = ()=>{
    const valid_users = new_users.slice(0,new_users.length);
    
    let chElement = new_users[0];
    new_users.forEach(element=>{
        current_users.forEach(subElement=>{
            if(subElement.toUpperCase() == element.toUpperCase()){
                console.log(`This ${subElement} has already been used`);
                valid_users.splice(valid_users.indexOf(element),1);   
            }
        });
    })
    
    console.log('\n');
    
    valid_users.forEach(data=>{
        console.log(`This ${data}, is available`)
    })
    
    }

    // checked_users()