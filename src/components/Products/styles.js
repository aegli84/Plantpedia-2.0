import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    root: {
        flexGrow: 1,
    },
    spinner: {
        marginTop: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));