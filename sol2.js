const body = document.querySelector('body');

const addCat = (cat) => {
  const section = document.createElement('section');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');

  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  body.appendChild(section);
  section.appendChild(h3);
  section.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  section.setAttribute('class', 'categorie');
  ul.setAttribute('class', 'list');

  h3.innerText = cat.name;
  li1.innerText = cat.value1;
  li2.innerText = cat.value2;
  li3.innerText = cat.value3;
};

const xhrC = new XMLHttpRequest();
const urlC = "https://api.chucknorris.io/jokes/categories";
const urlV = "https://api.chucknorris.io/jokes/random?category=";

xhrC.open('GET', urlC, true);

xhrC.addEventListener('load', () => {
  const response = JSON.parse(xhrC.responseText);

  response.forEach((cat) => {
    const c = { name: cat };

    const xhrV1 = new XMLHttpRequest();
    const xhrV2 = new XMLHttpRequest();
    const xhrV3 = new XMLHttpRequest();

    xhrV1.open('GET', urlV + cat, true);
    xhrV2.open('GET', urlV + cat, true);
    xhrV3.open('GET', urlV + cat, true);

    xhrV1.addEventListener('load', () => {
      const res = JSON.parse(xhrV1.responseText);
      c.value1 = res.value;
    });

    xhrV2.addEventListener('load', () => {
      const res = JSON.parse(xhrV2.responseText);
      c.value2 = res.value;
    });

    xhrV3.addEventListener('load', () => {
      const res = JSON.parse(xhrV3.responseText);
      c.value3 = res.value;

      addCat(c);
    });

    xhrV1.send();
    xhrV2.send();
    xhrV3.send();
  });
});

xhrC.send();
