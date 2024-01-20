import { Facebook, Instagram } from '@mui/icons-material';

const HeaderOptions = () => {
    return (
        <div className="headerOptions">
            <a href='/'>Home</a>
            <a href='/recipies'>Recipies</a>
            <a href='/about'>About</a>
            <div className="socialIcons">
                <Facebook />
                <Instagram />
            </div>
        </div>
    )
}

export default HeaderOptions