let container = document.querySelector(".container")
        let icon = document.querySelector(".icon");
        let items = document.querySelector(".items");
        let options = document.getElementsByClassName("options");
        let para = document.getElementById("para");

        container.addEventListener("click", () => {
            if (icon.classList.contains("icon")) {
                items.style.display = "none";
                icon.style.transform = "rotate(180deg)"
                icon.style.transition = "transform 0.3s linear"
            } else {
                items.style.display = "block";
                icon.style.transform = "rotate(0deg)"
                icon.style.transition = "transform 0.3s linear"
            }
            icon.classList.toggle("icon")
        })

        for (option of options) {
            option.onclick = (event) => {
                para.innerText = event.target.innerText;
                items.style.display = "none"
                icon.classList.toggle("icon")
                icon.style.transform = "rotate(180deg)"
                icon.style.transition = "transform 0.3s linear"
            }
        }