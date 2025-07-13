window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "swagger.yaml",
    urls: [
      { url: "full-list.yaml", name: "Full API Endpoint List" },
      { url: "try-it-out.yaml", name: "Interactive Docs" }
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

  const observer = new MutationObserver(() => {
    const uiReady =
      window.ui &&
      window.ui.specActions &&
      typeof window.ui.specActions.updateUrl === 'function';

    if (!uiReady) return;

    observer.disconnect();

    const updateUrl = window.ui.specActions.updateUrl;

    // Function override
    window.ui.specActions.updateUrl = function (url) {

      if (url.includes("full-list")) {
        window.ui.getConfigs().supportedSubmitMethods = [];
      } else {
        window.ui.getConfigs().supportedSubmitMethods = ["get", "post"];
      }

      return updateUrl.apply(this, arguments);
    }
  });

  const swaggerUI = document.getElementById('swagger-ui');
  if (swaggerUI) {
    observer.observe(swaggerUI, { childList: true, subtree: true });
  }

  //</editor-fold>
};
