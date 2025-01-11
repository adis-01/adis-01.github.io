var typed = new Typed('.developments', {
    strings: ['Web', 'Mobile'],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


const aboutLabel = document.getElementById('about');
const skillsLabel = document.getElementById('skills');
const projectsLabeL = document.getElementById('projects');
const contactLabel = document.getElementById('contact');

const button = document.querySelector(".cvBtn");
const mailBtn = document.querySelector(".sendBtn");


function DownloadCV() {
    var curriculum_vitae = './AdisSipkovicResume.pdf';
    var a_tag = document.createElement('a');
    a_tag.href = curriculum_vitae;
    a_tag.download = 'adis_cv.pdf';
    document.body.appendChild(a_tag);
    a_tag.click();
    document.body.removeChild(a_tag);
}

function validateFields(){
    const name = document.querySelector(".nameSurname").value.trim();
    const email = document.querySelector(".email").value.trim();
    const message = document.querySelector("#inputContent").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (name === "") {
        isValid = false;
        errorMessage += "Name field cannot be empty.\n";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        isValid = false;
        errorMessage += "Name should only contain letters and spaces.\n";
    }

    if (email === "") {
        isValid = false;
        errorMessage += "Email field cannot be empty.\n";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        isValid = false;
        errorMessage += "Enter a valid email address.\n";
    }

    if (message === "") {
        isValid = false;
        errorMessage += "Message field cannot be empty.\n";
    } else if (message.length < 10) {
        isValid = false;
        errorMessage += "Message should be at least 10 characters long.\n";
    }

    if (!isValid) {
        alert(errorMessage);
        return false;
    }
    
    return true;
}   

function sendMail() {
    if(!validateFields()){
        return;
    }
    
    const SERVICE_ID = 'service_tycoevq';
    const TEMPLATE_ID = 'template_8uo84pt';


    const params={
        from_name:document.querySelector('.nameSurname').value,
        from_mail:document.querySelector('.email').value,
        message:document.getElementById('inputContent').value
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
    .then(() => {
      alert('Email sent successfully!');    
    })
    .catch((error) => {
      alert('Failed to send email: ' + JSON.stringify(error));
    });
}


//scroll to divs
aboutLabel.addEventListener('click', function () {
    document.querySelector('.about-columns').scrollIntoView({ behavior: 'smooth', block: 'start' })
});

skillsLabel.addEventListener('click', function () {
    document.querySelector('.cv-column').scrollIntoView({ behavior: 'smooth', block: 'start' })
});

projectsLabeL.addEventListener('click', function () {
    document.querySelector('.projects').scrollIntoView({ behavior: 'smooth', block: 'start' })
});

contactLabel.addEventListener('click', function () {
    document.querySelector('.contact-paragraph').scrollIntoView({ behavior: 'smooth', block: 'start' })
});

//initialize animations
AOS.init();

button.addEventListener('click', DownloadCV);
mailBtn.addEventListener('click',sendMail);
