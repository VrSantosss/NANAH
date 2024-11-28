function showSurprise() {
    const surprise = document.getElementById("surprise");
    if (surprise.classList.contains("hidden")) {
      surprise.classList.remove("hidden");
    } else {
      surprise.classList.add("hidden");
    }
  }
  