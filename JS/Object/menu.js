const menu = [
  {
    id: 1,
    name: "Menu 1",
    children: [
      {
        id: 2,
        name: "Menu 1.1",
        children: [
          {
            id: 3,
            name: "Menu 1.1.1",
            children: [
              {
                id: 4,
                name: "Menu",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Menu 1.2",
      },
    ],
  },
  {
    id: 6,
    name: "Menu 2",
  },
  {
    id: 7,
    name: "Menu 3",
    children: [
      {
        id: 8,
        name: "Menu 3.1",
      },
    ],
  },
];
function renderMenu(menu) {
  let html = "<ul>";
  for (let i = 0; i < menu.length; i++) {
    html += `<li>${menu[i].name}</li>`;
    if (menu[i].children) {
      html += renderMenu(menu[i].children);
    }
  }
  html += "</ul>";
  return html;
}

var html = renderMenu(menu);

document.write(html);
