import React from "react";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";
import { StarshipList } from "../sw-components/item-lists";
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundry>
      <Row 
      left={<StarshipList onItemSelected={(itemId) => {
        history.push(itemId);
      }} />} 
      />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipsPage);