document.querySelector(".alpha-frame a").addEventListener("click", event => {
  event.preventDefault() // Prevent the link from navigating immediately

  const img1 = document.getElementById("img1")
  const img2 = document.getElementById("img2")
  const img3 = document.getElementById("img3")

  // Ensure the first image is visible by default
  img1.classList.add(".visible")

  // Step 1: Scale up the initial image
  img1.classList.add("scale-up")

  // Step 2: After scaling up, fade to the midpoint image
  setTimeout(() => {
    img1.classList.remove("visible")
    img2.classList.add("visible")
    img2.classList.add("shake") // Step 3: Add shaking animation to the midpoint image
  }, 1000) // Adjust timing as needed

  // Step 4: After shaking, fade to the final image
  setTimeout(() => {
    img2.classList.remove("shake")
    img2.classList.remove("visible")
    img3.classList.add("visible")
  }, 1500) // Adjust timing as needed

  // Step 5: Scale down the final image back to the original size
  setTimeout(() => {
    img3.classList.add("scale-down")

    // Optional: After scaling down, navigate to the link's href
    setTimeout(() => {
      window.location.href = this.href
    }, 1000) // Adjust timing as needed
  }, 2500) // Adjust timing as needed
})
