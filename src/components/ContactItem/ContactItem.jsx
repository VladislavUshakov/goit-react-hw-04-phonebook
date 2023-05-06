import PropTypes from 'prop-types';
import { DeleteBtn, Item, Name } from './ContactItem.styles';

export const ContactItem = ({ id, name, number, toDeleteContact }) => {
  return (
    <Item>
      <p>
        <Name>{name}:</Name>
        <a href={`tel:${number}`}>{number}</a>
      </p>
      <DeleteBtn type="button" onClick={() => toDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toDeleteContact: PropTypes.func.isRequired,
};
