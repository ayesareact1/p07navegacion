import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditarCliente() {

    const params = useParams();

    useEffect(() => {
        console.log(params.cif)
    }, [params])

    return (
        <div>EditarCliente</div>
    )
}
