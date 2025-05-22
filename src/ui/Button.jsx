import { forwardRef } from "react";
/**
 * Button component with various style variants
 */
const Button = forwardRef(
  ({ 
    children, 
    className = "", 
    variant = "default", 
    size = "default", 
    type = "button",
    disabled = false,
    onClick,
    ...props 
  }, ref) => {
    // Base classes that apply to all buttons
    const baseClasses = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50";
    
    // Variant classes
    const variantClasses = {
      default: "bg-primary text-white hover:bg-primary-dark",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-gray-300 bg-white  hover:bg-gray-100",
      secondary: "bg-secondary text-white hover:bg-secondary-dark",
      ghost: "hover:bg-gray-100",
      link: "text-primary underline-offset-4 hover:underline",
    };
    
    // Size classes
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-11 px-8 text-base",
      icon: "h-10 w-10",
    };
    
    // Combine all classes
    const buttonClasses = `
      ${baseClasses} 
      ${variantClasses[variant] || variantClasses.default} 
      ${sizeClasses[size] || sizeClasses.default} 
      ${className}
    `;
    
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };