import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return(
        <>
            <section className='container-sidebar'> 
                <div className='new-chat'>
                    <button>Novo chat<FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <div className='chat-list'>

                </div>
                <div className='infos'>
                    <hr/>
                     <button><FontAwesomeIcon icon={faCircleInfo} /> Sobre</button>      
                </div>
            </section>
        </>
    )
}

export default Sidebar;