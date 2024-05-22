document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const dislikeBtn = document.getElementById("dislikeBtn");

    likeBtn.addEventListener("click", () => {
        alert("Te gusta este perfil");
        // Aquí iría la lógica para pasar al siguiente perfil
    });

    dislikeBtn.addEventListener("click", () => {
        alert("No te gusta este perfil");
        // Aquí iría la lógica para pasar al siguiente perfil
    });
});