import './App.css';
import Headers  from './ComponentsJs/Header';
import { Summary } from './ComponentsJs/Summary';
import { Skills } from './ComponentsJs/Skills';
import { Education } from './ComponentsJs/Education';
import { Experience } from './ComponentsJs/Experience';
import { Languages } from './ComponentsJs/Languages';
import { Websites } from './ComponentsJs/Websites';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';






function App() {

  const [loader, setLoader] = useState(false)

  const downloadPDF = () =>{
    const capture = document.querySelector('.actual');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('CV.pdf');
    })
  }
  return (
    <div className="App">
     <div className='actual' style={{
      marginLeft: '300px',
      marginRight: '300px',
      marginTop: '100px',
      marginBottom: '50px'

     }}>
      <div className='App-header'></div>
     <Headers />
     <Summary />
     <Skills />
     <Experience/>
     <Education />
     <Languages />
     <Websites />
     </div>
     <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
    </div>
    
  );
}

export default App;
