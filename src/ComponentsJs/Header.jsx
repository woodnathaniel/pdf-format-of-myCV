import React from 'react'
import '../styles/Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div className='main-cont'>
      <div className='profile' style={{}}>
        <div style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
         <AccountCircleIcon  color="disabled" sx={{fontSize: 180 }} /> 
        </div>
      </div>
      <div className='list' style={{gap:'10px'}}>
        <h3 style={{marginLeft: '30px'}}>NATHANIEL ADUSEI POKU</h3>
        <ul style={{ listStyleType: 'none' }}>
          <li style={{ textAlign:'left', textJustify:'inter-word', }}><LocationOnIcon color='primary' />Kenyasi, Ahofa Region Ghana</li>
          <li><ContactPhoneIcon color='primary'/>+233 554 038 446</li>
          <li><MailIcon color='primary'/>nathanielwood002@gmail.com</li>
          <li><LinkedInIcon color='primary'/> www.linkedin.com/in/nathaniel-adusei-poku-6a17802</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
