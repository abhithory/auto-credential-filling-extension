console.log("background.js loaded");

chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
    if (frameId !== 0) return;
    chrome.scripting.executeScript({
        target: { tabId },
        function: fillingPassword,
    })
})``

const fillingPassword = async () => {
    let inputs = Array.from(document.getElementsByTagName("input"));
    const inputsOnlyPass = document.querySelectorAll('input[type="password"]')[0];
    const indexOfIt = inputs.indexOf(inputsOnlyPass)
    console.log(indexOfIt);
    const inputsOnlyEmail = inputs[indexOfIt - 1];


    console.log(inputs);
    console.log(inputsOnlyPass);
    console.log(inputsOnlyEmail);

    inputsOnlyPass.value = "passsssss"
    inputsOnlyEmail.value = "99885522"


}