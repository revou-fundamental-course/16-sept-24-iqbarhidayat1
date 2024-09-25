document.getElementById('userform').addEventListener('submit', function(event)
{
 event.preventDefault(); // prevent the form from reloading the page

 // get values from form
const name = document.getElementById('name').value;
const gender = document.getElementById('gender').value;
const message = document.getElementById('message').value;

//display the form results in the result div
document.getElementById('resultName').innerText = name;
document.getElementById('resultGender').innerText = gender;
document.getElementById('resultmessage').innerText = message;

//show the result section
document.getElementById('result').classList.remove('hidden')
}
)