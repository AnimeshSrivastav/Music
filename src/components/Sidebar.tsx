import { data } from './SidebarData'
import { useNavigate } from 'react-router-dom'
import '../css/sidebar.css'


export default function Sidebar() {
    const navigate = useNavigate()
    return (
        <>
            <div className='sidebar'>

                {
                    data.map((item, index): any => {
                        return (
                            <div key={index} className='sidebar__element' onClick={() => { navigate(`${item.link}`) }}>
                                <div className="sidebar__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebar__title">
                                    {item.title}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );

}
