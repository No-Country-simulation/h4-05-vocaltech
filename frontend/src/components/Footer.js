import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';  

export const FooterVocalTech = () => {  
  return (  
    <CDBBox className="shadow fixed-bottom" style={{ backgroundColor: '#21081a', color: 'white', padding: '20px' }}>  
      <CDBBox  
        display="flex"  
        justifyContent="between"  
        alignItems="center"  
        className="mx-auto flex-wrap"  
        style={{ width: '80%' }}  
      >  
        <CDBBox display="flex" alignItems="center">  
          <a href="/" className="d-flex align-items-center p-0 text-light">  
            {/* <img  
              alt="logo"  
              src=""   
              width="30px"  
            />   */}
            <span className="ms-4 h5 mb-0 font-weight-bold">VocalTech</span>  
          </a>  
        </CDBBox>  
        <CDBBox>  
          <small className="ms-2">&copy; VocalTech, 2024. Derechos reservados.</small>  
        </CDBBox>  
        <CDBBox display="flex">  
          <CDBBtn flat color="dark" className="p-2">  
            <CDBIcon fab icon="facebook-f" />  
          </CDBBtn>  
          <CDBBtn flat color="dark" className="mx-3 p-2">  
            <CDBIcon fab icon="twitter" />  
          </CDBBtn>  
          <CDBBtn flat color="dark" className="p-2">  
            <CDBIcon fab icon="instagram" />  
          </CDBBtn>  
        </CDBBox>  
      </CDBBox>  
    </CDBBox>  
  );  
};