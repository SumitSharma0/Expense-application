// main.js — students will add JavaScript here as features are built

document.addEventListener("DOMContentLoaded", () => {
    const openVideoModal = document.getElementById("open-video-modal");
    const videoModalOverlay = document.getElementById("video-modal-overlay");
    const closeVideoModal = document.getElementById("close-video-modal");
    const videoIframe = document.getElementById("video-modal-iframe");
    const placeholderVideoUrl = "https://www.youtube.com/watch?v=oOl7VtdPCpU";

    if (!openVideoModal || !videoModalOverlay || !closeVideoModal || !videoIframe) {
        return;
    }

    const openModal = (event) => {
        event.preventDefault();
        videoIframe.src = placeholderVideoUrl;
        videoModalOverlay.classList.add("active");
        videoModalOverlay.hidden = false;
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        videoModalOverlay.classList.remove("active");
        videoModalOverlay.hidden = true;
        videoIframe.src = "";
        document.body.style.overflow = "";
    };

    openVideoModal.addEventListener("click", openModal);
    closeVideoModal.addEventListener("click", closeModal);

    videoModalOverlay.addEventListener("click", (event) => {
        if (event.target === videoModalOverlay) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && videoModalOverlay.classList.contains("active")) {
            closeModal();
        }
    });
});
