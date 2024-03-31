const makeFetch = async (url) => {
  const result = await fetch(url);

  return await result.json();
};

const fetchRestaurants = async () =>
  await makeFetch('https://10.120.32.94/restaurant/api/v1/restaurants');

const fetchDailyMenu = async (id) =>
  makeFetch(`https://10.120.32.94/restaurant/api/v1/restaurants/daily/${id}/fi`);


const sortRestaurants = (restaurants) => {
  restaurants.sort((a, b) =>
    a.name.toLowerCase().trim().localeCompare(b.name.toLowerCase().trim()),
  );
};

const createDialog = (restaurant, dialogNode, menu) => {
  dialogNode.innerHTML = `
    <h1>${restaurant.name}</h1>
    <p>Adress: ${restaurant.address},
    ${restaurant.postalCode} ${restaurant.city}</p>
    <p>Company: ${restaurant.company}</p>
    <p>Phone: ${restaurant.phone}</p>
    <ul>
    ${menu.courses.map(({name, price, diets}) =>
    `<li>${name} - ${price} (${diets.join(', ')})</li>`)
      .join('')}
    </ul>
    <form method="dialog">
      <button>Sulje</button>
    </form>
  `;

  dialogNode.showModal();
};

const handleTableRowClick = async (tr, restaurant, dialogNode) => {
  const previousHighlighted = document.querySelector('.highlight');
  if (previousHighlighted) {
    previousHighlighted.classList.remove('highlight');
  }

  tr.classList.add('highlight');
  const menu = await fetchDailyMenu(restaurant._id);
  createDialog(restaurant, dialogNode, menu);
};

const createTable = (restaurants) => {
  const tableNode = document.getElementById('restaurant-list');
  const dialogNode = document.getElementById('dialog');

  restaurants.forEach((restaurant) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${restaurant.name}</td><td>${restaurant.address}</td>`;
    tableNode.appendChild(tr);

    tr.addEventListener('click', () => {
      handleTableRowClick(tr, restaurant, dialogNode);
    });
  });
};

const buildWebsite = async () => {
  const restaurants = await fetchRestaurants();
  sortRestaurants(restaurants);
  createTable(restaurants);
};

buildWebsite();
