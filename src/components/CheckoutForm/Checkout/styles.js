import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    // appBar: {
    //     position: 'relative',
    // },
    toolbar: theme.mixins.toolbar,
    layout: {
        marginTop: '1%',
        width: 'auto',
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
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
        border: '.7px solid #e7e7e7',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 50,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
        backgroundColor: 'whitesmoke',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
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