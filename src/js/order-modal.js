import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const modal = document.getElementById("order-modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const form = document.getElementById("callback-form");
let productId = null;
let color = null;

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".open-order-modal-btn");
  if (!btn) return;


  productId = btn.dataset.productId;
  color = btn.dataset.color;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
  form.reset();
  clearErrors();
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") closeModal();
});

function showInputError(input, message) {
  input.style.border = "1px solid #6b0609";

  let errorEl = input.parentNode.querySelector(".input-error-text");
  if (!errorEl) {
    errorEl = document.createElement("p");
    errorEl.classList.add("input-error-text");
    input.parentNode.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".input-error-text").forEach((e) => e.remove());
  form.querySelectorAll("input, textarea").forEach((el) => {
    el.style.border = "1px solid rgba(8, 12, 9, 0.15)";
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearErrors();

  const name = form.name.value.trim();
  let phone = form.phone.value.trim();
  const comment = form.comment.value.trim();

  let hasError = false;

  if (!name) {
    showInputError(form.name, "Error Text");
    hasError = true;
  }

  if (!phone || !/^\d+$/.test(phone)) {
    showInputError(form.phone, "Error Text");
    hasError = true;
  }

  if (hasError) return;

  if (phone.startsWith("0")) phone = "38" + phone;

  const orderData = {
    name,
    phone,
    modelId: productId,
    color,
    comment: comment || "Чекатиму на зворотний зв'язок для уточнення деталей. Дякую!",
  };

  try {
    const response = await fetch(
      "https://furniture-store-v2.b.goit.study/api/orders",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      }
    );

    const result = await response.json();
    console.log("Відповідь від сервера:", result);

    if (!response.ok) {
      iziToast.error({
        title: "Помилка!",
        message: result.message || "Щось пішло не так. Перевірте дані.",
        position: "topRight",
      });
      return;
    }

    iziToast.success({
      title: "Успіх!",
      message: `Замовлення №${result.orderNum} успішно створено!`,
      position: "topRight",
    });

    closeModal();
  } catch (err) {
    console.error("Помилка при запиті:", err);
    iziToast.error({
      title: "Помилка!",
      message: "Не вдалося відправити замовлення. Спробуйте пізніше.",
      position: "topRight",
    });
  }
});
