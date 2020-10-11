let body = document.body;
let href = document.location.href;

let request = (href) => {
  let userName = href.split('=');
  if (userName[1]) {
    username = userName[1];
  } else {
    username = 'EvelinaEfimova'
  }
  return username;
}

fetch(`https://api.github.com/users/${request(href)}`)
  .then(rep => rep.json())
  .then(json => {
    let name = document.createElement('a');
    if (json.name != null) {
      name.innerHTML = json.name;
      name.href = json.html_url;
    } else {
      name.innerHTML = 'Information about name is not available'
    }
    body.append(name);

    let img = document.createElement('img');
    if (json.avatar_url != null) {
      img.src = json.avatar_url;
    } else {
      img.src = 'Information about avatar is not available'
    }
    body.append(img);

    let bio = document.createElement('p');
    if (json.bio != null) {
      bio.innerHTML = json.bio;
    } else {
      bio.innerHTML = 'Information about bio in not available'
    }
    body.append(bio);
  })