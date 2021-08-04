import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
    },
    root: {
        flexGrow: 1,
    },
}));