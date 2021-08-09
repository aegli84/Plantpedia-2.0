import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        borderRadius: '1.3rem',
        padding: '.5rem',
        backgroundColor: 'whitesmoke',
        opacity: '.9',
        boxShadow: '0 4px 10px 0 black',
        border: '.7px solid #e7e7e7',
        
    },
    media: {
        height: 260,
        borderRadius: '1.3rem',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        
    },
    cardActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        
    },
}));