let selectedPackage = "";

function openGame(game) {
    if (game === "PUBG Mobile") {
        const section = document.getElementById("pubg-topup");

        section.style.display = "block";

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function selectPackage(packageName) {

    selectedPackage = packageName;

    document.getElementById("selectedPackage").textContent =
        "الباقة: " + packageName;

    document.getElementById("playerId").value = "";

    document.getElementById("playerModal").classList.add("show");

    document.getElementById("playerId").focus();
}

function closePlayerModal() {
    document.getElementById("playerModal").classList.remove("show");

    document.getElementById("playerIdError").textContent = "";
    document.getElementById("playerIdError").classList.remove("show");
    document.getElementById("playerId").classList.remove("input-error");
    document.getElementById("playerId").value = "";
}
function continueOrder() {

    const playerId = document.getElementById("playerId").value.trim();

  if (!/^\d{11,}$/.test(playerId)) {
    showIdError("اكتب Player ID مكوّن من 11 رقم على الأقل، من غير حروف أو رموز");
    return;
  }

    document.getElementById("reviewPackage").textContent =
        selectedPackage;

    document.getElementById("reviewPlayerId").textContent =
        playerId;

  const packagePrices = {
    "60 UC": 50,
    "325 UC": 255,
    "660 UC": 510,
    "1800 UC": 1280,
    "3850 UC": 2560
};

document.getElementById("reviewPrice").textContent =
    packagePrices[selectedPackage] + " جنيه";

    document.getElementById("orderReview").style.display =
        "block";

    closePlayerModal();

    document.getElementById("orderReview").scrollIntoView({
        behavior: "smooth"
    });
}
document.querySelector(".confirm-order").addEventListener("click", function () {

    const playerId = document.getElementById("reviewPlayerId").textContent;
    const packageName = document.getElementById("reviewPackage").textContent;

    document.getElementById("successPackage").textContent =
        packageName;

    document.getElementById("successPlayerId").textContent =
        playerId;

    document.getElementById("successModal").classList.add("show");
});

function closeSuccessModal() {
    document.getElementById("successModal").classList.remove("show");
}

document.querySelectorAll('.nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {

        const target = this.getAttribute('href');

        if (target === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const section = document.querySelector(target);

        if (section) {
            e.preventDefault();

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
document.querySelectorAll('.nav a[href="#home"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
  document.querySelector('a[href="#gift-cards"]').onclick = function(e) {
    e.preventDefault();

    document.getElementById("gift-cards").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};
});
function cancelOrder() {
    document.getElementById("orderReview").style.display = "none";

    document.getElementById("reviewPackage").textContent = "-";
    document.getElementById("reviewPlayerId").textContent = "-";
    document.getElementById("reviewPrice").textContent = "-";

    selectedPackage = "";
}
function searchSite() {
    const searchText = document.getElementById("siteSearch").value
        .trim()
        .toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        const text = product.textContent.toLowerCase();

        if (searchText === "" || text.includes(searchText)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
function showIdError(message) {
    const error = document.getElementById("playerIdError");
    error.textContent = message;
    error.classList.add("show");
    document.getElementById("playerId").classList.add("input-error");
}