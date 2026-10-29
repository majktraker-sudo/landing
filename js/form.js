document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const fields = form.querySelectorAll('input, textarea');
    let firstInvalidField = null;
    let hasError = false;

    const formStatus = document.getElementById('form-status');
    formStatus.textContent = '';

    fields.forEach(field => {
        const errorId = field.id + '-error';
        const errorElement = document.getElementById(errorId);

        if (!field.checkValidity()) {
            hasError = true;
            field.setAttribute('aria-invalid', 'true');
            
            if (errorElement) {
                errorElement.textContent = "Помилка: " + field.validationMessage;
            }

            if (!firstInvalidField) {
                firstInvalidField = field;
            }
        } else {
            field.removeAttribute('aria-invalid');
            if (errorElement) {
                errorElement.textContent = '';
            }
        }
    });

    if (hasError) {
        if (firstInvalidField) {
            firstInvalidField.focus();
        }
    } else {
        formStatus.textContent = "Дякуємо! Повідомлення прийнято.";
        form.reset();
    }
});