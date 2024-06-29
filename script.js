document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closePopupButton = document.getElementById('closePopup');
    var disablePopupCheckbox = document.getElementById('disablePopup');

    if (!localStorage.getItem('popupDisabled')) {
        setTimeout(function() {
            popup.style.display = 'flex';
        }, 2000); // Affiche le pop-up après 2 secondes
    }

    closePopupButton.addEventListener('click', function() {
        if (disablePopupCheckbox.checked) {
            localStorage.setItem('popupDisabled', 'false');
        }
        popup.style.display = 'none';
    });
});
