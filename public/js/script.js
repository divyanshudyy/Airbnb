(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//MAP

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  style: "mapbox://styles/mapbox/streets-v12",
  container: "map", // container ID
  center: coordinates, //  1: Lng 2: Lat
  zoom: 15, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML("<p><b>Exact Location</b></p>")
  )
  .addTo(map);


