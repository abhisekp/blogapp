import PropTypes from 'prop-types';

const Index = ({ name = 'World' }) => (
  <div>
    {`Hello ${name}`}
  </div>
);

Index.propTypes = {
  name: PropTypes.string,
};

Index.defaultProps = {
  name: 'World',
};

export default Index;
