import '../../../variables/Colors.css';
import './ButtonSimple.css';

const ButtonSimple = ({ width, height, text, alt, href, borderRadius }) => {
    
    return (
        <a className="btn-simple" href={href} style={{ width, height, borderRadius }} alt={alt}>
            {text}
        </a>
    );
};

export default ButtonSimple;