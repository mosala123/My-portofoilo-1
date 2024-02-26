// text anmations
var typed = new Typed("#auto-type", {
    strings: ["Front-End Dev", "Web Dev"],
    typeSpeed: 100, // زيادة سرعة الكتابة
    backSpeed: 100, // زيادة سرعة الرجوع
    loop: true,
  });



 // text anmations second
var typed = new Typed("#aout-write", {
  strings: ["Mohamed Ibrahim Salah", " Front-End Developer"],
  typeSpeed: 100,  
  backSpeed: 100,  
  loop: true,
});
// download my CV

const downloadLink = document.getElementById('downloadLink');
downloadLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Set options
  const options = {
    filename: 'page_content.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Convert the current page to PDF and download it
  html2pdf().from(document.body).set(options).save();
});