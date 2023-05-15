(() => {
    console.log("content.js loaded");

    const showSaveCredenditalsPopup = async () => {

        console.log("afdjfkdashjk");

        addPopupInPage();

        showHidePopup()
        showHidePopup()


    };

    function showHidePopup() {
        const isExist = document.getElementById("save-credential-popup-001")

        isExist.classList.toggle("visible-savecredentialpopup")
    }

    function addPopupInPage() {
        const isExist = document.getElementById("save-credential-popup-001")

        if (!isExist) {
            const styles = `.open-button {
            visibility:hidden;
            background-color: red;
            color: white;
            padding: 16px 20px;
            border: none;
            cursor: pointer;
            opacity: 0.8;
            position: fixed;
            top: 23px;
            right: 28px;
            width: 280px;
          }
          
          .visible-savecredentialpopup{
            visibility: visible;
          }
          `
            const styleSheet = document.createElement("style")
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)


            const saveCredmtialPopup = document.createElement("div");
            saveCredmtialPopup.id = "save-credential-popup-001"
            saveCredmtialPopup.className = "open-button";

            saveCredmtialPopup.innerHTML =
                `<form>
                <input type="text" value="this is email">
                <input type="password" value="password">
                <button>Save</button>
                <button>Close</button>
            </form>`
            document.body.appendChild(saveCredmtialPopup);
        }

    }

    showSaveCredenditalsPopup()
})();