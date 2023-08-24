window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiURL = 'https://getresumecounter-lbc.azurewebsites.net/api/getresumecounter?code=0V9VN0NULmc5cnLMPwaiVxl97WcWJQpcqqNc4oPEpo1vAzFug1VRYQ%3D%3D'
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}