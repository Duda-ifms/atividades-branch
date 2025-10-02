function toggleDark() {
      document.body.classList.toggle("dark");
    }

    // Cursor customizado
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });

    // Scroll reveal
    const hiddenElements = document.querySelectorAll(".hidden");
    window.addEventListener("scroll", () => {
      hiddenElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("show");
        }
      });
    });