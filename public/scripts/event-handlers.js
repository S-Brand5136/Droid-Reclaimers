const imageSwapClickHandler = function() {
  let primaryImageSrc = $('.droid-primary img').attr('src');

  // swap images
  $('.droid-primary img').attr('src', $(this).attr('src'));
  $(this).attr('src', primaryImageSrc);
};

const deleteDroidEventHandler = function(id) {
  $.ajax({
    method: 'DELETE',
    url: `/api/droids/${id}`
  })
    .then(result => {
      console.log('ajax delete result', result);
      changePage({ droidId: id }, '/');
    })
    .catch(err => console.error(err));
};

const getFavouriteDroidsEventHandler = function(userId) {
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/favourites`
  })
    .then((result) => {
      // TODO: Handl the return value, result.
      console.log(result);
    })
    .catch(err => console.error(err));
};

// Add a droid to a user's favourites
const addToFavouritesEventHandler = function(userId, droidId) {
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/favourites/${droidId}`
  })
    .then((result) => {
      // TODO: Handl the return value, result.
      console.log(result);
    })
    .catch(err => console.error(err));
};

// Remove a droid from user's favourites
const removeDroidFromFavouritesEventHandler = function(userId, droidId) {
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/favourites/${droidId}`
  })
    .then((result) => {
      // TODO: Handl the return value, result.
      console.log(result);
    })
    .catch(err => console.error(err));
};
