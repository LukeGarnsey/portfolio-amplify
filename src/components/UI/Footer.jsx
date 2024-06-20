import github from '../assets/images/icons/github-mark-white.svg';
import linkedIn from '../assets/images/icons/LI-In-Bug.png';
export default function Footer(){
  return (
    <div className="container py-5 mt-5" style={styles.center}>
        <a className='mx-5' href="https://github.com/LukeGarnsey" target='_blank'><img style={styles.setWidth} className='hoverable-icon img-overlay' src={github} /></a>
        <a className='mx-5' href="https://www.linkedin.com/in/luke-garnsey-89380a128" target='_blank'><img style={styles.setWidth} className='hoverable-icon img-overlay' src={linkedIn} /></a>
    </div>
  );
}
const styles = {
  center:{
    margin:'auto',
    width: '50%',
    textAlign: 'center'
  },
  setWidth:{
    width:'45px'
  }
}