/*Check output in console of the browser*/

function age_req(r_age)
{
    return function(age)
    {
        return age >= r_age;
    };
};

let can_Vote = age_req(18);
console.log(can_Vote(27));
let can_Drive = age_req(16);
console.log(can_Drive(27));
let can_Marry = age_req(21);
console.log(can_Marry(27));

console.log(age_req(18)(27));
console.log(age_req(16)(27));
console.log(age_req(21)(27));