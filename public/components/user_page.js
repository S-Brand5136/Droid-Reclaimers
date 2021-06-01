const userPage = function(user) {
  let userString = `
  <div id="user-content">
    <section>
      <div>
        <h2 class="user-page-title">${user.name}</h2>
        <img src="../${user.avatar_url}">
      </div>
      <ul>
        <li><span>Email:</span> ${user.email}</li>
        <li><span>Phone:</span> ${user.mobile_phone}</li>
        <li><span>Date Joined:</span> ${new Date(user.created_at).toLocaleDateString()}</li>
  `;

  if (user.is_admin) {
    userString += `
    <li>
      <span class="badge rounded-pill bg-primary">Administrator</span>
    </li>`
  }

  userString += '</ul>';

  if (user.is_admin) {
    userString += `
      <div>
        <button class="btn btn-danger type="button onClick="deleteEverything">
          <i class="fas fa-exclamation-triangle"></i>Delete All Droid Listings!
        </button>
      </div>`
  }

  userString += `
  </section>
  <section>
    <nav>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button id="user-favourites-button" class="nav-link active">Favourites</button>
        </li>
        <li class="nav-item">
          <button id="user-purchases-button" class="nav-link">Purchases</button>
        </li>
      </ul>
    </nav>
    <ul id="user-droid-content"></ul>
  </section>
  </div>
  `;

  return userString;
};

const userFavouriteContent = (droid) => {
  return `
    <li>
      <img src="../${droid.image_url}">
      <div>
        <h4>${droid.name}</h4>
        <small>Date Posted: ${new Date(droid.created_at).toLocaleDateString()}</small>
        <p>${droid.description}</P>
        <ul>
          <li>
            <strong class="list-label">Manufacturer:</strong> ${droid.manufacurer}
          </li>
          <li>
            <strong class="list-label">Model:</strong> ${droid.model}
          </li>
          <li>
            <strong class="list-label">Price</strong> ${droid.price || 'SOLD'}
          </li>
        </ul>
      </div>
    </li>
  `;
};
