type ButtonProps = {
    variant: 'primary' | 'secondary' | 'outline';
    children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>


function Button({ variant, children, ...rest }: ButtonProps) {
    return (
        <button className={`btn-with-${variant}`} {...rest}>{children}</button>
    )
}

export default Button