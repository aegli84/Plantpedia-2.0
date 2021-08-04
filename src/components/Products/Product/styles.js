import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
        borderRadius: '1.5rem',
        padding: '.7rem',
        backgroundColor: 'whitesmoke',
        opacity: '.9',
        boxShadow: '0 4px 10px 0 black',
        border: '.7px solid #e7e7e7',
        
    },
    media: {
        height: 0,
        paddingTop: '65.25%', // 16:9
        paddingBottom: '40.25%',
        borderRadius: '1.5rem',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Montserrat',
    },
}))