(function () {
  // const productElements = [
  //   {
  //     productDetailsElementId: "giant-wreath-of-christmas-details",
  //     addToCartElementId: "giant-wreath-of-christmas-add-to-cart",
  //     productId: "7437718388963",
  //   },
  //   {
  //     productDetailsElementId: "home-of-the-bluebird-details",
  //     addToCartElementId: "home-of-the-bluebird-add-to-cart",
  //     productId: "7437719077091",
  //   },
  //   {
  //     productDetailsElementId: "magnolias-garden-wreath-details",
  //     addToCartElementId: "magnolias-garden-wreath-add-to-cart",
  //     productId: "7502214103267",
  //   },
  //   {
  //     productDetailsElementId: "toffee-and-cream-wreath-details",
  //     addToCartElementId: "toffee-and-cream-wreath-add-to-cart",
  //     productId: "7437718290659",
  //   },
  //   {
  //     productDetailsElementId: "spring-is-in-the-air-wreath-details",
  //     addToCartElementId: "spring-is-in-the-air-wreath-add-to-cart",
  //     productId: "7437719339235",
  //   },
  //   {
  //     productDetailsElementId: "summer-vibes-wreath-details",
  //     addToCartElementId: "summer-vibes-wreath-add-to-cart",
  //     productId: "7437718356195",
  //   },
  //   {
  //     productDetailsElementId: "merging-hues-of-pink-wreath-details",
  //     addToCartElementId: "merging-hues-of-pink-wreath-add-to-cart",
  //     productId: "7437719404771",
  //   },
  //   {
  //     productDetailsElementId: "beaut-jute-wreath-details",
  //     addToCartElementId: "beaut-jute-wreath-add-to-cart",
  //     productId: "7437718257891",
  //   },
  //   {
  //     productDetailsElementId: "lavender-sunset-wreath-details",
  //     addToCartElementId: "lavender-sunset-wreath-add-to-cart",
  //     productId: "7437719208163",
  //   },
  //   {
  //     productDetailsElementId: "sparkling-rose-wreath-details",
  //     addToCartElementId: "sparkling-rose-wreath-add-to-cart",
  //     productId: "7437718323427",
  //   },
  //   {
  //     productDetailsElementId: "fuchsia-christmas-wreath-details",
  //     addToCartElementId: "fuchsia-christmas-wreath-add-to-cart",
  //     productId: "7522271035619",
  //   },
  //   {
  //     productDetailsElementId: "the-house-of-elf-wreath-details",
  //     addToCartElementId: "the-house-of-elf-wreath-add-to-cart",
  //     productId: "7437719306467",
  //   },
  //   {
  //     productDetailsElementId: "elves-warm-greetings-wreath-details",
  //     addToCartElementId: "elves-warm-greetings-wreath-add-to-cart",
  //     productId: "7522403647715",
  //   },
  //   {
  //     productDetailsElementId: "love-grows-here-wreath-details",
  //     addToCartElementId: "love-grows-here-wreath-add-to-cart",
  //     productId: "7522717368547",
  //   },
  //   {
  //     productDetailsElementId: "love-is-homemade-wreath-details",
  //     addToCartElementId: "love-is-homemade-wreath-add-to-cart",
  //     productId: "7522872754403",
  //   },
  // ];

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
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      productElements.forEach(function (productElement) {
        createProductDetailsComponent(
          ui,
          productElement.productDetailsElementId,
          productElement.productId
        );
        createAddToCartButtonComponent(
          ui,
          productElement.addToCartElementId,
          productElement.productId
        );
      });
    });
  }
})();
