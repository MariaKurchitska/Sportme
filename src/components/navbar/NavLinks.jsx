import './navbar.scss'


const NavLinks = () => {
    const links = [
        {name: 'Жінки', submenu: true, sublinks:[
            {
                Head: 'Взуття',
                sublink: [
                    {name: 'Кросівки', link: '/'},
                    {name: 'Кеди', link: '/'},
                    {name: 'Сандалі', link: '/'},
                    {name: 'Черевики', link: '/'},
                    {name: 'Шльопанці', link: '/'},
                    {name: 'Чоботи', link: '/'},
                    {name: 'Біг', link: '/'},
                ]
            }
        ]
        },
        {name: 'Чоловіки'},
        {name: 'Діти'},
        {name: 'Обладнання'},
        {name: 'Розпродаж'},
    ];
    return (
        <>
            {links.map((link) => (
                <div>
                    <div>
                    <h1>{link.name}</h1>
                        {link.submenu && (
                            <div>
                                <div>
                                    <div>
                                        {
                                            link.sublinks.map((mysublinks)=>(
                                                <div>
                                                    <h2>{mysublinks.Head}</h2>
                                                    {mysublinks.sublink.map(slink=>(
                                                        <li>
                                                            {slink.name}
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                     </div>
                                </div> 
                            </div>
                            )}
                        </div>
                    </div>
                ))}
            </>
        )}

export default NavLinks;

