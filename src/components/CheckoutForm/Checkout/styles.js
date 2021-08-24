import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    layout: {
        marginTop: '1%',
        width: 'auto',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    paper: {
        backgroundColor: 'whitesmoke',
        opacity: '.9',
        boxShadow: '0 4px 10px 0 black',
        borderRadius: '1.3rem',
        border: '15px solid #e7e7e7',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 15,
        },
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        },
    },
    stepper: {
        padding: theme.spacing(2, 0, 3),
        backgroundColor: 'whitesmoke',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(3),
    },
    divider: {
        margin: '20px 0',
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));