import SearchSection from '../Search/Search';
import UserSection from '../User/User';
import './Header.css'


const HeaderSection = () => {
    return (
        <>
            <div className='header-style'>
                <img className='logo-style' src="/images/Logo.png" alt="" />
                <SearchSection />
                <UserSection />
            </div>
            
        </>
    )
}

export default HeaderSection;