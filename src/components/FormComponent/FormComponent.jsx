import React from 'react'
import styles from './FormComponent.module.scss'
const FormComponent = () => {
  return (
    <div>
        <h1 className={styles.title}>Crear producto</h1>
        <br />
        <form className={styles.formContainer}>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Descripción'/>
            <input type="text" placeholder='URL Imagen'/>
            <input type="number" placeholder='Precio'/>
            <input type="number" placeholder='Stock'/>
            <input type="text" placeholder='Categorías'/>
        </form>
        <div className={styles.button}>
           <input type="submit" /> 
        </div>
        
    </div>
  )
}

export default FormComponent