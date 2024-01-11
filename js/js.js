const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const inp1Error = document.getElementById('inp1-error');
const inp2Error = document.getElementById('inp2-error');
const rowT1 = document.querySelector('.t1');

function handleInput(inputElement, errorElement) {
    inputElement.addEventListener('focus', function () {
        rowT1.style.backgroundColor = '#FFFFE0';
    });

    inputElement.addEventListener('blur', function () {
        rowT1.style.backgroundColor = '#FFF4F4';
        inputElement.style.border = '2px solid #FF4E5D';
        
        if (inputElement.value.trim() === '') {
            errorElement.textContent = `Missing input: ${inputElement === inp1 ? 'First Name' : 'Last Name'} is required`;
            errorElement.style.display = 'block';
        }
    });
}

handleInput(inp1, inp1Error);
handleInput(inp2, inp2Error);


const inp3 = document.querySelector('.inp3');
const inp3Error = document.getElementById('inp3-error');
const rowT3 = document.querySelector('.t3');

inp3.addEventListener('focus', function () {
    rowT3.style.backgroundColor = '#FFFFE0';
});

inp3.addEventListener('blur', function () {
    rowT3.style.backgroundColor = '#FFF4F4';
    inp3.style.border = '2px solid #FF4E5D';

    if (inp3.value.trim() === '') {
        inp3Error.textContent = 'Missing input: New Variable is required';
        inp3Error.style.display = 'block';
    }
});


const inp4 = document.querySelector('.inp4');
const inp4Error = document.getElementById('inp4-error');
const rowT4 = document.querySelector('.t4');

inp4.addEventListener('focus', function () {
    rowT4.style.backgroundColor = '#FFFFE0';
});

inp4.addEventListener('blur', function () {
    rowT4.style.backgroundColor = '#FFF4F4';
    inp4.style.border = '2px solid #FF4E5D';

    if (inp4.value.trim() === '') {
        inp4Error.textContent = 'Missing input: New Variable is required';
        inp4Error.style.display = 'block';
    }
});


const inp5 = document.querySelector('.inp5');
const inp5Error = document.getElementById('inp5-error');
const rowT5 = document.querySelector('.t5');

inp5.addEventListener('focus', function () {
    rowT5.style.backgroundColor = '#FFFFE0';
});

inp5.addEventListener('blur', function () {
    rowT5.style.backgroundColor = '#FFF4F4';
    inp5.style.border = '2px solid #FF4E5D';

    if (inp5.value.trim() === '') {
        inp5Error.textContent = 'Missing input: New Variable is required';
        inp5Error.style.display = 'block';
    }
});

const inp6Elements = document.querySelectorAll('.inp6');
const inp6Error = document.getElementById('inp6-error');
const rowT6 = document.querySelector('.t6');

inp6Elements.forEach(function (inp6) {
    inp6.addEventListener('focus', function () {
        rowT6.style.backgroundColor = '#FFFFE0';
    });

    inp6.addEventListener('blur', function () {
        rowT6.style.backgroundColor = '#FFF4F4';
        inp6.style.border = '2px solid #FF4E5D';

        if (inp6.value.trim() === '') {
            inp6Error.textContent = 'Missing input: New Variable is required';
            inp6Error.style.display = 'block';
        }
    });
});


