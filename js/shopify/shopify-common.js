function buildClient() {
  return ShopifyBuy.buildClient({
    domain: "beliefs-in-wreaths-decor-studio.myshopify.com",
    storefrontAccessToken: "aad770cf457bb57a2d1097f843730cb6",
  });
}

function createFullPageComponent(ui, elementId, productId) {
  ui.createComponent("product", {
    id: productId,
    node: document.getElementById(elementId),
    moneyFormat: getMoneyFormat(),
    options: getFullProductViewOptions(),
  });
}

function createCollectionDetailsComponent(ui, elementId, collectionId) {
  ui.createComponent("collection", {
    id: collectionId,
    node: document.getElementById(elementId),
    moneyFormat: getMoneyFormat(),
    options: getCollectionViewOptions(),
  });
}

function getMoneyFormat() {
  return "%24%7B%7Bamount%7D%7D";
}

function getButtonOptions() {
  return {
    ":hover": {
      "background-color": "#3F6A73",
    },
    "background-color": "#4C8699",
    ":focus": {
      "background-color": "#3F6A73",
    },
    "border-radius": "40px",
    "padding-left": "30px",
    "padding-right": "30px",
  };
}

function getFullProductViewOptions() {
  return {
    product: {
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0",
            "margin-bottom": "50px",
          },
          "text-align": "left",
        },
        title: {
          "font-size": "26px",
        },
        button: getButtonOptions(),
        price: {
          "font-size": "18px",
        },
        compareAt: {
          "font-size": "15.299999999999999px",
        },
        unitPrice: {
          "font-size": "15.299999999999999px",
        },
      },
      layout: "horizontal",
      contents: {
        img: false,
        imgWithCarousel: true,
        description: true,
      },
      width: "100%",
      text: {
        button: "Add to cart",
        outOfStock: "SOLD OUT",
      },
      events: {
        afterInit: function (product) {
          debugger;
          if (product.selectedVariant.price > 95) {
            var freeDeliveryMessageContainer = document.getElementById(
              productFreeDeliveryElementId
            );
            freeDeliveryMessageContainer.innerHTML =
              "This product includes <strong>FREE DELIVERY</strong>!";
          }
        },
        beforeInit: function (product) {
          debugger;
        },
        // addVariantToCart: function (product) {},
        // updateQuantity: function (product) {},
        openModal: function (product) {
          // TIP: uncomment line below to see and product id
          console.log("Product handle: " + product.viewData.id);
          window.location.href = `/products/product-details.html?productId=${product.viewData.id}`;
        },
        // openOnlineStore: function (product) {},
        // openCheckout: function (product) {},
      },
    },
    productSet: {
      styles: {
        products: {
          "@media (min-width: 601px)": {
            "margin-left": "-20px",
          },
        },
      },
    },
    modalProduct: {
      contents: {
        img: false,
        imgWithCarousel: true,
        button: false,
        buttonWithQuantity: true,
      },
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px",
          },
        },
        button: getButtonOptions(),
        title: {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "bold",
          "font-size": "26px",
          color: "#4c4c4c",
        },
        price: {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "18px",
          color: "#4c4c4c",
        },
        compareAt: {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          color: "#4c4c4c",
        },
        unitPrice: {
          "font-family": "Helvetica Neue, sans-serif",
          "font-weight": "normal",
          "font-size": "15.299999999999999px",
          color: "#4c4c4c",
        },
      },
      text: {
        button: "Add to cart",
      },
    },
    option: {},
    cart: {
      styles: {
        button: {
          ":hover": {
            "background-color": "#3F6A73",
          },
          "background-color": "#4C8699",
          ":focus": {
            "background-color": "#3F6A73",
          },
          "border-radius": "40px",
        },
      },
      text: {
        total: "Subtotal",
        button: "Checkout",
      },
      popup: false,
    },
    toggle: {
      styles: {
        toggle: {
          "background-color": "#4C8699",
          ":hover": {
            "background-color": "#3F6A73",
          },
          ":focus": {
            "background-color": "#3F6A73",
          },
        },
      },
    },
  };
}

function getCollectionViewOptions() {
  return {
    product: {
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "ma`x-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px",
            width: "calc(25% - 20px)",
          },
        },
        button: {
          ":hover": {
            "background-color": "#3F6A73",
          },
          "background-color": "#4C8699",
          ":focus": {
            "background-color": "#3F6A73",
          },
          "border-radius": "40px",
        },
      },
      buttonDestination: "modal",
      contents: {
        options: false,
      },
      text: {
        button: "View product",
      },
      events: {
        afterInit: function (product) {
          //debugger;
        },
        beforeInit: function (product) {
          //debugger;
        },
        // addVariantToCart: function (product) {},
        // updateQuantity: function (product) {},
        openModal: function (product) {
          // TIP: uncomment line below to see and product id
          console.log("Product handle: " + product.viewData.id);
          window.location.href = `/products/product-details.html?productId=${product.viewData.id}`;
        },
        // openOnlineStore: function (product) {},
        // openCheckout: function (product) {},
      },
    },
    productSet: {
      styles: {
        products: {
          "@media (min-width: 601px)": {
            "margin-left": "-20px",
          },
        },
      },
    },
    modalProduct: {
      contents: {
        img: false,
        imgWithCarousel: true,
        button: false,
        buttonWithQuantity: true,
      },
      styles: {
        product: {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px",
          },
        },
        button: {
          ":hover": {
            "background-color": "#3F6A73",
          },
          "background-color": "#4C8699",
          ":focus": {
            "background-color": "#3F6A73",
          },
          "border-radius": "40px",
        },
      },
      text: {
        button: "Add to cart",
        outOfStock: "SOLD OUT",
      },
    },
    option: {},
    cart: {
      styles: {
        button: {
          ":hover": {
            "background-color": "#3F6A73",
          },
          "background-color": "#4C8699",
          ":focus": {
            "background-color": "#3F6A73",
          },
          "border-radius": "40px",
        },
      },
      text: {
        total: "Subtotal",
        button: "Checkout",
      },
      popup: false,
    },
    toggle: {
      styles: {
        toggle: {
          "background-color": "#4C8699",
          ":hover": {
            "background-color": "#3F6A73",
          },
          ":focus": {
            "background-color": "#3F6A73",
          },
        },
      },
    },
  };
}
