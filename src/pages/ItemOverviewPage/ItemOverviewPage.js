import ItemOverviewPageContent from "./components/ItemOverviewPageContent";

function ItemOverviewPage(props) {
  let addedCartItem;

  if (props.addToCart) {
    addedCartItem = props.addToCart.map((item) => {
      return (
        <ItemOverviewPageContent
          {...item}
          onAdd={props.onAdd}
        ></ItemOverviewPageContent>
      );
    });
  }

  return <div>{addedCartItem} </div>;
}

export default ItemOverviewPage;