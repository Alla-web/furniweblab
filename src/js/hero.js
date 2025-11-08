
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn.btn-link');
    const targetId = "feedbacks";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });