import PropTypes from 'prop-types'
import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-900 bg-blue-600 text-white': primary,
        'border-gray-900 bg-gray-600 text-white': secondary,
        'border-green-900 bg-green-600 text-white': success,
        'border-yellow-400 bg-yellow-300 text-white': warning,
        'border-red-900 bg-red-600 text-white': danger,
        'bg-white': outline,
        'rounded-full': rounded,
        '!text-blue-600': outline && primary,
        '!text-gray-600': outline && secondary,
        '!text-green-600': outline && success,
        '!text-yellow-400': outline && warning,
        '!text-red-600': outline && danger,
    })


    return <button {...rest} className={classes}>{ children }</button>
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