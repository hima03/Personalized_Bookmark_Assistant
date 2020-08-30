function myAlert(){
    alert('Added to <floder name> successfully');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alertButton').addEventListener('click', myAlert);
});