import './button.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button icons
   */
  icon: any;
  /**
   * Optional click handler
   */
  onClick?: (e) => any;
  cn?: string;
}

/**
 * Primary UI component for user interaction
 */


export const Button = (props: ButtonProps) => {
  const { variant, size, label, icon, backgroundColor, cn } = props;
  return (
    variant === 'primary' ?
      <button type="button" className={`m_btn m_btn-black none-border ${size} ${cn ? cn : ''}`} style={{ backgroundColor }} {...props}> {label}</button>
      :
      variant === 'secondary' ?
        <button type="button" className={`btn ${size} ${cn ? cn : ''}`} style={{ backgroundColor }} {...props}> {label}</button>
        :
        variant === 'gray' ?
          <button type="button" className={`m_btn m_btn-gray ${size} ${cn ? cn : ''}`} style={{ backgroundColor }}> {label}</button>
          :
        variant === 'icon' ?
          <button type="button" className={`m_btn m_btn-black m_btn-flex ${size} ${cn ? cn : ''}`} style={{ backgroundColor }} {...props}>
            <span>{icon}</span>
            {label}
          </button>
          :
          <button type="button" className={`m_btn m_btn-black light ${size} ${cn ? cn : ''}`} style={{ backgroundColor }} {...props}>
            {label}
          </button>
  )
}


