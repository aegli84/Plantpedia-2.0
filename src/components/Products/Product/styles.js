import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        borderRadius: '1.3rem',
        padding: '.7rem',
        backgroundColor: 'whitesmoke',
        opacity: '.9',
        boxShadow: '0 4px 10px 0 black',
        border: '.7px solid #e7e7e7',
        paddingBottom: '.1rem'
    },
    media: {
        height: 0,
        paddingTop: '55.25%', 
        paddingBottom: '40.25%',
        borderRadius: '1.3rem',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Montserrat',
        
    },
}))