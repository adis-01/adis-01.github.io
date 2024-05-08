var typed = new Typed('.interests',{
    strings: ['Frontend and Backend Development','Mobile App Development'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:50,
    loop:true
});

const button = document.getElementById("cv-download");


function DownloadCV(){
    var curriculum_vitae = './adis_cvitae.pdf';
    var a_tag = document.createElement('a');
    a_tag.href=curriculum_vitae;
    a_tag.download ='adis_cv.pdf';
    document.body.appendChild(a_tag);
    a_tag.click();
    document.body.removeChild(a_tag);
}


button.addEventListener('click',DownloadCV);