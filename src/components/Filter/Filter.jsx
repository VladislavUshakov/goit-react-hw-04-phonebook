import { Title } from 'components/ContactList';
import PropTypes from 'prop-types';
import { FilterSection } from './Filter.stylex';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterSection>
      <Title>Find contacts by name</Title>
      <input
        onChange={e => onChange(e.currentTarget.value)}
        value={value}
        name="filter"
      />
    </FilterSection>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
