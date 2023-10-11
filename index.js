const form = document.getElementById('survey-form');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const resetBtn = document.getElementById('reset-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = [];
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        if (checkbox.checked) {
            gender.push(checkbox.id);
        }
    });
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const details = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    popupContent.innerHTML = details;
    popup.style.display = 'flex';

    form.reset();
});

resetBtn.addEventListener('click', function () {
    form.reset();
});

popup.addEventListener('click', function () {
    popup.style.display = 'none';
});
