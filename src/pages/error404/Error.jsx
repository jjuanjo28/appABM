import React from 'react'

// importo desde la carpeta de imagenes la imagen error
import error from '../../images/error-404.jpg'


export default function Error() {
  return (
    <div>
        <img src={error} alt='Imagen error'/>
    </div>
  )
}
