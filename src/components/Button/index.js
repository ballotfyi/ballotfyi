
const Button = (props) => {
  const {label, href, children} = props;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button>
          {label || children}
        </button>
      </a>
    )
  }
}

export default Button;