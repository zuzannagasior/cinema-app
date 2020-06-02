import React from 'react';
import pulp from '../../assets/pulp.jpg';

const MovieItem = () => {
  return (
    <div style={{padding: "32px", maxWidth: "50%"}}>
        <header style={{width: "100%", textAlign: "center", marginBottom: "8px"}}>
        <h1>Pulp Fiction (1994)</h1>
        </header>
        <div style={{width: "100%", height: "100%", display: "flex", paddingTop: "16px"}}>
        <section style={{width: "calc(40% - 16px)"}}><img style={{width: "100%", height: "auto", objectFit: "cover"}} src={pulp} alt=""/></section>
        <section style={{paddingLeft: "16px", width: "60%"}}>
            <p><span style={{fontWeight: "300"}}>czas trwania</span> 146 min</p>
            <p><span style={{fontWeight: "300"}}>gatunek</span> Gangsterski</p>
            <p><span style={{fontWeight: "300"}}>reżyseria</span> Quentin Tarantino</p>
            <p><span style={{fontWeight: "300"}}>produkcja</span> USA</p>
            <br />
            <p>Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.</p>
            <br />
            <p><span style={{fontWeight: "300"}}>seanse</span> <span style={{color: "#3797a4"}}>14:50 15:20</span></p>
        </section>
        </div>
    </div>
  );
}

export default MovieItem;