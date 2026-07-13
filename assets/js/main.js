const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});
