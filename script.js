document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu")
  const menu = document.querySelector(".menu")

  // Toggle mobile menu
  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active")
  })

  // Enhanced smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      menu.classList.remove("active") // Close mobile menu if open

      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Scroll to element with offset
        const headerOffset = 60
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Simple form submission :3
  const contactForm = document.getElementById("contact-form")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message!")
    contactForm.reset()
  })
})

