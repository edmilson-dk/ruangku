import { Button } from './styles';

function GenericButton({ type, label, ...rest }) {
  return (
    <Button 
      type={type ? type : 'button' }
      {...rest}
    >{ label }
    </Button>
  );
}

export default GenericButton;
