import React from 'react'
import Main from '../Components/Dashboard/Main'
import Base from '../Layouts/Base'


export default function Home() {
    return (
        <>
            <Main />
        </>

    )
}

Home.layout = (page) => <Base children={page} title={"Home"} />
