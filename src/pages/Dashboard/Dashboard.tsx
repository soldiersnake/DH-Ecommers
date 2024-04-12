import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        amiiboSeries:'',
        character:'',
        gameSeries:'',
        head:'',
        image:'',
        name:'',
        releaseDate:'',
        tail:'',
        type:'',
        price: 0,
    });

    useEffect(() => {
        const userLogin = localStorage.getItem('userLogin');
        if(!userLogin){ //si no existe el userLogin nos redirigimos al login
            navigate('/login');
        }
    },[]);

    const handleLogout = () => {
        localStorage.removeItem('userLogin');
        navigate('/login')
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]: value,
        })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(product);
        
    };

  return (
    <div className={styles.container}>
      <div>
        <h1>Dasboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControlLogin}>
            <label htmlFor="amiiboSeries">AmiiboSeries</label>
            <input
                type="text"
                id="amiiboSeries"
                name="amiiboSeries"
                value={product.amiiboSeries}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="character">Personaje</label>
            <input
                type="text"
                id="character"
                name="character"
                value={product.character}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="gameSeries">GameSeries</label>
            <input
                type="text"
                id="gameSeries"
                name="gameSeries"
                value={product.gameSeries}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="head">Head</label>
            <input
                type="text"
                id="head"
                name="head"
                value={product.head}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="image">Image</label>
            <input
                type="url"
                id="image"
                name="image"
                value={product.image}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="releaseDate">Fecha de lanzamiento</label>
            <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                value={product.releaseDate}
                onChange={handleChange}
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="tail">Tail</label>
            <input
                type="text"
                id="tail"
                name="tail"
                value={product.tail}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="type">Tipo</label>
            <input
                type="text"
                id="type"
                name="type"
                value={product.type}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <label htmlFor="price">Precio</label>
            <input
                type="text"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
            />
        </div>
        <div className={styles.formControlLogin}>
            <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  )
}

export default Dashboard
