import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink as Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { IconButton, Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const SideNav = (props) => {
    const { open, setOpen } = props;
    

    return (
        <>
        
            <Ul open={open}>
            <NavLogo to="/" onClick={() => setOpen(!open)}>
                <ImgLogo src={logo}/>
            </NavLogo>
        
                <IconButton component={Link} to='/Cart' onClick={() => setOpen(!open)} aria-label='Show cart items' color='inherit' >
                            <Badge badgeContent={0} color='secondary' >
                                <ShoppingCart style={{ color: 'whitesmoke', fontSize: '4rem', marginLeft: '10rem' }}/>
                            </Badge>
                        </IconButton>
                <motion.li whileTap={{scale: 1.1}}>
                    <Link to="/" onClick={() => setOpen(!open)}>Home</Link>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <Link to="/Plantpedia" onClick={() => setOpen(!open)}>Plantpedia</Link>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <Link to="/Guides" onClick={() => setOpen(!open)}>Guides</Link>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <Link to="/BoutiqueShops" onClick={() => setOpen(!open)}>Boutique Shops</Link>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <Link to="/Subscription" onClick={() => setOpen(!open)}>Subscription</Link>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <Link to="/Chat" onClick={() => setOpen(!open)}>Chat</Link>
                </motion.li>
                <motion.li whileTap={{scale: 1.1}} >
                    <Link to="/Blog" onClick={() => setOpen(!open)}>Blog</Link>
                </motion.li>
                
                <motion.li whileTap={{scale: 1.1}} >
                    <Link to="/signin">Login</Link>   
                    <Link to="/signup"> / Register</Link>   
                </motion.li>             
                
            </Ul>
            
        </>
    )
}

const Ul = styled.ul`
    
    li {
        display: none;
    @media (max-width: 768px){
        display: block;
        padding-left: 5rem;
        }
        
    }
@media (max-width: 768px) {
    background-color: black;
    position: fixed; 
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
    a {
        font-weight: 900;
        font-size: 3rem;
        color: whitesmoke;
        text-decoration: underline;
        text-decoration-color: #d96ed4a6;
        line-height: 5rem;
        height: 4rem;
    }
    
}`
const NavLogo = styled(Link)`
cursor: pointer;
`;

const ImgLogo = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
margin-left: 50px;
`

export default SideNav;