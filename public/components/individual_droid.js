const individualDroid = function(droid) {
  const primaryImage = droid.images.filter(img => img.is_primary)[0].image_url;
  console.log(primaryImage);
  const otherImages = droid.images.filter(img => !img.is_primary);

  let secondaryImages = '';
  for (const img of otherImages) {
    secondaryImages += `<img src="../${img.image_url}" class="droid-secondary" alt="droid: ${droid.name}">`;
  }

  let droidString = `
  <section id="show-droid">
    <h2>${droid.name}</h2>
    <div class="container">
      <div>
        <div class="droid-primary">
          <img src="../${primaryImage}" alt="droid: ${droid.name}">
        </div>
        <div class="droid-secondary">
          ${secondaryImages}
        </div>
      </div>
      <article>
        <h3>Description</h3>
        <p>${droid.description}</p>
        <ul>
          <li><strong>Manufactured by:</strong> ${droid.manufacturer}</li>
          <li><strong>Model:</strong> ${droid.model}</li>
          <li><strong>Seller:</strong> ${droid.sellers_name}.  Email: <a href="mailto:${droid.email}">${droid.email}</a></li>
        </ul>
      </article>
    </div>
  </section>
  `;

  return droidString;
};