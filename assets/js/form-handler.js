document.getElementById('feedback-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const payload = Object.fromEntries(formData.entries());

  fetch("https://uxdkgy1yr6.execute-api.ap-southeast-2.amazonaws.com/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      document.getElementById('feedback-form').innerHTML =
        "<p>Thank you. Your message has been sent.</p>";
    })
    .catch(error => {
      document.getElementById('feedback-form').innerHTML =
        "<p>There was an issue sending your message.</p>";
    });
});
