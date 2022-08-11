(function () {
  // include variables below in product page with product's IDs
  // var productElementId = "product-component-1640520756591";
  // var productId = "7502214103267";

  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = buildClient();

    var shopifyProductId = productIdHash; // atob(productIdHash);

    var productId = shopifyProductId.split("Product/")[1];

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      createFullPageComponent(ui, productElementId, productId);
    });
  }
})();
