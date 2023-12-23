import { useState } from "react";

import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  let items = ["Item one", "Item two", "Item Three", "Item Four", "Item Five"];
  let moreItems = [
    "thing one",
    "thing two",
    "thing  Three",
    "thing  Four",
    "thing Five",
  ];

  const [alertShown, setAlertShown] = useState(false);

  function handleSelectItem(item: string) {
    console.log(item);
  }

  function handleButtonClick() {
    setAlertShown(true);
  }

  function handleAlertDismiss() {
    setAlertShown(false);
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Item list one"
        onSelectItem={handleSelectItem}
      />
      <Button color={"danger"} onClick={handleButtonClick}>
        Insert Text Here
      </Button>
      {alertShown && <Alert onClick={handleAlertDismiss}>Hello there </Alert>}
    </div>
  );
}

export default App;
