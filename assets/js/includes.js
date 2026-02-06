function loadInclude(id, path) {
  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error("Failed to load " + path);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(err));
}

/* ROOT LEVEL (index.html) */
loadInclude("siteHeader", "./includes/header.html");
loadInclude("siteFooter", "./includes/footer.html");
