import PropTypes from 'prop-types'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {

    return <button >{ children }</button>
}

Button.propTypes = {
    checkVariation: ({ primary, secondary, success, warning, danger }) => {
        const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!warning) +
        Number(!!success) +
        Number(!!danger)

        if(count > 1){
            return new Error('You can only use one variation prop type.')
        }
    },
}

export default Button