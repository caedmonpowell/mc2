// ======================================================
// gui.js
// Minecraft 1.8 GUI Framework
// Part A
// ======================================================

const menu = document.getElementById("menu");
const clickSound = document.getElementById("clickSound");

class GuiButton {

    constructor(text, width = 400, height = 40) {

        this.text = text;
        this.width = width;
        this.height = height;

        this.enabled = true;
        this.hovered = false;
        this.pressed = false;

        this.element = document.createElement("div");
        this.element.className = "mc-button";

        this.element.style.width = width + "px";
        this.element.style.height = height + "px";

        this.label = document.createElement("span");
        this.label.className = "button-text";
        this.label.textContent = text;

        this.element.appendChild(this.label);

        this.bindEvents();

    }

    bindEvents() {

        this.element.addEventListener("mouseenter", () => {

            if (!this.enabled) return;

            this.setHovered(true);

        });

        this.element.addEventListener("mouseleave", () => {

            this.setHovered(false);
            this.setPressed(false);

        });

        this.element.addEventListener("mousedown", (event) => {

            if (!this.enabled) return;

            if (event.button !== 0) return;

            this.setPressed(true);

        });

        window.addEventListener("mouseup", () => {

            this.setPressed(false);

        });

        this.element.addEventListener("click", () => {

            if (!this.enabled) return;

            if (clickSound) {

                clickSound.currentTime = 0;

                clickSound.play().catch(() => {});

            }

            this.onClick();

        });

    }

    setHovered(state) {

        this.hovered = state;

        this.element.classList.toggle("hover", state);

    }

    setPressed(state) {

        this.pressed = state;

        this.element.classList.toggle("pressed", state);

    }

    setEnabled(state) {

        this.enabled = state;

        this.element.classList.toggle("disabled", !state);

    }

    setText(text) {

        this.text = text;
        this.label.textContent = text;

    }

    onClick() {

        // Overridden later

    }

    appendTo(parent) {

        parent.appendChild(this.element);

    }

}



// ======================================================
// Temporary Test
// (Removed in Part B)
// ======================================================

menu.innerHTML = "";

const testButton = new GuiButton("Singleplayer");

testButton.onClick = () => {

    console.log("Singleplayer clicked");

};

testButton.appendTo(menu);
