import React from 'react'
import Header from './Header'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'

const HomePage = () => {
    return (
        <div className='vh-100'>
            <Header />
            <div className='d-flex h-75'>
                <div className='w-25 h-100 bg-primary d-flex flex-column justify-content-center'>
                    <NavigationComponent />

                </div>
                <div className='w-75 h-100 d-flex flex-column justify-content-center bg-success'>
                    <ContentComponent />
                </div>

            </div>
            <FooterComponent />
        </div>
    )
}

export default HomePage