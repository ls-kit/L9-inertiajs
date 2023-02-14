import React from 'react';
import Button from '../../Components/UIElements/Button';
import Base from '../../Layouts/Base';
import Default from '../../Layouts/Default';

export default function Buttons() {
    return (
        <>
            <Button />
        </>

    )
}


Buttons.layout = (page) => <Base children={page} title={"Buttons"} />
