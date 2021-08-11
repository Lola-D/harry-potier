import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import './button.css';

const Button = ({kind, label, handleClick}) => {
  const handleClassName = () => {
    switch (kind) {
      case 'book':
        return 'book-button'
      case 'empty':
        return 'empty-button'
      default:
        return 'icon-button'
    }
  };

  const handleIcon = () => {
    switch (kind) {
      case 'add':
        return <FaPlus />
      case 'sub':
        return <FaMinus />
      case 'remove':
        return <FaTrashAlt style={{color: '#986D8E'}} />
      default:
        return label
    }
  };

  return (
    <button
      onClick={handleClick}
      className={handleClassName()}
    >
      {handleIcon()}
    </button>
  );
};

export default Button;