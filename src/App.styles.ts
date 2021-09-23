import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
  margin-bottom: 500px;
`;

export const StyledWrapper = styled.div`
  margin: 40px;
  max-width: 250px;
  height: 100%;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
