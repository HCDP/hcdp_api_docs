window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "swagger.yaml",
    urls: [
      { url: "/full-list.yaml", name: "Full API Endpoint List" },
      { url: "/try-it-out.yaml", name: "Interactive Docs" }
    ],
    "urls.primaryName": "Full API Endpoint List",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    supportedSubmitMethods: [],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
