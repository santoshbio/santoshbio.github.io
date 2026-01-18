function loadHTML(id, url) {
  return fetch(url + '?v=' + Date.now())
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
}