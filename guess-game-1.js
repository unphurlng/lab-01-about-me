var aboutMeForm = document.getElementById('about-me-form');
var aboutMeResponse = document.getElementById('about-me-response');

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var colorInput = elements.color;
    var favColor = colorInput.value;
    
    var numInput = elements.number;
    var favNum = numInput.value;
    
    var schoolInput = elements.school;
    var favSchool = schoolInput.value;
    
    var ageInput = elements.age;
    var ageGray = ageInput.value;
    
    var heightInput = elements.height;
    var jumpHeight = heightInput.value;
    
    var correct = 0;

    if(favColor.toLowerCase() === 'violet') {
        correct = correct + 1;
        colorInput.classList.add('correct');
        colorInput.classList.remove('incorrect');
    }
    else {
        colorInput.classList.add('incorrect');
        colorInput.classList.remove('correct');
    }
        
    if(favNum === '8') {
        correct = correct + 1;
        numInput.classList.add('correct');
        numInput.classList.remove('incorrect');
    }

    if(favSchool.toLowerCase() === 'alchemy code lab') {
        correct = correct + 1;
    }

    if(ageGray === '18') {
        correct = correct + 1;
    }

    if(jumpHeight === '15000') {
        correct = correct + 1;
    }

    aboutMeResponse.textContent = 'You got ' + correct + ' out of 5 correct.';
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var colorInput = elements.color;

    colorInput.classList.remove('correct');
    colorInput.classList.remove('incorrect');
}
