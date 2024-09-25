document.addEventListener('DOMcontentLoaded', function () {
 const form = document.getElementById('userform');
 const resultdiv = document.getElementById('result');

 form.addEventListener('submit', function(event) { 
     event.preventDefault(); // Menghentikan pengirim form default
 
 const name = document.getElementById('name').Value;
 const dob = document.getElementById('dob').Value;
 const addres = document.getElementById('addres').Value;
 const phone = document.getElementById('phone').Value;
 const message = document.getElementById('message').Value;
});

})

