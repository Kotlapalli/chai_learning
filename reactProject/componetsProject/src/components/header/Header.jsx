import logo from './contents/logo.png'

const Header = ()=> {
    return (
        <>
        <header>
            <div className='headD'>
                <img  src={logo} alt="logo" id="logo" />
                <div className='headI'>
                    <p className='headerI'>home</p>
                    <p className='headerI'>about</p>
                    <p className='headerI'>contact Us</p>
                </div>
                <div className='headL'>
                    <div className='headL1'>
                        <p className='headerL'>login</p>
                        <p className='headerL'>register</p>
                    </div>
                    <div className='headL2'>
                        <i class="material-icons" id='Umenu' >view_headline</i>
                        <div className='headL3'>
                            <p className='headerL3'>login</p>
                            <p className='headerL3'>register</p>
                        </div>
                    </div>
                </div>    
            </div>
            
           
        </header>
        
        </>
    )
}

export default Header