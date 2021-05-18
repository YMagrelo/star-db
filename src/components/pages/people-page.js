import React from "react";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";
import { PersonList } from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";

export default class PeoplePage extends React.Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<PersonList onItemSelected={this.onItemSelected} />}
          right={<PersonDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}
