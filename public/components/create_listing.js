const create_listing = () => {
  return `<div class="modal fade" id="createDroidModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="create-listing" enctype="multipart/form-data" method="POST">
          <label class="form-label" for="droid-title">Title</label>
          <input class="form-control" type="text" id="droid-title" name="title" required>

          <label class="form-label" for="droid-description">Description</label>
          <textarea class="form-control" type="text" id="description" name="description"></textarea required>

          <label class="form-label" for="droid-model">Model</label>
          <input class="form-control" type="text" id="droid-model" name="model" required>

          <label class="form-label" for="droid-manufacturer">Manufacturer</label>
          <input class="form-control" type="text" id="droid-manufacturer" name="manufacturer" required>

          <label class="form-label" for="droid-price">Price</label>
          <input class="form-control" type="number" id="droid-price" name="price" required>

          <label class="form-label" for="droid-image">Image</label>
          <input class="form-control" type="file" id="droid-image" name="image_url" required>

          <input id="modal-userId-input" type="hidden" name="userId" required></input>

          <button type="submit" class="btn btn-primary mt-3">Create Listing</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>
`;
};
