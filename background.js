console.log("background.js loaded");

chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
    if (frameId !== 0) return;
    chrome.scripting.executeScript({
        target: { tabId },
        function: fillingPassword
    })
})

const fillingPassword = async () => {

    try {
        console.log("website url", location.href);
        const emailToFill = "thisisemail@gmail.com"
        const passToFill = "this is password"

        let inputs = Array.from(document.getElementsByTagName("input"));
        const inputsOnlyPass = document.querySelectorAll('input[type="password"]')[0];
        const relatedForm = inputsOnlyPass.closest('form');

        console.log(relatedForm);


        let inputsOnlyEmail;
        const indexOfPassField = inputs.indexOf(inputsOnlyPass);
        if (indexOfPassField > 0) {
            inputsOnlyEmail = inputs[indexOfPassField - 1];
            inputsOnlyEmail.value = emailToFill;
        }
        savingPassword(relatedForm, inputsOnlyEmail.name, inputsOnlyPass.name)

        inputsOnlyPass.value = passToFill;
    } catch (error) {
        console.log("error", error);
    }

    function savingPassword(_form, _emailId, _passId) {

        console.log(_emailId);
        _form.addEventListener("submit", function (e) {
            // e.preventDefault()
            try {
                console.log(_form.elements[_emailId].value);
                console.log(_form.elements[_passId].value);


                alert("go")
                // chrome.extension.sendRequest({ 'name': 'form_submit', 'data': data }, function () { /* callback from request */ }, false);
            } catch (error) {
                console.log("error", error);
            }
        });
    }
}


