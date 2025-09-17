import '../../../variables/Colors.css';
import './ButtonSimple.css';

const ButtonSimple = ({ width, height, text, alt, href, borderRadius, target, rel }) => {
    
    return (
        <a className="btn-simple" href={href} style={{ width, height, borderRadius}} rel={rel} target={target} alt={alt}>
            {text}
        </a>
    );
};

export default ButtonSimple;