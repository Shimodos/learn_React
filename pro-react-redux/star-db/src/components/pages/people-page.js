import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PersonDetails from '../sw-components/person-ditails';
import { PersonList } from '../sw-components/item-list';
import Row from '../row/row';

const PeoplePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Row
      left={<PersonList onItemSelected={(id) => navigate('/people/' + id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default PeoplePage;
