//NAVIGATION FUNCTION
let smallNavItems = document.querySelector('.mobile-items');
let NavBtn = document.querySelector('.hamburger-btn');

NavBtn.addEventListener('click', ()=>{
    smallNavItems.classList.add('d-mobile-items');
})

NavBtn.addEventListener('dblclick', ()=>{
    smallNavItems.classList.remove('d-mobile-items');
})

// CAROSUEL FUNCTION
let carosuel_boxes = document.querySelectorAll('.projects-wrapper');
let prev_btn = document.querySelector('#left');
let nxt_btn = document.querySelector('#right');

carosuel_boxes.forEach((box) =>{
    let carosuelSquare = box.getBoundingClientRect();
    let box_width = carosuelSquare.width;

    nxt_btn.addEventListener('click', ()=>{
        box.scrollLeft += box_width;
        console.log('right btn clicked')
    })

    prev_btn.addEventListener('click', ()=>{
        box.scrollLeft -= box_width;
        console.log('left btn clicked')
    })
})

// CONTACT FORM FUNCTION
let user_name = document.getElementById('name');
let user_email = document.getElementById('email');
let user_message = document.getElementById('message');
let form_container = document.querySelector('.contact-form');

sendMail = () =>{
    let paramz = {
        sender_name: user_name.value,
        sender_email: user_email.value,
        message: message.value,
    }

    const serviceID = "service_7pc81zc";
    const TemplateID = "template_15grgkg";

    emailjs.send(serviceID, TemplateID, paramz)
    .then((response)=>{
        user_name.value = "";
        user_email.value = "";
        message.value = "";
        console.log(response);
        alert('Your email was successfully sent')
    }).catch((err)=>console.log(err));
}

form_container.addEventListener('submit', (e)=>{
    e.preventDefault();

    sendMail();
})