'use strict';

const { withStyles }    = require('@material-ui/core/styles');
const { Button } = require('@material-ui/core');

const bsButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        fontFamily: 'inherit',
        fontWeight: 'normal',
        padding: '6px 12px',
        border: '1px solid transparent',
        lineHeight: 1.42857143,
        borderRadius: '4px'
    },
    contained: {
        backgroundColor: '#337ab7',
        borderColor: '#2e6da4',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#286090',
            borderColor: '#204d74',
            boxShadow: 'none'
        },
        '&:active': {
            boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, .125)',
            backgroundColor: '#286090',
            borderColor: '#204d74'
        },
        '&:focus': {
            borderColor: '#122b40',
            backgroundColor: '#204d74',
            outlineOffset: '-2px',
            boxShadow: 'inset 0px 3px 5px 0px rgba(0,0,0,.125)'
        }
    },
    sizeLarge: {
        padding: '10px 20px',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: '6px',
        lineHeight: 1.33333
    },
    label: {
        display: 'block'
    },
    text: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: '#337ab7',
        boxShadow: 'none'
    }
})(Button);


exports.Button = bsButton;