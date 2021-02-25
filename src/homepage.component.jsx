import React from 'react'
import './homepage.styles.scss'

export const Homepage = () => {
    return (
        <section className='homepage'>
            <nav className='main-nav'>
                <section className='menu-item'>
                    <div className='content'>
                        <h2 className="directory-title">
                            Sneakers
                        </h2>
                        <p className='directory-subtitle'>
                            Shop now
                        </p>
                    </div>
                </section>
                <section className='menu-item'>
                    <div className='content'>
                        <h2 className="directory-title">
                            Hats
                        </h2>
                        <p className='directory-subtitle'>
                            Shop now
                        </p>
                    </div>
                </section>
                <section className='menu-item'>
                    <div className='content'>
                        <h2 className="directory-title">
                            Scarfs
                        </h2>
                        <p className='directory-subtitle'>
                            Shop now
                        </p>
                    </div>
                </section>
                <section className='menu-item'>
                    <div className='content'>
                        <h2 className="directory-title">
                            Mens
                        </h2>
                        <p className='directory-subtitle'>
                            Shop now
                        </p>
                    </div>
                </section>
                <section className='menu-item'>
                    <div className='content'>
                        <h2 className="directory-title">
                            Womens
                        </h2>
                        <p className='directory-subtitle'>
                            Shop now
                        </p>
                    </div>
                </section>
            </nav>
        </section>
    )
}