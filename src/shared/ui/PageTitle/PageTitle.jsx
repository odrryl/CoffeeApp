export const getPageTitleFromPath = (pathname) => {
  switch (pathname) {
    case "/cart":
      return "Cart";
    case "/favorites":
      return "Favorites";
    case "/notifications":
      return "Order History";
      case "/payment":
      return "Payment";
    default:
      return "";
  }
};
