const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".navigation__middle-list")

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
  })
}

navSlide()
