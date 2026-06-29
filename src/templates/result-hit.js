import aa from 'search-insights';

const resultHit = (hit, { html, components }) => html`
  <div class="result-hit card border-0 rounded-4 shadow-sm h-100 text-decoration-none">

    <div
      class="result-hit__image-container position-relative overflow-hidden"
      onClick=${(event) => {
        event.stopPropagation();

        aa('clickedObjectIDsAfterSearch', {
          index: process.env.ALGOLIA_INDEX,
          eventName: 'Product Clicked',
          queryID: hit.__queryID,
          objectIDs: [hit.objectID],
          positions: [hit.__position],
        });
      }}
    >

      <span class="badge bg-danger position-absolute top-0 start-0 m-2"
        style="z-index:1; font-size:0.65rem;">
        ${hit.brand}
      </span>

      <img
        class="result-hit__image card-img-top"
        src="${hit.image}"
        alt="${hit.name}"
      />

    </div>

    <div class="result-hit__details card-body p-3 d-flex flex-column">

      <h3 class="result-hit__name card-title fw-bold mb-2">
        ${components.Highlight({ attribute: 'name', hit })}
      </h3>

      <p class="result-hit__price mt-auto mb-3">
        $${hit.price}
      </p>

      <div class="result-hit__controls d-flex gap-2">

        <!-- VIEW PRODUCT (CONVERSION) -->
        <button
          type="button"
          class="btn btn-outline-primary btn-sm flex-fill rounded-pill"
          onClick=${(event) => {
            event.stopPropagation();

            aa('convertedObjectIDsAfterSearch', {
              index: process.env.ALGOLIA_INDEX,
              eventName: 'Product Converted',
              queryID: hit.__queryID,
              objectIDs: [hit.objectID],
            });
          }}
        >
          View Product
        </button>

        <!-- ADD TO CART (CONVERSION) -->
        <button
          type="button"
          class="btn btn-dark btn-sm flex-fill rounded-pill"
          onClick=${(event) => {
            event.stopPropagation();

            aa('convertedObjectIDsAfterSearch', {
              index: process.env.ALGOLIA_INDEX,
              eventName: 'Product Added To Cart',
              queryID: hit.__queryID,
              objectIDs: [hit.objectID],
            });
          }}
        >
          Add To Cart
        </button>

      </div>
    </div>
  </div>
`;

export default resultHit;