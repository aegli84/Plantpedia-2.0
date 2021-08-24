import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '1%',
        marginLeft: '1%',
        marginBottom: '5%',
        fontFamily: 'Montserrat',
        textDecoration: 'underline'
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
        marginBottom: '15px',
        },
        [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        fontFamily: 'Montserrat',
        
        
    },
    cardDetails: {
        display: 'flex',
        marginTop: '7%',
        width: '100%',
        justifyContent: 'space-between',
    },
    spinner: {
        marginTop: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));